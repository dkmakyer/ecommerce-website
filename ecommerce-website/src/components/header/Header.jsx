import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMagnifyingGlass, faHeart, faEye, faForward, faBackward, faStar, faCaretRight, faTruckFast } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="app-name">
          <NavLink to="/Home">Agbogbloshie <FontAwesomeIcon icon={faTruckFast}/></NavLink>
        </div>
        <div className="links">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Sign-up">Sign-up</NavLink>
        </div>
        <div className="search-bar">
            <input type="text" placeholder='what are you looking for?' />
            <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass}/>
        </div>
        <div className="cart-image">
          <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
      </div>
    </>
  )
}

export default Header
