import { useContext, useEffect, useState } from "react";
import "./ItemCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faStar, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cartSlice";

const ItemCard = ({ title, image, price, rating, hasDiscount, isWishlistPage = false, isCartPage = false}) => {
  const { updateFavorites, removeFavorites } = useContext(FavoritesContext);
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);
  const [newPrice, setNewPrice] = useState(price);
  const [hovered, setHovered] = useState(false);
  const [isClicked, setIsClicked] = useState({cartSignal: false, favSignal: false});

  const baseStyle = {
    backgroundImage: image ? `url(${image})` : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    width: "120px",
    zIndex: 1,
    transition: "all 0.3s ease",
  };
  const enlargedItem = {
    ...baseStyle,
    width: "160px",
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if(!isCartPage){
      dispatch(addToCart({ title, image, price, rating, hasDiscount }));
      setIsClicked((prev) => !prev);
      setIsClicked((prev) => ({...prev, cartSignal: !prev.cartSignal}));
    }else{
      dispatch(removeFromCart(id));
    }
  }
  
  const handleFavoritesClick = (e) => {
    e.stopPropagation(); //makes sure the Link doesn't listen to the click and route to the view-all page
    e.preventDefault(); //makes sure the the default routing behavior brought by the Link tag doesn't happen
    if(!isWishlistPage){
      updateFavorites({ title, image, price, rating, hasDiscount });
      setIsClicked((prev) => ({...prev, favSignal: !prev.favSignal }));
    }else{
      removeFavorites(title);
    }
  }

  //implement code to make the discount consistent and never change instead of making it random, and create a context that displays the discount or not
  useEffect(() => {
    const calculatedDiscount =Math.max(20, Math.floor(Math.random() * 40));
    const calculatedNewPrice =Math.max(20, price - calculatedDiscount);
    setDiscount(parseFloat(calculatedDiscount.toFixed(2)));
    setNewPrice(parseFloat(calculatedNewPrice.toFixed(2)));
  }, []);
  return (
    <>
      <Link
        to="/Item-details"
        state={{ item: { title, image, price, rating, hasDiscount } }}
      >
        <div
          className="item"
          style={{ marginRight: "50px", marginBottom: "100px" }}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          <div
            className="discount-area"
            style={hovered ? enlargedItem : baseStyle}
          >
            {hasDiscount && <p>-{discount}%</p>}
            {hovered && (
              <div className="seen">
                <button
                  className="favorite-button"
                  onClick={handleFavoritesClick}
                >
                  <FontAwesomeIcon
                    style={{
                      color: "rgb(255, 255, 255)",
                      width: "15px",
                      height: "15px",
                      border: "1px solid rgb(255, 134, 219)",
                      backgroundColor: isClicked.favSignal
                        ? "rgb(255, 134, 219)"
                        : "rgb(209, 209, 209)",
                      borderRadius: "50%",
                      padding: "0.3rem",
                      cursor: "pointer",
                    }}
                    icon={isWishlistPage ? faX : faHeart}
                  />
                </button>
              </div>
            )}
            {hovered && <button className="add-item" onClick={handleAddToCart}>Add to Cart</button>}
          </div>
          <div className="item-info">
            <h4>{title}</h4>
            <p style={{ color: "red" }}>
              ${parseFloat(newPrice).toFixed(2)}
              <span
                style={{
                  color: "grey",
                  textDecoration: "line-through",
                  marginLeft: "10px",
                }}
              >
                {hasDiscount && `$${parseInt(parseFloat(price)).toFixed(2)}`}
              </span>
            </p>
            <div className="stars">
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <p style={{ color: "grey" }}>({rating})</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ItemCard;
