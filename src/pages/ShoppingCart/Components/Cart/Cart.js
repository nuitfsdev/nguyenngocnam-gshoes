
import images from "../../../../assets/images";
import './Cart.css';

function Cart(props) {
    const deleteItem = (item) => {
        props.deleteProductFromCart(item);
    }

    const minusItem = (item) => {
        if(item.quantity === 1) 
        {
            deleteItem(item)

        };
        if (item.quantity > 1) {
            item.quantity = item.quantity - 1;
            props.updateProductFromCart(item);
        }
    }

    const plusItem = (item) => {
        item.quantity = item.quantity + 1;
        props.updateProductFromCart(item);
    }

    return (
        <div className="cart card">
            <div className="card-logo">
                <img src={images.nike} alt="logo" />
            </div>

            <div className="card-tittle">
                Your cart
                <div className="cart-total">
                    ${props.items?.length === 0 ? <div>0.00</div> :
                        props.items?.reduce((total, item) => {
                            return total + item.product.price*item.quantity;
                        }, 0).toFixed(2)
                    }
                </div>
            </div>
            <div className='card-listItem'>
                {props.items?.length === 0 ? <div className="cart-empty">Your cart is empty</div> :
                    props.items?.map((item, index) => {

                        return  <div className={`cart-item`} key={index}>
                            <div className="cart-itemLeft">
                                <div className="cart-itemImage" style={{ backgroundColor: item.product.color }}>
                                    <div className="cart-itemImageBlock">
                                        <img src={item.product.image} alt={item.product.name} />
                                    </div>
                                </div>
                            </div>
                            <div className="cart-itemRight">
                                <div className="cart-itemName">{item.product.name}</div>
                                <div className="cart-itemPrice">${item.product.price}</div>
                                <div className="cart-itemAction">
                                    <div className="cart-itemCount">
                                        <div className="cart-itemCountButton" onClick={() => minusItem(item)} >
                                            -
                                        </div>
                                        <div className="cart-itemCountNumber">{item.quantity}</div>
                                        <div className="cart-itemCountButton" onClick={() => plusItem(item)}>
                                            +
                                        </div>
                                    </div>
                                    <div className="cart-itemRemove" onClick={(e) => deleteItem(item)}>
                                        <img src={images.trash} alt="remove" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );

}

export default Cart;