import React, { useState } from "react";
import "./ItemDetails.css";
import BackButton from "../../components/back-button/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateQuantity } from "../../features/cartSlice";

const ItemDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { state } = useLocation();
  const item = state?.item;

  if (!item) {
    return <p>Item cannot be found</p>;
  }

  let currentItem = cartItems.find(cartItem => cartItem.title === item.title);

  const [itemCount, setItemCount] = useState(currentItem?.quantity || 1);


  function handleCount(e) {
    const { className } = e.currentTarget;
    switch (className) {
      case "subtract-item":
        setItemCount(prev => Math.max(prev - 1, 0));
        break;
      case "add-item":
        setItemCount(prev => prev + 1);
        break;
      default:
        return itemCount;
    }
  }

  function handleUpdate(){
    dispatch(updateQuantity({title: item.title, quantity: itemCount, price: item.price, image: item.image}));
    navigate("/Cart");
  }

  return (
    <>
      <div className="item-detail-container">
        <div className="item-detail-back-button">
          <BackButton />
        </div>
        <div className="item-detail">
          <div >
            <img className="item-detail-image" src={item.image} alt="item-image" />
          </div>
          <div className="item-detail-info">
            <h2>{item.title}</h2>
            <div className="stars">
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <FontAwesomeIcon className="star" icon={faStar} />
              <p className="review-container">
                (150 Reviews) | <span>In stock</span>
              </p>
            </div>
            <h3>Unit Price: ${parseFloat(item.price).toFixed(2)}</h3>
            <div className="buttons">
              <div className="item-count">
                <button className="subtract-item" onClick={handleCount}><h1>-</h1></button>
                <p>{itemCount}</p>
                <button className="add-item" onClick={handleCount}>+</button>
              </div>
              <button className="update-button" onClick={handleUpdate}>Add to cart</button>
            </div>
            <h3>Total Price for Item: ${parseFloat(item.price * itemCount).toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
