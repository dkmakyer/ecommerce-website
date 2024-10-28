import React from 'react'
import "./LogIn.css"
import images from "../../images";

const LogIn = () => {
  const { miniMart} = images;
  return (
    <>
      <div className="log-in-container">
        <div className="log-in-image-container">
          <img className="log-in-img" src={miniMart} alt="mart-image" />
        </div>
        <div className="log-in-form">
          <h2>Log in to Agbogbloshie</h2>
          <h4>Enter your details below</h4>
          <form action="">
            <input type="text" placeholder='Email or Phone Number'/>
            <input type="password" placeholder='Password'/>
            <div className="log-in-buttons">
              <button className='log-in-button'>Log-In</button>
              <button className='forget-password-button'>forget-password?</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LogIn
