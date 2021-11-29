import React, { useState } from 'react';
import './App.css';
import Products from './Products';


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() { 
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('PAGE_PRODUCTS');


const removeFromCart = (productToRemove) => {
  setCart(
    cart.filter((product) => product !== productToRemove)
  );
};


const addToCart = (product) => {
  setCart([...cart, { ...product }]);
};

const navigateTo = (nextPage) => {
  setPage(nextPage);
};

    const renderCart = () => (
      <>
        <h1>Cart</h1>
        <div className="products">
          {cart.map((product, idx) => (
            <div className="product" key={idx}>
              <h3>{product.name}</h3>
              <h4>{product.const}</h4>
              <img src={product.image} alt={product.name}/>
              <button onClick={() => removeFromCart(product)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </>
    );

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({cart.length})
        </button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products 
        </button>
      </header>
      {page === PAGE_PRODUCTS && (<Products addToCart={addToCart}/>)}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
