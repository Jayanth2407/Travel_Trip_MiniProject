import {Link} from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'
import TripItem from '../TripItem'

import TripsListContext from '../../context/TripsListContext'

import './index.css'

// MyTrips component displays a user's trips or a message if no trips exist
const MyTrips = () => (
  <TripsListContext.Consumer>
    {value => {
      // Destructure the tripsList from context value
      const {tripsList} = value

      return (
        <>
          {/* Header with active nav item set to "MY_TRIPS" */}
          <Header activeNavbarItem="MY_TRIPS" />

          {/* Conditional rendering: show no trips message or trips list */}
          {tripsList.length === 0 ? (
            <>
              {/* Container for "No trips" message */}
              <div className="no-trips-container">
                {/* Image for no trips */}
                <img
                  src="https://res.cloudinary.com/dt7mi4nem/image/upload/v1741297116/Frame_1000003903_1_eqfbo7.png"
                  className="no-trips-image"
                  alt="no trips"
                />
                {/* Heading for no trips */}
                <h1 className="no-trips-heading">No upcoming trips.</h1>
                {/* Description for no trips */}
                <p className="no-trips-description">
                  When you book a trip, you will see your trip details here.
                </p>
                {/* Button to navigate to "Book a new trip" page */}
                <Link className="link" to="/book-a-new-trip">
                  <button type="button" className="book-a-new-trip-button">
                    Book a new trip
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Container for displaying trips */}
              <div className="my-trips-container">
                <h1 className="my-trips-heading">My Trips</h1>
                {/* List of trips */}
                <ul className="my-trips-list">
                  {/* Map over each trip and render TripItem component */}
                  {tripsList.map(eachTrip => (
                    <TripItem key={eachTrip.id} tripDetails={eachTrip} />
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Footer with active nav item set to "MY_TRIPS" */}
          <Footer activeNavbarItem="MY_TRIPS" />
        </>
      )
    }}
  </TripsListContext.Consumer>
)

export default MyTrips
