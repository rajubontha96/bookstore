import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./index.css";

const BookCard = ({ book }) => {
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Check if book already in cart
  const isAdded = cart.some(item => item.id === book.id);

  const handleAdd = () => {
    addToCart(book);
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="card">
      
      <img
        src={book.image}
        alt={book.title}
        className="card-image"
      />

      <h3 className="title">{book.title}</h3>

      <p className="price">₹{book.price}</p>

      <Link to={`/books/${book.id}`} className="details-link">
        Details
      </Link>

      {!isAdded ? (
        <button className="add-btn" onClick={handleAdd}>
          Add to Cart
        </button>
      ) : (
        <button className="go-cart-btn" onClick={handleGoToCart}>
          Go to Cart 🛒
        </button>
      )}

    </div>
  );
};

export default BookCard;