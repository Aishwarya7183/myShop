import React from "react";
import "../styles/CartPanel.css";
import { FaTimes } from "react-icons/fa";
// import emptyCart from "../assets/empty-cart.png";

function CartPanel({ toggleCart, darkMode, cartItems, increaseQty, decreaseQty }) {

  return (
    <aside className={`cart-panel ${darkMode ? "dark" : ""}`}>

      <div className="cart-header">
        <h2>Your Cart</h2>

        <button id="closeCart" onClick={toggleCart}>
          <FaTimes size={20} color="#4f46e5" />
        </button>
      </div>
      <div className="cartProducts">
      {cartItems.length === 0 ? (
        // <img src={emptyCart} className="emptyCartImg" alt="Empty Cart" />
        <h1>No item founded</h1>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className={`cartItem ${darkMode ? "dark" : ""}`}>

            <div className="cartItemCard">

              <img
                className="cartImg"
                src={item.image}
                alt={item.title}
              />

              <div className="cartItemDetails">
                <p><strong>{item.title}</strong></p>

                <div className="qtyControls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>

            </div>

          </div>

        ))
      )}
      </div>

    </aside>
  );
}

export default CartPanel;