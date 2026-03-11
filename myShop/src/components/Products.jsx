import React ,{useState,useEffect}from 'react'
import '../styles/Products.css'
function Products({darkMode}) {
   const [product, setProduct] = useState([]);
    useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
      <main className="products" id="products">

        {product.length === 0 &&(
        <div>
          <h2>😕 No products found</h2>
          <p>Try searching with a different name or category.</p>
        </div>
        )}
        
        { product.map((item,index)=>(
        <div key={item.id} className={`card ${darkMode ? 'dark' : ' '}`}>
          <img src={item.image} alt={item.title} width="150"/>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <button>Add to Cart</button>
        </div>



        ))}
          
          
        
      </main>
  );
}

export default Products