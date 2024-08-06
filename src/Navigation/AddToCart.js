import React from "react";
import { useLocation } from "react-router-dom";
import "../style.css";

const Cart = () =>{
    const location= useLocation();
    const {product}=location.state|| {};
    
    return(
            <div>
                <h1>Products in cart</h1>
                {product ? (
                <div className="tile">
                    <h3>{product.title}</h3>
                    <img className="tile-image" src={product.images} />
                    <p>Price: ${product.price}</p>
                </div>
                ):(
                    <p>No products</p>
                )}
            </div>
     );
}

export default Cart;