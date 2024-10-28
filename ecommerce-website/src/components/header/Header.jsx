import {useState} from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMagnifyingGlass, faHeart, faEye, faForward, faBackward, faStar, faCaretRight, faTruckFast } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [active, setActive] = useState(null);

  const links = [
    {id:"1", endpoint:"/", name:"Home"},
    {id:"2", endpoint:"/Contact", name:"Contact"},
    {id:"3", endpoint:"/About", name:"About"},
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
              <NavLink key={link.id} to={link.endpoint} className={active === link.id ? "active" : ""} onClick={() => toggleActive(link.id)}>{link.name}</NavLink>
            ))
          }
        </nav>
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
