import React from 'react'
import '../styles/CartPanel.css'
import { FaTimes } from "react-icons/fa";

function CartPanel({toggleCart,darkMode}) {
  return (
    <aside className={`cart-panel ${darkMode? "dark":" "} `} id="cartPanel">
    <div className="cart-header">
      <h2>Your Cart</h2>
      <button id="closeCart" onClick={toggleCart}>
        <FaTimes size={20} color="#4f46e5"/>
      </button>
    </div>
    <div id="cartItems"></div>
    <h3>Total: $<span id="totalPrice">0</span></h3>
  </aside>
  )
}

export default CartPanel