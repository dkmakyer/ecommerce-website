import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCaretRight } from "@fortawesome/free-solid-svg-icons";
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
            <p className="today-left-border"></p><p>Today's</p>
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
              <FontAwesomeIcon icon={faArrowLeft}/>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
