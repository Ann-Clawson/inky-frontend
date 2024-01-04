import axios from "axios";
import { useState, useEffect } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function UserLogin() {
  const [errors, setErrors] = useState([]);
  const [isTattooer, setIsTattooer] = useState(false);

  const handleUserLogInSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    if (!isTattooer) {
      axios
        .post("http://localhost:3000/sessions.json", params)
        .then((response) => {
          // console.log(response.data);
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          event.target.reset();
          window.location.href = "/userdashboard";
        })
        .catch((error) => {
          console.log(error.response);
          setErrors(["Invalid email or password"]);
        });
    } else {
      axios
        .post("http://localhost:3000/tattooer_sessions.json", params)
        .then((response) => {
          // console.log(response.data);
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("tattooer_id", response.data.tattooer_id);
          event.target.reset();
          window.location.href = "/tattooerdashboard";
        })
        .catch((error) => {
          console.log(error.response);
          setErrors(["Invalid email or password"]);
        });
    }

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
    //       }, 300000); // 5 minutes in milliseconds
    //     };

    //     const handleUserActivity = () => {
    //       resetInactivityTimeout();
    //     };

    //     const handleLogout = () => {
    //
    //       setIsLoggedIn(false);
    //       //redirect the user to the login page
    //     };
    //
    //     window.addEventListener('mousemove', handleUserActivity);
    //     window.addEventListener('keydown', handleUserActivity);

    //     // Set up the initial inactivity timeout
    //     resetInactivityTimeout();

    //     // Clean up event listeners
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
        <div>
          Are you a tattooer? <input type="checkbox" onClick={() => setIsTattooer(true)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
