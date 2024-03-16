import Product from "./Components/Product/Product";
import { useState } from "react";
import listItem from "./Components/Product/shoes";
import Cart from "./Components/Cart/Cart";
import './ShoppingCart.css';

function ShoppingCart()
{
    const [listCartItem, setListCartItem] = useState([]);
    const addToCart = (product) => {
        setListCartItem([...listCartItem, {product, quantity: 1}]);
    }
    const deleteFromCart = (item) => {
        const index = listCartItem.findIndex((cartItem) => cartItem.product.id === item.product.id);
        if (index > -1) {
            listCartItem.splice(index, 1);
            setListCartItem([...listCartItem]);
        }
    }
    const updateFromCart = (item) => {
        const index = listCartItem.findIndex((cartItem) => cartItem.product.id === item.product.id);
        if (index > -1) {
            listCartItem[index].quantity = item.quantity;
            setListCartItem([...listCartItem]);
        }
    }
    const checkExistProductInCart = (product) => {
        const index = listCartItem.findIndex((cartItem) => cartItem.product.id === product.id);
        if (index > -1) {
            return true;
        }
        return false;
    }
    return (
        <div className="shopping-cart">
            <Product products={listItem} addProductToCart={addToCart} checkProductInCart={checkExistProductInCart}/>
            <Cart items={listCartItem} deleteProductFromCart={deleteFromCart} updateProductFromCart={updateFromCart}/>
        </div>
    )

}
export default ShoppingCart;