import { useState } from "react";
import "./Sign-up.css";
import images from "../../images";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const { google } = images;

  const [signUpData, setSignUPData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function fillSignUp(event) {
    const { name, value } = event.target;
    setSignUPData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  function submitSignUp(event) {
    event.preventDefault();
    alert(
      `form submitted: ${signUpData.name}, ${signUpData.email}, ${signUpData.password}`
    );
    //send form to backend database
  }

  return (
    <>
      <div className="sign-up-container">
        <div className="sign-up-form">
          <h2>Create an Account</h2>
          <h4>Enter your details below</h4>
          <form action="" onSubmit={submitSignUp}>
            <div className="sign-up-inputs">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={signUpData.name}
                onChange={fillSignUp}
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                name="email"
                value={signUpData.email}
                onChange={fillSignUp}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={signUpData.password}
                onChange={fillSignUp}
              />
            </div>
            <div className="sign-up-buttons">
              <button type="submit" className="create-account-button">
                Create Account
              </button>
              <button type="submit" className="google-sign-in-button">
                <span>Sign in with Google</span>
                <img src={google} alt="google image" />
              </button>
            </div>
            <div className="sign-up-log-in">
              <p>Already have an account?</p>
              <NavLink to="/Log-in" className="sign-up-log-in-link-button">
                Log in
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
