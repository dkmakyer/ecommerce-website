import React from "react";
import "./NewArrival.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";

const NewArrival = () => {
  return (
    <>
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
            <div className="item-text">
              <h2>Iphone 13</h2>
              <p>Up to 10% off Voucher</p>
              <button>
                Shop Now <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="item2">
            <div className="item-text">
              <h2>Reebok</h2>
              <p>Up to 10% off Voucher</p>
              <button>
                Shop Now <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="item3and4">
            <div className="item3">
              <div className="item-text">
                <h2>Camera</h2>
                <p>Up to 10% off Voucher</p>
                <button>
                  Shop Now <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
            <div className="item4">
              <div className="item-text">
                <h2>Pepsi Cola</h2>
                <p>Up to 10% off Voucher</p>
                <button>
                  Shop Now <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
