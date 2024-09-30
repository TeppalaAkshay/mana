import React, { useState, useEffect } from "react";
import '../componentsstyles/GroceriesList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/actions';


function GroceriesList() {
  const [groceries, setGroceries] = useState([]);
 const dispatch = useDispatch();
 const cartItem = useSelector(state=>state.cart);

  
  useEffect(() => {
    fetch('http://localhost:8000/groceries')
      .then(response => {
     return response.json();
      })
      .then(result => {
        setGroceries(result.data);
      })
      .catch(error => console.error('Error fetching groceries data:', error));
  }, []);

  
  function handleButtonClick(item) {
    dispatch(addItem(item));
  }

 
  function handleRemoveItem(id) {
   dispatch(removeItem(id));
  }

  return (
    <div className="flex-container">
      <h2>Groceries List</h2>
      {groceries?.length > 0 ? (
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
        {cartItem?.length > 0 ? (
          <ul>
            {cartItem.map((item, index) => (
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
