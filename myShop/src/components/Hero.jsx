import React from 'react'
import '../styles/Hero.css'
function Hero() {


  return (
    <section className="hero">
    <div className="hero-content">
      <h1>Discover Your Next Favorite Product</h1>
      <p>
         Shop the best products from electronics to fashion — all in one place.
         Simple, fast, and built with modern web technologies.
      </p>
      <div className="hero-buttons">
        <button className="hero-btn primary">Shop Now</button>
        <button className="hero-btn secondary">Explore Categories</button>
      </div>
    </div>

    <div className="hero-image">
      <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="Shopping Illustration"/>
    </div>
</section>
  )
}

export default Hero
