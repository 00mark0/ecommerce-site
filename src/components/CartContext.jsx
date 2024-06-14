import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Define CartContext
const CartContext = createContext();

// Create CartProvider Component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (productToAdd) => {
    setCart((currentCart) => [...currentCart, productToAdd, productToAdd]);
  };

  const removeItem = (itemId) => {
    console.log(`Removing product: ${itemId}`);
    setCart((currentCart) => currentCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// PropTypes for CartProvider
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartProvider, CartContext };
