import React from "react";
import { useLocation } from "react-router-dom";
import "../style.css";

const Cart = () =>{
    const location= useLocation();
    const {product}=location.state|| {};
    
    return(
            <div className="tiles">
                <h1>Products in cart</h1>
                {product ? (
                <div>
                    <h3>{product.title}</h3>
                    <img className="tile-image" src={product.images} />
                    <p>description: {product.description}</p>
                </div>
                ):(
                    <p>No products</p>
                )}
            </div>
     );
}

export default Cart;