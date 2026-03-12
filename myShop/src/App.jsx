import React,{useState,useEffect} from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Products from './components/Products'
import CartPanel from './components/CartPanel'
function App() {
  const[darkMode,setDarkMode]=useState(false); 
  const toggleDarkMode=()=>{
    setDarkMode(!darkMode);
    if(!darkMode){
      document.body.classList.add('dark_mode');
    }else{
      document.body.classList.remove('dark_mode');
    }
  }
  const[openCart,setOpenCart]=useState(false);

  const toggleCart=()=>{
    setOpenCart(!openCart);
    const cartPanel=document.getElementById('cartPanel');
  }

  useEffect(() => {
  if (openCart) {
    document.body.style.overflow = "hidden";
    
  } else {
    document.body.style.overflow = "auto";
    
  }
}, [openCart]);
  return (
    <>
      <NavBar toggleDarkMode={toggleDarkMode}  darkMode={darkMode} toggleCart={toggleCart}/>
      <Hero/>
      <Products  darkMode={darkMode} />
      <Footer/>
      {openCart && <CartPanel toggleCart={toggleCart}  darkMode={darkMode} />}
      
    </>
  )
}

export default App