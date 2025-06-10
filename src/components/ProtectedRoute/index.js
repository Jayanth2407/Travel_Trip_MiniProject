import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

// ProtectedRoute is a wrapper around Route that ensures only authenticated users can access certain pages
const ProtectedRoute = props => {
  // Check if the JWT token exists in cookies
  const jwtToken = Cookies.get('jwt_token')

  // If no token, redirect user to the login page
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  // If user is authenticated, render the requested route with all original props
  return <Route {...props} />
}

export default ProtectedRoute
