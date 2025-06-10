import TripsListContext from '../../context/TripsListContext'
import './index.css'

// TripItem component renders a single trip entry with details and a cancel button
const TripItem = props => {
  // Destructure tripDetails from props
  const {tripDetails} = props

  // Destructure required fields from tripDetails
  const {id, endLocation, startDate, endDate} = tripDetails

  return (
    // Use context to access removeTrip function
    <TripsListContext.Consumer>
      {value => {
        // Destructure removeTrip function from context value
        const {remove2rip} = value // NOTE: There seems to be a typo here. Should be "removeTrip"?

        // Handler to remove this trip when the cancel button is clicked
        const onRemoveTrip = () => {
          remove2rip(id) // NOTE: Should be "removeTrip(id)" if the function is named so in context
        }

        return (
          <>
            {/* List item for each trip */}
            <li className="my-trip-item">
              {/* Display destination (end location) */}
              <h1 className="my-trip-item-location">{endLocation}</h1>
              <div>
                {/* Date label */}
                <p className="my-trip-item-date-label">Date</p>
                {/* Display trip date range */}
                <p className="my-trip-item-date">
                  {startDate} to {endDate}
                </p>
              </div>
              {/* Cancel button to remove this trip */}
              <button
                type="button"
                className="my-trip-item-cancel-button"
                onClick={onRemoveTrip}
              >
                Cancel
              </button>
            </li>
          </>
        )
      }}
    </TripsListContext.Consumer>
  )
}

export default TripItem
