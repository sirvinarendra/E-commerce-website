import React from "react";
import "./offer.css";
import exculsive_image  from '../Assets/exclusive_image.png'
export const Offer = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exculsive_image} alt="" />
      </div>
    </div>
  );
};
