// Importing routing utilities from react-router-dom for navigation
import {Link, withRouter} from 'react-router-dom'
// Importing Cookies for handling JWT tokens
import Cookies from 'js-cookie'

// Importing component-specific styles
import './index.css'

// Functional component for the Header with props destructuring
const Header = props => {
  // Logout handler function
  const onLogout = () => {
    // Remove JWT token from cookies
    Cookies.remove('jwt_token')

    // Access history object from props
    const {history} = props

    // Redirect to login page after logout
    history.replace('/login')
  }

  // Destructure activeNavbarItem from props to manage active state styling
  const {activeNavbarItem} = props

  // Determine active class for Home nav item based on current activeNavbarItem
  const activeNavbarItemHome =
    activeNavbarItem === 'HOME' ? 'active-navbar-item-home' : ''

  // Determine active class for My Trips nav item based on current activeNavbarItem
  const activeNavbarItemMyTrips =
    activeNavbarItem === 'MY_TRIPS' ? 'active-navbar-item-my-trips' : ''

  // Render the header navigation bar
  return (
    <nav className="header-navbar">
      {/* Website logo linking to home page */}
      <Link to="/" className="link">
        <h1 className="header-navbar-website-logo">Travel Trip</h1>
      </Link>

      {/* Navigation items list */}
      <ul className="header-navbar-list">
        {/* Home navigation item */}
        <Link to="/" className="link">
          <li className={`header-navbar-item ${activeNavbarItemHome}`}>Home</li>
        </Link>

        {/* My Trips navigation item */}
        <Link to="/my-trips" className="link">
          <li className={`header-navbar-item ${activeNavbarItemMyTrips}`}>
            My Trips
          </li>
        </Link>
      </ul>

      {/* Logout button with click handler */}
      <button
        type="button"
        className="header-navbar-logout-button"
        onClick={onLogout}
      >
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
