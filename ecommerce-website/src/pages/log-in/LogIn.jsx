import {useState} from 'react'
import "./LogIn.css"
import images from "../../images";

const LogIn = () => {
  const { miniMart} = images;
  const [logInData, setLogInData] = useState({email:"", password:""});
  
  function fillLogIn(event){
    const {name, value} = event.target;
    setLogInData(prev => ({...prev, [name]: value}));
  }

  function submitLogIn(event){
    event.preventDefault();
    alert(`log-in-form Submitted: ${logInData.email}, ${logInData.password}`);
    //send form to backend database
  }
  
  return (
    <>
      <div className="log-in-container">
        <div className="log-in-image-container">
          <img className="log-in-img" src={miniMart} alt="mart-image" />
        </div>
        <div className="log-in-form">
          <h2>Log in to Agbogbloshie</h2>
          <h4>Enter your details below</h4>
          <form onSubmit={submitLogIn}>
            <input type="text" placeholder='Email or Phone Number' name="email" value={logInData.email} onChange={fillLogIn}/>
            <input type="password" placeholder='Password' name="password" value={logInData.password} onChange={fillLogIn}/>
            <div className="log-in-buttons">
              <button type='submit' className='log-in-button'>Log-In</button>
              <button type='submit' className='forget-password-button'>forget-password?</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LogIn
