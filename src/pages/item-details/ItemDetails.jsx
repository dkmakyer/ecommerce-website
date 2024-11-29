import React, { useState } from "react";
import "./ItemDetails.css";
import BackButton from "../../components/back-button/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faRecycle,
  faStar,
  faVanShuttle,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const ItemDetails = () => {
  const [itemCount, setItemCount] =useState(0);

  function handleCount(e){
    const {className} = e.currentTarget;
    switch(className){
      case "subtract-item":
        setItemCount(prev => Math.max(prev - 1, 0));
        break;
      case "add-item":
        setItemCount(prev => prev + 1);
        break;
      default:
        return itemCount;
    }
  }

  const { state } = useLocation();
  const item = state?.item;
  if (!item) {
    return <p>Item cannot be found</p>;
  }
  return (
    <>
      <div className="item-detail-container">
        <div className="item-detail-back-button">
          <BackButton />
        </div>
        <div className="item-detail">
          <div >
            <img className="item-detail-image"src={item.image} alt="item-image" />
          </div>
          <div className="item-detail-info">
            <h2>{item.title}</h2>
            <div className="stars">
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <p className="review-container">
                (150 Reviews) | <span>In stock</span>
              </p>
            </div>
            <h3>${parseFloat(item.price).toFixed(2)}</h3>
            <div className="buttons">
              <div className="item-count">
                <button className="subtract-item" onClick={handleCount}><h1>-</h1></button>
                  <p>{itemCount}</p>
                <button className="add-item" onClick={handleCount}>+</button>
              </div>
              <button className="buy-button">Buy Now</button>
              <button className="item-detail-favorite">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
            <div className="delivery-buttons">
              <button>
                <FontAwesomeIcon className="delivery-button-fa-icon" icon={faVanShuttle} />
                <div className="delivery-button-info">
                  <h3>Free Delivery</h3>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </button>
              <button>
                <FontAwesomeIcon className="delivery-button-fa-icon" icon={faRecycle} />
                <div className="delivery-button-info">
                  <h3>Return Delivery</h3>
                  <p className="free-delivery-info">Free 30 Days Delivery Returns. Details</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
