import {Link} from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    {/* Header with active HOME navigation indicator */}
    <Header activeNavbarItem="HOME" />
    {/* Main content container */}
    <div className="home-container">
      {/* Responsive image container (shows different images based on device) */}
      <div className="home-image-container">
        <img
          src="https://res.cloudinary.com/dmxodewjv/image/upload/v1749545366/cartoon-illustration-with-young-beautiful-woman-with-luggage-on-vacation-on-beach-against-seascape-summer-background-travel-concept-flat-design-vector_ptbbqo.jpg"
          className="mobile-home-image"
          alt="Vacation illustration"
        />
        <img
          src="https://res.cloudinary.com/dmxodewjv/image/upload/v1749545366/cartoon-illustration-with-young-beautiful-woman-with-luggage-on-vacation-on-beach-against-seascape-summer-background-travel-concept-flat-design-vector_ptbbqo.jpg"
          className="desktop-home-image"
          alt="Vacation illustration"
        />
      </div>

      {/* Text content and CTA section */}
      <div className="home-content-container">
        <h1 className="home-heading">Travel. Relax. Memories.</h1>
        <p className="home-description">
          With travel trip you can experience new travel and the best tourist
          destinations.
        </p>
        {/* Navigation button to booking page */}
        <div className="home-book-a-new-trip-button-container">
          <Link to="/book-a-new-trip" className="link">
            <button type="button" className="home-book-a-new-trip-button">
              Book a new trip
            </button>
          </Link>
        </div>
      </div>
    </div>

    {/* Footer with active HOME navigation indicator */}
    <Footer activeNavbarItem="HOME" />
  </>
)

export default Home
