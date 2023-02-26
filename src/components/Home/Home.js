import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

import Shop from '../Shop/Shop';
import './Home.css';

const Home = () => {
  const [cart, setCart] = useState([]);
  const products = useLoaderData()

  //add to cart button

  const handleAddToCart = product => {
    const exists = cart.find(tshirt => tshirt._id === product._id);
    if (exists) {
      alert('This t-shirt already added to Your Cart plz try another!')
    }
    else {
      const newCart = [...cart, product]
      setCart(newCart)
      alert('successfully Added')
    }
  };
  //remove from cart

  const removeFromCart = product => {
    const remaining = cart.filter(tshirt => tshirt._id !== product._id)
    setCart(remaining)

  }


  return (
    <div className="home-container">

      <div className='shop-container'>

        {
          products.map(product => <Shop
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Shop>)
        }

      </div>
      <div className="cart-container">
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
        ></Cart>
      </div>
    </div>

  );
};

export default Home;