import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === book.id);
      if (exist) {
        return prev.map(item =>
          item.id === book.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...book, qty: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart(cart.filter(item => item.id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;