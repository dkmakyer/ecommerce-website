import React from "react";
import "./Home.css";
import Ads from "../../components/topmost-ads/Ads";
import FlashSales from "../../components/flash-sales/FlashSales";
import Category from "../../components/category/Category";
import BestSelling from "../../components/best-selling/BestSelling";
import SecondAd from "../../components/second-ad/SecondAd";
import Products from "../../components/products/Products";
import NewArrival from "../../components/new-arrival/NewArrival";
import Reassurance from "../../components/reassurance/Reassurance";
import useCountdown from "../../hooks/useCountdown";


const Home = () => {
  const initialTimer = {seconds: 60, minutes: 60, hours: 24, days: 31};
  const timer = useCountdown(initialTimer);

  return (
    <>
      <div className="home-container">
        <Ads />
         <FlashSales   seconds={timer.seconds} minutes={timer.minutes} hours={timer.hours} days={timer.days}/>
        {/* <Category /> */}
        {/*<BestSelling />
        <SecondAd  seconds={timer.seconds} minutes={timer.minutes} hours={timer.hours} days={timer.days}/>
        <Products />
        <NewArrival />
        <Reassurance/> */}
      </div>
    </>
  );
};

export default Home;
