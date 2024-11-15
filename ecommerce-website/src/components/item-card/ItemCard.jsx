import { useEffect, useState} from "react";
import "./ItemCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const ItemCard = ({title, image, price, rating}) => {
  const [discount, setDiscount] =  useState(0);
  const [newPrice, setNewPrice] = useState(price);
  const styleSpecs = {
    backgroundImage : image ? `url(${image})` : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: 0,
  }
  useEffect(()=>{
    const calculatedDiscount = Math.max(20, Math.floor(Math.random() * 40));
    setDiscount(Number(calculatedDiscount));
    setNewPrice(Math.max(0, price - calculatedDiscount));
  }, []);
  return (
    <>
        <div className="item">
          <div className="discount-area" style={styleSpecs}>
            <p>{discount}</p>
            <div className="seen">
              <button className="favorite-button">
                <FontAwesomeIcon className="favorite" icon={faHeart} />
              </button>
              <button className="viewed-button">
                <FontAwesomeIcon className="viewed" icon={faEye} />
              </button>
            </div>
            <button className="add-item">Add to Cart</button>
          </div>
          <div className="item-info">
            <h4>{title}</h4>
            <p style={{ color: "red" }}>
              ${newPrice.toFixed(2)}
              <span
                style={{
                  color: "grey",
                  textDecoration: "line-through",
                  marginLeft: "10px",
                }}
              >
                ${price}
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
    </>
  );
};

export default ItemCard;
