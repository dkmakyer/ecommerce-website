import React from 'react'
import "./MiniAd.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const MiniAd = () => {
  return (
    <>
        <div className="mini-ad">
            <p>pepsi cola</p>
            <h1>Up to 10% off Voucher</h1>
            <button>
                Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>      
    </>
  )
}

export default MiniAd
