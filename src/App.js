// Importing required components from react-router-dom for routing functionality
import {Switch, Route, Redirect} from 'react-router-dom'
// Importing Component class from React to create class components
import {Component} from 'react'

// Importing all the necessary components for different routes
import Login from './components/Login'
import Home from './components/Home'
import BookANewTrip from './components/BookANewTrip'
import MyTrips from './components/MyTrips'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import TripsListContext from './context/TripsListContext'
import './App.css'

// Main App component class that serves as the root component
class App extends Component {
  // Initializing component state with an empty tripsList array
  state = {
    tripsList: [],
  }

  // Method to add a new trip to the tripsList in state
  addTrip = trip => {
    // Using spread operator to maintain immutability while updating state
    this.setState(prevState => ({tripsList: [...prevState.tripsList, trip]}))
  }

  // Method to remove a trip from tripsList based on id
  removeTrip = id => {
    // Destructuring tripsList from state for easier access
    const {tripsList} = this.state

    // Filtering out the trip with the matching id
    const updatedTripsList = tripsList.filter(eachTrip => eachTrip.id !== id)

    // Updating state with the filtered list
    this.setState({tripsList: updatedTripsList})
  }

  // Render method that defines what the component displays
  render() {
    // Destructuring tripsList from state for use in the provider
    const {tripsList} = this.state

    return (
      // Wrapping the entire application with TripsListContext provider
      // to share trips data and methods with child components
      <TripsListContext.Provider
        value={{
          tripsList,
          addTrip: this.addTrip,
          removeTrip: this.removeTrip,
        }}
      >
        {/* Switch component to handle route matching */}
        <Switch>
          {/* Public route for login page */}
          <Route exact path="/login" component={Login} />
          {/* Protected routes (require authentication) */}
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/book-a-new-trip"
            component={BookANewTrip}
          />
          <ProtectedRoute exact path="/my-trips" component={MyTrips} />
          {/* Route for 404-like not found page */}
          <Route exact path="/not-found" component={NotFound} />
          {/* Redirect to not-found for any unmatched routes */}
          <Redirect to="/not-found" />
        </Switch>
      </TripsListContext.Provider>
    )
  }
}

export default App
