import React from "react";
import '../componentsstyles/GroceriesList.css';
import GroceriesList from "./GroceriesList";


function Cart({cartItem, handleRemoveItem}){
    return(
        <div className="whole-grocery-page">
        <h2>Cart</h2>
        {cartItem?.length > 0 ? (
          <ul>
            {cartItem.map((item) => (
              <div className="item-list" key={item.id}>
                {item.title} (Quantity: {item.quantity})
                <button onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <p>No items added</p>
        )}
      </div>
    );
}
export default Cart;