import React from 'react';
import  './Offers.css';
import shopping_activity from '../Assets/shopping_activity.png';

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check</button>
        </div>
        <div className='offers-right'>
            <img src={shopping_activity} alt=""/>

        </div>  
      
    </div>
  )
}

export default Offers;
