import React from "react";
import "./FlashSales.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import ItemCard from "../item-card/ItemCard";

const FlashSales = () => {
  return (
    <>
      <div className="flash-sales-container">
        <div className="today">
          <FontAwesomeIcon
            style={{ fontSize: "30px", marginRight: "10px" }}
            icon={faMapPin}
          />
          <p>Today's</p>
        </div>
        <div className="timer">
          <h1>Flash Sales</h1>
          <div className="countdown">
            <p>
              <span className="reduce-time-size">Days</span> <span>03</span>
              <span className="colon">:</span>
            </p>
            <p>
              <span className="reduce-time-size">Hours</span> <span>23</span>
              <span className="colon">:</span>
            </p>
            <p>
              <span className="reduce-time-size">Minutes</span>
              <span>19</span> <span className="colon">:</span>
            </p>
            <p>
              <span className="reduce-time-size">Seconds</span>
              <span>56</span>
            </p>
          </div>
          <div className="scroll">
            <div className="left-arrow">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="right-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="items-container">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
        <button className="view-all-products-button">View All Products</button>
      </div>
    </>
  );
};

export default FlashSales;
