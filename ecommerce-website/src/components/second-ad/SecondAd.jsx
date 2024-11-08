import React from 'react'
import "./SecondAd.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SecondAd = () => {
  return (
    <>
        <div className="second-ad">
          <p className="second-ad-title">Categories</p>
          <h1>Enhance Your Shopping Experience</h1>
          <div className="second-ad-countdown">
            <p>
              <span className="countdown-number">03</span>
              <span className="second-ad-reduce-time-size">Days</span>
              
            </p>
            <p>
              <span className="countdown-number">23</span>
              <span className="second-ad-reduce-time-size">Hours</span>
            </p>
            <p>
              <span className="countdown-number">19</span> 
              <span className="second-ad-reduce-time-size">Minutes</span>
            </p>
            <p>
              <span className="countdown-number">56</span>
              <span className="second-ad-reduce-time-size">Seconds</span>
            </p>
          </div>
          <button>
            Buy Now <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>      
    </>
  )
}

export default SecondAd
