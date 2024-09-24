import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contactus from "./components/Contactus";
import Cart from "./components/Cart";
import './componentsstyles/Home.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App(){
  return(
    <Router>
    <div><h1 className="logo">Mana Groceries</h1>
      <Navigation/>
      
      <Routes>
         <Route path="/" exact element={<Home/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/contactus" element={<Contactus/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          
        </Routes>
       
            
    </div>
     </Router>

  )
}
export default App;
