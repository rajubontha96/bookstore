import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./index.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              
              <img src={item.image} alt={item.title} />

              <div className="cart-info">
                <h4>{item.title}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Qty: {item.qty}</p>

                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>

            </div>
          ))}

          <h3 className="total">Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;