import React from 'react'
import "./BestSelling.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import ItemCard from '../item-card/ItemCard';

const BestSelling = () => {
  return (
    <>
        <div className="best-selling-container">
          <div className="best-selling-heading">
            <FontAwesomeIcon
              style={{ fontSize: "30px", marginRight: "10px" }}
              icon={faFire}
            />
            <p>This Month</p>
          </div>
          <div className="best-selling-navigation">
            <h1>Best Selling Products</h1>
            <div className="best-selling-view-all">
              <button className="best-selling-view-all-button">
                View All
              </button>
            </div>
          </div> 
          <div className="best-selling-items-container">
            <ItemCard/>
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>         
        </div>      
    </>
  )
}

export default BestSelling
