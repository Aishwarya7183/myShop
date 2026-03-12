import React,{useState} from 'react'
import '../styles/NavBar.css'
import { FaShoppingCart,FaSun,FaMoon } from "react-icons/fa";


function NavBar({toggleDarkMode,darkMode,toggleCart}) {
  return (
  <nav className="navbar">
    <h1 className="logo">🛒 VanillaShop</h1>

    <div className="nav-right">

      <div className="search-box">
        <input type="text" id="searchInput" placeholder="Search products..." />
        <span>🔍</span>
      </div>

      <button   onClick={()=>{toggleDarkMode()}} id="themeToggle" >
        {darkMode ? <FaSun size={20} color="#4f46e5"/>: <FaMoon size={20} color="#4f46e5" />}
      </button>

      <button id="cartBtn" onClick={toggleCart}>
        <FaShoppingCart size={20} color="#4f46e5"/>
        <span id="cartCount">0</span>

      </button>
    </div>
  </nav>
  )
}

export default NavBar