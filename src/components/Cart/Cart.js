import React from 'react';
import './Cart.css';

const Cart = ({cart,removeFromCart}) => {
    
    return (
        <div className='cart-container'>
            <h1>Order Summary</h1>
          <h5>Order quantity:{cart.length}</h5>
          {
            cart.map(tshirt=> <p
            key={tshirt._id}
            >
                {tshirt.name}
                <button
                onClick={()=>removeFromCart(tshirt)}>X</button>

            </p>)
          }
          {
            cart.length !== 3? <p>The Minimum Buying Quantity is 3 </p> : <p>Thank you For Buying</p>
          }
        </div>
    );
};

export default Cart;