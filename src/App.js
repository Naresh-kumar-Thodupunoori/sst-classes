import { useState } from 'react';
import './App.css';
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
import useWindowDimensions from './components/hooks/useWindowDimensions';
function App() {
  console.log(a, b);
  const windowSize = useWindowDimensions();

  let [cart, setCart] = useState({});
  function increaseQuantity(product) {
    //we need to make a copy so that it causes re-rendering.
    const newCart = { ...cart };

    if (!newCart[product.id]) {
      newCart[product.id] = {
        ...product,
        quantity: 0,
        totalPrice: product.price,
      };
    }
    newCart[product.id].quantity++;
    newCart[product.id].totalPrice += product.price;
    setCart(newCart);
  };

  function decreaseQuantity(product) {

    const newCart = { ...cart };

    if (newCart[!product.id]) return;
    
    newCart[product.id].quantity--;

    if (newCart[product.id].quantity == 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  };
  return (
    <div className="App">
      <Products
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <div>Current Width: {window.innerWidth} </div>
      <div>Current Height: {window.innerHeight} </div>
    </div>
  );
}

export default App;
