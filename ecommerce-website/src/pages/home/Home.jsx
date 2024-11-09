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
  faShop,
  faStar,
  faStarAndCrescent,
  faStarHalf,
  faStarOfDavid,
  faStarOfLife,
  faTimes,
  faTimesRectangle,
} from "@fortawesome/free-solid-svg-icons";
import images from "../../images";
import Ads from "../../components/topmost-ads/Ads";
import FlashSales from "../../components/flash-sales/FlashSales";
import Category from "../../components/category/Category";
import ItemCard from "../../components/item-card/ItemCard";
import BestSelling from "../../components/best-selling/BestSelling";
import SecondAd from "../../components/second-ad/SecondAd";
import Products from "../../components/products/Products";
import MiniAd from "../../components/mini-ad/MiniAd";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Ads />
        <FlashSales />
        <Category />
        <BestSelling />
        <SecondAd/>
        <Products/>
        <div className="new-arrivals-container">
          <div className="new-arrivals-heading">
            <FontAwesomeIcon
              style={{ fontSize: "30px", marginRight: "10px" }}
              icon={faStar}
            />
            <p>Featured</p>
          </div>
          <div className="new-arrivals-navigation">
            <h1>New Arrival</h1>
          </div>
          <div className="new-arrivals-items-container">
            <div className="item1">
              <h3>pepsi cola</h3>
              <p>Up to 10% off Voucher</p>
              <button>
                  Shop Now <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
              <div className="item2">
              <h3>pepsi cola</h3>
              <p>Up to 10% off Voucher</p>
              <button>
                  Shop Now <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>            
            <div className="item3">
              <h3>pepsi cola</h3>
              <p>Up to 10% off Voucher</p>
              <button>
                  Shop Now <FontAwesomeIcon icon={faArrowRight} />
              </button>
              </div>            
            <div className="item4">
              <h3>pepsi cola</h3>
              <p>Up to 10% off Voucher</p>
              <button>
                  Shop Now <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Home;
