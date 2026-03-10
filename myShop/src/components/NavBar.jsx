import React from 'react'
import '../styles/NavBar.css'


function NavBar() {
  return (
  <nav className="navbar">
    <h1 className="logo">🛒 VanillaShop</h1>

    <div className="nav-right">

      <div className="search-box">
        <input type="text" id="searchInput" placeholder="Search products..." />
        <span>🔍</span>
      </div>

      <button id="themeToggle">🌙</button>

      <button id="cartBtn">🛍️ <span id="cartCount">0</span></button>
    </div>
  </nav>
  )
}

export default NavBar