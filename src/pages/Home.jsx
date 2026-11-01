import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">Discover Events Near You</h1>
        <p className="hero-subtitle">
          Find concerts, sports, and entertainment happening in your area
        </p>
        <Link to="/events" className="hero-button">
          Browse Events
        </Link>
      </div>
    </div>
  );
}

export default Home;