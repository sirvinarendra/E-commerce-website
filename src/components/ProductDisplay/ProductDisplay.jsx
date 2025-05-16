import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [productsize, setProductsize] = useState("M");
  const [sizestatus, setSizestatus] = useState("inactive");
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            $ {product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            {" "}
            $ {product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt , closle
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div
              className={productsize === "S" ? "activesize" : ""}
              onClick={() => {
                setProductsize("S");
              }}
            >
              S
            </div>
            <div
              className={productsize === "M" ? "activesize" : "inactivesize"}
              onClick={() => {
                setProductsize("M");
              }}
            >
              M
            </div>
            <div
              className={productsize === "L" ? "activesize" : "inactivesize"}
              onClick={() => {
                setProductsize("L");
              }}
            >
              L
            </div>
            <div
              className={productsize === "XL" ? "activesize" : "inactivesize"}
              onClick={() => {
                setProductsize("XL");
              }}
            >
              XL
            </div>
            <div
              className={productsize === "XXL" ? "activesize" : "inactivesize"}
              onClick={() => {
                setProductsize("XXL");
              }}
            >
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id, productsize);
            setProductsize("M");
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category:</span> Women,T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};
