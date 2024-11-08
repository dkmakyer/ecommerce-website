import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBasketShopping,
  faBowlFood,
  faCamera,
  faComputer,
  faFire,
  faGamepad,
  faHeadphones,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";
import images from "../../images";
import Ads from "../../components/topmost-ads/Ads";
import FlashSales from "../../components/flash-sales/FlashSales";
import Category from "../../components/category/Category";
import ItemCard from "../../components/item-card/ItemCard";
import BestSelling from "../../components/best-selling/BestSelling";
import SecondAd from "../../components/second-ad/SecondAd";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Ads />
        <FlashSales />
        <Category />
        <BestSelling />
        <SecondAd/>
      </div>
    </>
  );
};

export default Home;
