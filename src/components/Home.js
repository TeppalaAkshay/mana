import React from "react";
import '../componentsstyles/Home.css';
import GroceriesList from "./GroceriesList";

function Home(){
    return(
        <div className="Homebody">
        <GroceriesList/>
        </div>
    );
}
export default Home;