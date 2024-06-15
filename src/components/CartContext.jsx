import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    console.clear();
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (productToAdd) => {
    setCart((currentCart) => {
      const isProductInCart = currentCart.some(
        (item) => item.id === productToAdd.id
      );
      if (!isProductInCart) {
        return [...currentCart, productToAdd];
      } else {
        return currentCart;
      }
    });
  };

  const removeItem = (itemId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        cartItemCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartProvider, CartContext };
