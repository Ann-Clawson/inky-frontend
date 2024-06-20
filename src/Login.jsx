import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function UserLogin() {
  const [errors, setErrors] = useState([]);
  const [isTattooer, setIsTattooer] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleUserLogInSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    if (!isTattooer) {
      axios
        .post(`${import.meta.env.VITE_APP_API_URL}/sessions.json`, params)
        .then((response) => {
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
        .post(`${import.meta.env.VITE_APP_API_URL}/tattooer_sessions.json`, params)
        .then((response) => {
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

    return (
      <div>
        <h1>Log In</h1>
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
  };
}
