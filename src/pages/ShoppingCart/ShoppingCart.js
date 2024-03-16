import Product from "./Components/Product/Product";
import { useState, useEffect } from "react";
import Cart from "./Components/Cart/Cart";
import './ShoppingCart.css';
import axios from 'axios';
function ShoppingCart() {
    const [listCartItem, setListCartItem] = useState([]);
    const [listItem, setListItem] = useState([]);

    const fetchData = async () => {
        try {
            console.log('fetching data');
            const response = await axios.get('https://gshoesbe.onrender.com/api/product');
            setListItem(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    useEffect(() => {
        fetchData();
        console.log('fetching data from api');
        const savedData = localStorage.getItem('cartData');
        if (savedData) {
            setListCartItem(JSON.parse(savedData));
        }
    }, []);

    const addToCart = (product) => {
        setListCartItem([...listCartItem, { product, quantity: 1 }]);
        localStorage.setItem('cartData', JSON.stringify([...listCartItem, { product, quantity: 1 }]));
    }

    const deleteFromCart = (item) => {
        const index = listCartItem.findIndex((cartItem) => cartItem.product._id === item.product._id);
        if (index > -1) {
            listCartItem.splice(index, 1);
            setListCartItem([...listCartItem]);
            localStorage.setItem('cartData', JSON.stringify([...listCartItem]));

        }
    }

    const updateFromCart = (item) => {
        const index = listCartItem.findIndex((cartItem) => cartItem.product._id === item.product._id);
        if (index > -1) {
            listCartItem[index].quantity = item.quantity;
            setListCartItem([...listCartItem]);
            localStorage.setItem('cartData', JSON.stringify([...listCartItem]));
        }
    }

    const checkExistProductInCart = (product) => {
        const index = listCartItem.findIndex((cartItem) => cartItem.product._id === product._id);
        if (index > -1) {
            return true;
        }
        return false;
    }

    return (
        <div className="shopping-cart">
            <Product products={listItem} addProductToCart={addToCart} checkProductInCart={checkExistProductInCart} />
            <Cart items={listCartItem} deleteProductFromCart={deleteFromCart} updateProductFromCart={updateFromCart} />
        </div>
    )

}
export default ShoppingCart;