import React from "react";
import {  useNavigate } from "react-router-dom";
import '../componentsstyles/Navigation.css'

function Navigation(){
   const navigate = useNavigate();
    return(
        
             
        <div>
            <nav className="container" >
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() =>navigate('/menu')}>Category</button>
                <button onClick={() => navigate('/contactus')}>Contact US</button>
                <button onClick={() => navigate('/cart')}>Cart</button>
            </nav>
        </div>
        
    );
}
export default Navigation;