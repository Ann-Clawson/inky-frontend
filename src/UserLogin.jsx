import axios from "axios";
import { useState, useEffect } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function UserLogin() {
  const [errors, setErrors] = useState([]);

  const handleUserLogInSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);

        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        //stores user_id in localStorage to be used for userdashboard
        localStorage.setItem("user", response.data.user_id);
        event.target.reset();
        window.location.href = "/userdashboard";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });

    //log out due to inactivity
    // const LogoutDueToInactivity = () => {
    //   const [isLoggedIn, setIsLoggedIn] = useState(true);

    //   useEffect(() => {
    //     let inactivityTimeout;

    //     const resetInactivityTimeout = () => {
    //       if (inactivityTimeout) {
    //         clearTimeout(inactivityTimeout);
    //       }

    //       inactivityTimeout = setTimeout(() => {
    //         // Log out the user
    //         handleLogout();
    //       }, 300000); // 5 minutes in milliseconds (adjust as needed)
    //     };

    //     const handleUserActivity = () => {
    //       resetInactivityTimeout();
    //     };

    //     const handleLogout = () => {
    //       // Perform logout actions (e.g., clear user session)
    //       setIsLoggedIn(false);
    //       // You may also want to redirect the user to the login page
    //     };

    //     // Attach event listeners
    //     window.addEventListener('mousemove', handleUserActivity);
    //     window.addEventListener('keydown', handleUserActivity);

    //     // Set up the initial inactivity timeout
    //     resetInactivityTimeout();

    //     // Clean up event listeners on component unmount
    //     return () => {
    //       window.removeEventListener('mousemove', handleUserActivity);
    //       window.removeEventListener('keydown', handleUserActivity);
    //       clearTimeout(inactivityTimeout);
    //     };
    //   }, []);
  };

  return (
    <div>
      <h1>User Log In</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleUserLogInSubmit}>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
