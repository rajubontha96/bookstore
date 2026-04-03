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
    <div className="details-container">
      
      <div className="details-card">
        
        <img
          src={book.image}
          alt={book.title}
          className="details-image"
        />

        <div className="details-info">
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
          <p className="desc">{book.description}</p>

          <h2>₹{book.price}</h2>

          <button onClick={() => addToCart(book)}>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookDetails;