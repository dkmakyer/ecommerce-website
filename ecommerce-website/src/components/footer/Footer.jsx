import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight, faCarBurst,faHeadset,faShield } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="subscription">
            <h2>Agbogbloshie</h2>
            <h4>Subscribe</h4>
            <p>Get 10% off your first order</p>
            <div className="submit-subscription">
                <input type="text" placeholder='Enter your Email' />
                <FontAwesomeIcon className='subscription-icon' icon={faArrowAltCircleRight}/>
            </div>
        </div>
        <div className="support">
            <h2>Support</h2>
            <p>B113/16 Okum Loop, Accra, Ghana.</p>
            <p>agbogbloshie@gmail.com</p>
            <p>+233241322622</p>
        </div>
        <div className="account">
            <h2>Account</h2>
            <ul>
                {/* these are links to other parts of the app */}
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>WishList</li>
                <li>Shop</li>
            </ul>
        </div>
        <div className="policy-info">
            <h2>Quick Link</h2>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div className="download-app">
            <h2>Download App</h2>
            <p>Save $3 with App. New User Only.</p>
            <div className="download-buttons">
                <button><img src="" alt="play store-pic" />Get it on Google Play</button>
                <button><img src="" alt="Apple-store-pic" />Download on the App Store</button>
            </div>
            <div className="social-media">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faLinkedin}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
