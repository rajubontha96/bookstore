import { useParams } from "react-router-dom";
import books from "../../data/books";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./index.css";

const BookDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const book = books.find(b => b.id === parseInt(id));

  return (
    <div className="details">
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>
      <h3>₹{book.price}</h3>

      <button onClick={() => addToCart(book)}>
        Add to Cart
      </button>
    </div>
  );
};

export default BookDetails;