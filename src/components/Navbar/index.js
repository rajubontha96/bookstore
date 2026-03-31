import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => (
  <nav className="nav">
    <h2 className="logo">Bookstore</h2>
    
    <div>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </nav>
);

export default Navbar;