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

  const [displayDiscount, setDisplayDiscount] = React.useState(null);
  
  function showDiscount(input){
    setDisplayDiscount(input);
  }

  return (
    <>
      <div className="home-container">
        <Ads />
        <FlashSales  onShowDiscount={() => showDiscount(true)} seconds={timer.seconds} minutes={timer.minutes} hours={timer.hours} days={timer.days}/>
        <Category />
        <BestSelling onShowDiscount={() => showDiscount(false)} />
        <SecondAd  seconds={timer.seconds} minutes={timer.minutes} hours={timer.hours} days={timer.days}/>
        <Products onShowDiscount={() => showDiscount(false)}/>
        <NewArrival />
        <Reassurance/>
      </div>
    </>
  );
};

export default Home;
