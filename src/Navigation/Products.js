import React, { useState, useEffect } from "react";

const Products = () => {
  const [cosmetics, setCosmetics] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCosmetics(data.products); console.log(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <div>
        <ol>
          {cosmetics.map((product) => (
            <li className="tiles" key={product.id}>
              {product.title}
              <img
                className="tile-image"
                src={product.images[0]}
                alt={product.title}
              />
              <span>
                <button
                  className="addtoCart"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className="section">
        <h1>Products in cart</h1>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <img
                className="tile-image"
                src={item.images}
              />
              <p>Description: {item.description}</p>
            </div>
          ))
        ) : (
          <p>No products</p>
        )}
      </div>
    </>
  );
};

export default Products;