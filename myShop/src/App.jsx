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

const [cartItems, setCartItems] = useState([]);
const [itemCount, setItemCount]=useState(0);

useEffect(()=>{
  const count=cartItems.reduce((acc,item)=>acc+item.quantity,0);
  setItemCount(count);
},[cartItems])

const addToCart = (product) => {
  setCartItems((prev) => {

    const existing = prev.find(
      (item) => item.id === product.id
    );

    if (existing) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
};

const increaseQty = (ProductId) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === ProductId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQty = (ProductId) => {
  setCartItems((prev) =>
    prev
      .map((item) =>
        item.id === ProductId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};


  return (
    <>
      <NavBar toggleDarkMode={toggleDarkMode}  darkMode={darkMode} toggleCart={toggleCart} itemCount={itemCount}/>
      <Hero/>
      <Products  darkMode={darkMode} addToCart={addToCart} />
      <Footer/>
      {openCart && <CartPanel toggleCart={toggleCart}  darkMode={darkMode} cartItems={cartItems}   increaseQty={increaseQty} decreaseQty={decreaseQty}/>}
      
    </>
  )
}

export default App