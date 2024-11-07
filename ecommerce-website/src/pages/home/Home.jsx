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
  faGamepad,
  faHeadphones,
  faMobilePhone
} from "@fortawesome/free-solid-svg-icons";
import images from "../../images";
import Ads from "../../components/topmost-ads/Ads";
import FlashSales from "../../components/flash-sales/FlashSales";
import Category from "../../components/category/Category";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Ads/>
        <FlashSales/>
        <Category/>
      </div>
    </>
  );
};

export default Home;
