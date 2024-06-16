import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (productToAdd) => {
    setCart((currentCart) => {
      const isProductInCart = currentCart.some(
        (item) => item.id === productToAdd.id
      );
      if (!isProductInCart) {
        return [...currentCart, { ...productToAdd, quantity: 1 }];
      } else {
        return currentCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    });
  };

  const removeItem = (itemId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const totalPrice = parseFloat(
    cart
      .reduce((total, item) => {
        const itemPrice = Number(item.price); // Ensure item.price is treated as a number
        return (
          total + (isNaN(itemPrice) ? 0 : itemPrice * (item.quantity || 1))
        );
      }, 0)
      .toFixed(2)
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
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
