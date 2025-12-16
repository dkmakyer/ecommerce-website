import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import BackButton from "../../components/back-button/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSadCry, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../features/cartSlice";

const Cart = () => {
  const cartState = useSelector((state) => state.cart);
  const cartItems = cartState.cartItems;
  const cartTotalPrice = cartState.totalPrice;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isCartPage] = useState(true);
  const displayProducts = cartItems.map((product) => {
    return (
      <div className="cart-item" key={product.title}>
        <div className="cart-item-wrapper">
          <h3>{product.title}</h3>
          <ul>
            <li>
              <img className="cart-image" src={product.image} alt="cart-image" />
            </li>
            <li>${product.price}</li>
            <li>
              {product.quantity}
              <Link to="/Item-details" state={{ item: { title: product.title, image: product.image, price: product.price, rating: product.rating, hadDiscount: product.hasDiscount } }} style={{ marginLeft: "1rem" }}><FontAwesomeIcon icon={faEdit} /></Link>
            </li>
            <li>
              ${parseFloat(product.price * product.quantity).toFixed(2)}
              <p className="delete-item" onClick={() => dispatch(removeFromCart(product.title))}><FontAwesomeIcon icon={faTrash} /></p>
            </li>
          </ul>
        </div>
      </div>
    );
  });


  return (
    <>
      <div className="cart-container">
        <div className="cart-navigation">
          <div className="cart-back-button">
            <BackButton />
          </div>
          <h2>Your Cart</h2>
        </div>
        <div className="cart-heading">
          <ul>
            <li><h3>Product</h3></li>
            <li><h3>Price</h3></li>
            <li><h3>Quantity</h3></li>
            <li><h3>Sub-total</h3></li>
          </ul>
        </div>
        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <h3>
              You Cart is Empty <FontAwesomeIcon icon={faSadCry} />
            </h3>
          ) : (
            displayProducts
          )}
        </div>
        <div className="cart-buttons">
          <button onClick={() => navigate("/")}>Return To Shop</button>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
        <div className="cart-footer">
          <div className="coupon">
            <input type="text" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </div>
          <div className="cart-total">
            <h2>Cart Total</h2>
            <h4>Subtotal<span style={{ marginLeft: "3rem" }}>${parseFloat(cartTotalPrice).toFixed(2)}</span></h4>
            <h4>Shipping: <span>Free</span></h4>
            <p>Total <span style={{ marginLeft: "4.2rem" }}>${parseFloat(cartTotalPrice).toFixed(2)}</span></p>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
