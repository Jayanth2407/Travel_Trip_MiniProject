import {Component} from 'react'
import {BiShow, BiHide} from 'react-icons/bi'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

// Login component handles user authentication and login form
class Login extends Component {
  // Initialize state with form values and UI flags
  state = {
    username: '',
    password: '',
    isShowPassword: false, // Controls password visibility
    isSubmitError: false, // Tracks if login failed
    errorMessage: '', // Stores error message for failed login
  }

  // Handles changes to the username input
  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  // Handles changes to the password input
  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  // Toggles password visibility between text and password type
  onToggleShowPassword = () => {
    this.setState(prevstate => ({
      isShowPassword: !prevstate.isShowPassword,
    }))
  }

  // Handles form submission
  onSubmitLoginForm = async event => {
    event.preventDefault() // Prevent default form submission

    const {username, password} = this.state

    // Prepare user details for the API request
    const userDetails = {
      username,
      password,
    }

    const loginApiUrl = 'https://apis.ccbp.in/login'

    // Define fetch options for POST request
    const options = {
      body: JSON.stringify(userDetails),
      method: 'POST',
    }

    // Send login request to the API
    const response = await fetch(loginApiUrl, options)

    // If login is successful
    if (response.ok === true) {
      const fetchedData = await response.json()
      const jwtToken = fetchedData.jwt_token

      // Store JWT token in cookies for authentication persistence
      Cookies.set('jwt_token', jwtToken, {expires: 30})

      // Redirect user to home page
      const {history} = this.props
      history.replace('/')
    } else {
      // If login fails, display error message
      const fetchedData = await response.json()
      this.setState({
        isSubmitError: true,
        errorMessage: fetchedData.error_msg,
      })
    }
  }

  render() {
    // Check for existing JWT token in cookies
    const jwtToken = Cookies.get('jwt_token')

    // If user is already logged in, redirect to home page
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    // Destructure state for cleaner code
    const {
      username,
      password,
      isShowPassword,
      isSubmitError,
      errorMessage,
    } = this.state

    return (
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-website-logo">Travel Trip</h1>
          <form onSubmit={this.onSubmitLoginForm}>
            <div className="username-input-container">
              <label htmlFor="username" className="label">
                Username
              </label>
              <br />
              <input
                type="text"
                className="username-input"
                placeholder="Username"
                id="username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="password-input-container">
              <label htmlFor="password" className="label">
                Password
              </label>
              <br />
              <div className="password-input-and-show-password-button-container">
                <input
                  type={isShowPassword ? 'text' : 'password'}
                  className="password-input"
                  placeholder="Password"
                  id="password"
                  onChange={this.onChangePassword}
                  value={password}
                />
                {/* Button to toggle password visibility */}
                <button
                  type="button"
                  className="show-password-button"
                  onClick={this.onToggleShowPassword}
                  data-testid="show-password"
                >
                  {isShowPassword ? (
                    <BiHide size="20" color="#64748B" />
                  ) : (
                    <BiShow size="20" color="#64748B" />
                  )}
                </button>
              </div>
            </div>
            {/* Display error message if login fails */}
            {isSubmitError && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
