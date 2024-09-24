import React, { useState, useEffect } from "react";
import '../componentsstyles/GroceriesList.css';

function GroceriesList() {
  const [groceries, setGroceries] = useState([]);
  const [clickedItem, setClickedItem] = useState([]);

  // Fetch groceries data from API
  useEffect(() => {
    fetch('http://localhost:8000/groceries')
      .then(response => {
     return response.json();
      })
      .then(result => {
        setGroceries(result.data); // Accessing 'data' array from result
      })
      .catch(error => console.error('Error fetching groceries data:', error));
  }, []);

  
  function handleButtonClick(item) {
    setClickedItem(prevItems => {
      const foundItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (foundItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { id: item.id, title: item.title, quantity: 1 }];
      }
    });
  }

 
  function handleRemoveItem(removeItemId) {
    setClickedItem(prevItems =>
      prevItems.filter(item => item.id !== removeItemId)
    );
  }

  return (
    <div className="flex-container">
      <h2>Groceries List</h2>
      {groceries.length > 0 ? (
        <div className="whole-grocery-page">
          <ul>
            {groceries.map((item) => (
              <div className="item-list" key={item.id}>
                {item.title} <p>description:{item.description}</p>
                <button onClick={() => handleButtonClick(item)}>
                  Add to cart
                </button>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <p>No data available</p>
      )}

      <div className="whole-grocery-page">
        <h2>Cart</h2>
        {clickedItem.length > 0 ? (
          <ul>
            {clickedItem.map((item, index) => (
              <div className="item-list" key={index}>
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
    </div>
  );
}

export default GroceriesList;
