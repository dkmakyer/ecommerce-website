import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCaretRight, faEye, faHeart, faMapPin, faStar } from "@fortawesome/free-solid-svg-icons";
import images from "../../images";

const Home = () => {
  const { pepsi } = images;
  return (
    <>
      <div className="home-container">
        <div className="ads">
          <div className="ads-links">
            <ul>
              <li >
                Women's Fashion <FontAwesomeIcon className="caret-link-one" icon={faCaretRight} />
              </li>
              <li >
                Men's Fashion <FontAwesomeIcon className="caret-link-two" icon={faCaretRight} />
              </li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby's & Toy's</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div className="ads-images">
            <div className="ads-info">
              <p>pepsi cola</p>
              <h1>Up to 10% off Voucher</h1>
              <button>
                Shop Now <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="flash-sales-container">
          <div className="today">
            <FontAwesomeIcon style={{fontSize: "30px", marginRight: "10px"}}icon={faMapPin}/><p>Today's</p>
          </div>
          <div className="timer">
            <h1>Flash Sales</h1>
            <div className="countdown">
              <p><span className="reduce-time-size">Days</span> <span>03</span> <span className="colon">:</span></p>
              <p><span className="reduce-time-size">Hours</span> <span>23</span> <span className="colon">:</span></p>
              <p><span className="reduce-time-size">Minutes</span> <span>19</span> <span className="colon">:</span></p>
              <p><span className="reduce-time-size">Seconds</span> <span>56</span></p>
            </div>
            <div className="scroll">
              <div className="left-arrow"><FontAwesomeIcon  icon={faArrowLeft}/></div>
              <div className="right-arrow"><FontAwesomeIcon icon={faArrowRight}/></div>
            </div>
          </div>
          <div className="items-container">
            <div className="item">
              <div className="discount-area">
                <p>-40%</p>
                <div className="seen">
                  <button  className="favorite"><FontAwesomeIcon className="favorite" icon={faHeart}/></button>
                  <button  className="viewed"><FontAwesomeIcon className="viewed" icon={faEye}/></button>
                </div>
                <button className="add-item">Add to Cart</button>
              </div>
              <div className="item-info">
                <h4>game pad</h4>
                <p>$300 <span>$350</span></p>
                <div className="stars">
                  <FontAwesomeIcon className="star" icon={faStar}/>
                  <FontAwesomeIcon className="star" icon={faStar}/>
                  <FontAwesomeIcon className="star" icon={faStar}/>
                  <FontAwesomeIcon className="star" icon={faStar}/>
                  <FontAwesomeIcon className="star" icon={faStar}/>
                  <p>(90)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
