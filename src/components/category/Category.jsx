import React from "react";
import "./Category.css";
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
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";

const Category = () => {
  return (
    <>
      <div className="category-container">
        <div className="category-heading">
          <FontAwesomeIcon
            style={{ fontSize: "30px", marginRight: "10px" }}
            icon={faBasketShopping}
          />
          <p>Categories</p>
        </div>
        <div className="category-navigation">
          <h1>Browse by Category</h1>
          <div className="category-scroll">
            <div className="category-left-arrow">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="category-right-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="category-list">
          <ul>
            <li>
              <FontAwesomeIcon
                className="category-image"
                icon={faMobilePhone}
              />
              Phones
            </li>
            <li>
              <FontAwesomeIcon className="category-image" icon={faComputer} />
              Computers
            </li>
            <li>
              <FontAwesomeIcon className="category-image" icon={faBowlFood} />
              FoodStuff
            </li>
            <li>
              <FontAwesomeIcon className="category-image" icon={faCamera} />
              Cameras
            </li>
            <li>
              <FontAwesomeIcon className="category-image" icon={faHeadphones} />
              HeadPhones
            </li>
            <li>
              <FontAwesomeIcon className="category-image" icon={faGamepad} />
              Gaming
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
