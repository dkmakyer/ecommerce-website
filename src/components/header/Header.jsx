import {useState} from 'react'
import "./Header.css"
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMagnifyingGlass, faHeart, faTruckFast, faIdCard } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [active, setActive] = useState(null);
  const location = useLocation();

  const originalColor = {color: "rgba(70, 33, 70, 0.5)"};
  const newColor = {color: "rgba(202, 8, 228, 0.9)"}


  const links = [
    {id:"1", endpoint:"/", name:"Home"},
    {id:"3", endpoint:"/About", name:"About"},
    {id:"2", endpoint:"/Contact", name:"Contact"},
    {id:"4", endpoint:"/Sign-up", name:"Sign-up"}
  ];

  function toggleActive(id){
    setActive(id);
  }

  return (
    <>
      <div className="header-container">
        <div className="app-name">
          <NavLink to="/">Agbogbloshie <FontAwesomeIcon icon={faTruckFast}/></NavLink>
        </div>
        <nav className="links">
          {
            links.map(link => (
              <NavLink key={link.id} to={link.endpoint} className={({isActive}) => isActive ? "active" : ""} onClick={() => toggleActive(link.id)}>{link.name}</NavLink>
            ))
          }
        </nav>
        <div className="search-bar">
            <input type="text" placeholder='what are you looking for?' />
            <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass}/>
        </div>
        <div className="header-cart-image">
          <Link to="/Cart"><FontAwesomeIcon style={ location.pathname === "/Cart" ? newColor : originalColor} icon={faShoppingCart}/></Link>
          <Link to="/Wishlist"><FontAwesomeIcon style={ location.pathname === "/Wishlist" ? newColor : originalColor} icon={faHeart}/></Link>
          <FontAwesomeIcon style={ location.pathname === "/Sign-up"  ? newColor : originalColor} icon={faIdCard}/>
        </div>
      </div>
    </>
  )
}

export default Header
