import React, { useContext, useState } from "react";
import "./Cart.css";
import BackButton from "../../components/back-button/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cartState } = useContext(CartContext);
  const [isCartPage] = useState(true);
  const displayProducts = cartState.map((product) => {
    return (
      <div className="cart-item">
        <ul>
          <li>
            <img className="cart-image" src={product.image} alt="cart-image" />
            {product.title}
          </li>
          <li>${product.price}</li>
          <li>
            <input type="number" min="0" max="100" step="1" />
          </li>
          <li></li>
        </ul>
        <p className="delete-item"><FontAwesomeIcon icon={faTrash}/></p>
      </div>
    );
  });
  return (
    <>
      <div className="cart-container">
        <div className="cart-back-button">
          <BackButton />
        </div>
        <h2>Your Cart</h2>
        <div className="cart-heading">
          <ul>
            <li><h3>Product</h3></li>
            <li><h3>Price</h3></li>
            <li><h3>Quantity</h3></li>
            <li><h3>Sub-total</h3></li>
          </ul>
        </div>
        <div className="cart-items-container">
          {cartState.length === 0 ? (
            <h3
              style={{ width: "100%", fontSize: "2rem", marginLeft: "17rem" }}
            >
              You Cart is Empty <FontAwesomeIcon icon={faSadCry} />
            </h3>
          ) : (
            displayProducts
          )}
        </div>
        <div className="cart-buttons">
          <button>Return To Shop</button>
          <button>Update Cart</button>
        </div>
        <div className="cart-footer">
          <div className="coupon">
            <input type="text" placeholder="Coupon Code"/>
            <button>Apply Coupon</button>
          </div>
          <div className="cart-total">
            <h2>Cart Total</h2>
            <h4>Subtotal<span></span></h4>
            <h4>Shipping: <span>Free</span></h4>
            <p>Total <span></span></p>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
