import React from 'react'
import "./Sign-up.css"
import images from "../../images";

const SignUp = () => {
  const { shopping, miniMart, google } = images;
  return (
    <>
      <div className="sign-up-container">
        <div className="shopping-image-container">
          <img className="shopping-img" src={shopping} alt="cart-image" />
        </div>
        <div className="form">
          <h2>Create an Account</h2>
          <h4>Enter your details below</h4>
          <form action="">
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Email or Phone Number'/>
            <input type="password" placeholder='Password'/>
            <div className="buttons">
              <button className='create-account-button'>Create Account</button>
              <button className='google-sign-in-button'><img src={google} alt="google image" /><span>Sign in with Google</span></button>
            </div>
            <div className="log-in">
              <p>Already have an account?</p>
              <button className="log-in-button">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
