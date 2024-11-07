import React from "react";
import "./ItemCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const ItemCard = () => {
  return (
    <>
        <div className="item">
          <div className="discount-area">
            <p>-40%</p>
            <div className="seen">
              <button className="favorite">
                <FontAwesomeIcon className="favorite" icon={faHeart} />
              </button>
              <button className="viewed">
                <FontAwesomeIcon className="viewed" icon={faEye} />
              </button>
            </div>
            <button className="add-item">Add to Cart</button>
          </div>
          <div className="item-info">
            <h4>game pad</h4>
            <p style={{ color: "red" }}>
              $300{" "}
              <span
                style={{
                  color: "grey",
                  textDecoration: "line-through",
                  marginLeft: "10px",
                }}
              >
                $350
              </span>
            </p>
            <div className="stars">
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <p style={{ color: "grey" }}>(90)</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default ItemCard;
