import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Products = () => {
    const navigate = useNavigate();
    const [cosmetics, setCosmetics]=useState([])
    
    useEffect(() =>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {setCosmetics(data.products)
            {console.log(data)}
        });
}, []);
return(
<div>
   <ol > {cosmetics.map(product => (
        <li className="tiles" key={product.id}>
            {product.title}
          <img className="tile-image" src={product.images}/>
          <span><button className="addtoCart" onClick={()=> navigate("/cart", {state:{product}})}>Add to cart</button></span>
        </li>
        ))}   
    </ol>
</div>
);
};
export default Products;