import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./index.css";

const BookCard = ({ book }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>₹{book.price}</p>

      <Link to={`/books/${book.id}`}>Details</Link>

      <button onClick={() => addToCart(book)}>
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;