import React from 'react'
import '../styles/Footer.css'
function Footer() {
  return (
    <footer className="footer">
  <div className="footer-container">


    <div className="footer-section">
      <h2>🛒 My Shop</h2>
      <p>
        My Shop is a modern e-commerce website built using pure HTML, CSS,
        and JavaScript with data from a public API.
      </p>
      <p>Simple. Fast. Modern.</p>
    </div>


    <div className="footer-section">
      <h3>Shop</h3>
      <ul>
        <li>All Products</li>
        <li>Electronics</li>
        <li>Jewelry</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
    </div>

    
    <div className="footer-section">
      <h3>Customer Support</h3>
      <ul>
        <li>Help Center</li>
        <li>FAQs</li>
        <li>Shipping Info</li>
        <li>Return Policy</li>
        <li>Order Tracking</li>
      </ul>
    </div>

   
    <div className="footer-section">
      <h3>Contact</h3>
      <ul>
        <li>Email: support@myshop.com</li>
        <li>Phone: +91 98765 43210</li>
        <li>Location: India</li>
        <li>Mon - Sat (9AM - 6PM)</li>
      </ul>
    </div>

  </div>


  <div className="footer-bottom">
    <p>© 2026 VanillaShop. All rights reserved.</p>
    <p>Built with React (Vite) | Data from FakeStoreAPI</p>
  </div>
</footer>
  )
}

export default Footer