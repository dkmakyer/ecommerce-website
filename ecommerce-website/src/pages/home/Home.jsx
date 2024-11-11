import React from "react";
import "./Home.css";
import Ads from "../../components/topmost-ads/Ads";
import FlashSales from "../../components/flash-sales/FlashSales";
import Category from "../../components/category/Category";
import BestSelling from "../../components/best-selling/BestSelling";
import SecondAd from "../../components/second-ad/SecondAd";
import Products from "../../components/products/Products";
import NewArrival from "../../components/new-arrival/NewArrival";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarBurst,
  faHeadset,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Ads />
        <FlashSales />
        <Category />
        <BestSelling />
        <SecondAd />
        <Products />
        <NewArrival />
        <div className="reassurance">
          <ul>
            <li>
              <FontAwesomeIcon className="reassurance-icon" icon={faCarBurst} />
              <h3>FREE AND FAST DELIVERY</h3>
              <p>free delivery over all orders over $140</p>
            </li>
            <li>
              <FontAwesomeIcon className="reassurance-icon" icon={faHeadset} />
              <h3>24/7 CUSTOMER SERVICE</h3>
              <p>Friendly 24/7 customer support</p>
            </li>
            <li>
              <FontAwesomeIcon className="reassurance-icon" icon={faShield} />
              <h3>MONEY BACK GUARANTEE</h3>
              <p>We return money within 30 days</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
