import React from "react";
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
          <div className="item-detail-image">
            <img src={item.image} alt="item-image" />
          </div>
          <div className="item-detail-info">
            <h2>{item.title}</h2>
            <div className="stars">
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
            </div>
            <p>
              (150 Reviews) | <span>In stock</span>
            </p>
            <h3>{item.price}</h3>
            <p>{item.rating}</p>
            <div className="buttons">
              <div className="item-count">
                <button>-</button>
                <p>item count</p>
                <button>+</button>
              </div>
              <button>Buy Now</button>
              <button className="item-detail-favorite">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
            <div className="delivery-buttons">
              <buttons>
                <FontAwesomeIcon icon={faVanShuttle} />
                <div className="delivery-button-info">
                  <h3>Free Delivery</h3>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </buttons>
              <buttons>
                <FontAwesomeIcon icon={faRecycle} />
                <div className="delivery-button-info">
                  <h3>Return Delivery</h3>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </buttons>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
