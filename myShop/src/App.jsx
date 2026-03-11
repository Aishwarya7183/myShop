import React,{useState} from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Products from './components/Products'
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
  return (
    <>
      <NavBar toggleDarkMode={toggleDarkMode}  darkMode={darkMode}/>
      <Hero/>
      <Products  darkMode={darkMode} />
      <Footer/>
    </>
  )
}

export default App