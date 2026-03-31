import { useState } from "react";
import booksData from "../../data/books";
import BookCard from "../../components/BookCard";
import "./index.css";

const Books = () => {
  const [search, setSearch] = useState("");

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="books">
      <h2>Famous Books</h2>

      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;