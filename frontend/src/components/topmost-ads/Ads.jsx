import React from "react";
import "./Ads.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";
import MiniAd from "../mini-ad/MiniAd";

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
          <MiniAd/>
        </div>
      </div>
    </>
  );
};

export default Ads;
