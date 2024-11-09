import React from 'react'
import "./Products.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft,faArrowRight,faShop} from "@fortawesome/free-solid-svg-icons";
import ItemCard from '../item-card/ItemCard';

const Products = () => {
  return (
    <>
        <div className="our-products-container">
          <div className="our-products-heading">
            <FontAwesomeIcon
              style={{ fontSize: "30px", marginRight: "10px" }}
              icon={faShop}
            />
            <p>Our Products</p>
          </div>
          <div className="our-products-navigation">
            <h1>Explore Our Products</h1>
            <div className="scroll">
              <div className="left-arrow">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="right-arrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
          <div className="our-products-items-container">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
          <button className="our-products-button">View All Products</button>
        </div>      
    </>
  )
}

export default Products
