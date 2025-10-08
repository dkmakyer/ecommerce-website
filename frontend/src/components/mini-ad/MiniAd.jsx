import React from 'react'
import "./MiniAd.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const MiniAd = () => {
  return (
    <>
        <div className="mini-ad">
            <h1>Pepsi Cola</h1>
            <h2>Up to 10% off Voucher</h2>
            <button>
                Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>      
    </>
  )
}

export default MiniAd
