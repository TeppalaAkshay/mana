import React,{useState, useEffect} from "react";
import "../style.css";

const Home = () => {
  const [api, setApi]=useState([]);

  useEffect(() =>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {setApi(data.products); 
    })
    
}, []);
    
  return (
    <div>
      <ul>
        {api.map(product => (
          <li key={product.id}>
            {product.title} - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

  
export default Home;