
import React from 'react';
import './Product.css';
import images from "../../../../assets/images";
function Product(props) {
    const handleClickAddToCart = (product) => {
        props.addProductToCart(product);
    }
    const checkExistItemInCart = (product) => {
       return props.checkProductInCart(product);
    }
    return (
        <div className="product card">
            <div className="card-logo">
                <img src={images.nike} alt="logo" />
            </div>
            <div className="card-tittle">Our Products</div>
            <div className='card-listItem'>
                {
                    props.products?.map((item, index) => {
                        return <div className="item" key={index}>
                            <div className="item-image" style={{ backgroundColor: item.color }}>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-name">{item.name}</div>
                            <div className="item-description">{item.description}</div>
                            <div className="item-bottom">
                                <div className="item-price">${item.price}</div>
                                { checkExistItemInCart(item) === false ?

                                <div className="item-button" onClick={() => handleClickAddToCart(item)}>
                                    <p>ADD TO CART</p>
                                </div> :
                                <div className="item-check">
                                    <img src={images.check} alt="check" />
                                </div>
                                }
                            </div>
                        </div>

                    })
                }
            </div>
        </div>
    );
}

export default Product;