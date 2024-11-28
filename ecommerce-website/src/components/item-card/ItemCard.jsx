import { useEffect, useState } from "react";
import "./ItemCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ItemCard = ({ title, image, price, rating, hasDiscount }) => {
  const [discount, setDiscount] = useState(0);
  const [newPrice, setNewPrice] = useState(price);
  const [hovered, setHovered] = useState(false);

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

  //implement code to make the discount consistent and never change instead of making it random, and create a context that displays the discount or not
  useEffect(() => {
    const calculatedDiscount = Math.max(20, Math.floor(Math.random() * 40));
    const calculatedNewPrice = Math.max(20, price - calculatedDiscount);
    setDiscount(parseFloat(calculatedDiscount.toFixed(2)));
    setNewPrice(parseFloat(calculatedNewPrice.toFixed(2)));
  }, []);
  return (
    <>
      <Link to="/Item-detail" state={{item: {title, image, price, rating, hasDiscount}}}>
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
                <button className="favorite-button">
                  <FontAwesomeIcon className="favorite" icon={faHeart} />
                </button>
                <button className="viewed-button">
                  <FontAwesomeIcon className="viewed" icon={faEye} />
                </button>
              </div>
            )}
            {hovered && <button className="add-item">Add to Cart</button>}
          </div>
          <div className="item-info">
            <h4>{title}</h4>
            <p style={{ color: "red" }}>
              ${newPrice}
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
      </Link>
    </>
  );
};

export default ItemCard;
