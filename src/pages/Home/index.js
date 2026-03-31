import {Link} from 'react-router-dom'

import "./index.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>Welcome to Bookstore 📚</h1>
        <p>Explore 20+ amazing books and grow your knowledge!</p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="books"
          className="home-image"
        />
      </div>
      <Link to="/books">
        <div className="button-card">
          <button className="explore-button">Explore Books Now</button>
        </div>
      </Link>
    </>
  );
};

export default Home;