
import React from 'react';
import './Product.css';
import images from "../../../../assets/images";
import Item from '../Item/Item';
function Product(props) {
  return (
    <div className="product card">
      <div className="card-logo">
        <img src={images.nike} alt="logo" />
      </div>

      <div className="card-tittle">
        Our Products
      </div>
      <div className='card-listItem'>
        {  
            props.products.map((item, index) => {
                return <Item data={item} key={index} />
            })
        }
        

      </div>
    </div>
  );
}

export default Product;