import React from "react";
import "./Ads.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight,faCaretRight} from "@fortawesome/free-solid-svg-icons";

const Ads = () => {
  return (
    <>
      <div className="ads-container">
        <div className="ads-links">
          <ul>
            <li>
              Women's Fashion{" "}
              <FontAwesomeIcon className="caret-link-one" icon={faCaretRight} />
            </li>
            <li>
              Men's Fashion{" "}
              <FontAwesomeIcon className="caret-link-two" icon={faCaretRight} />
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
    </>
  );
};

export default Ads;
