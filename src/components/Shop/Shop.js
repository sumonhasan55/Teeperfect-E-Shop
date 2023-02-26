import React from 'react';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = ({ product, handleAddToCart }) => {
    const { name, picture, price } = product;
    console.log(name)

    return (
        <div className="">
            <div className='product-container'>
                <div className="">
                    <img src={picture} alt="" />
                </div>
                <div className="">
                    <p>{name}</p>
                    <p>Price:${price}</p>
                </div>
                <div >
                    <button className="cart-button" onClick={()=>handleAddToCart(product)}>Buy This</button>

                </div>
            </div>
        
        </div>
    );
};

export default Shop;