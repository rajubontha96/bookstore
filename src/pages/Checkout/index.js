import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const handleOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div>
      <h2>Checkout</h2>

      <p>Total Items: {cart.length}</p>

      <button onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;