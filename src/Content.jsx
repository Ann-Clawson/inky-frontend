import axios from "axios";
import { useState } from "react";
import { UserSignup } from "./UserSignup";
import { UserLogin } from "./UserLogin";
import { UserLogout } from "./UserLogout";
import { TattooerSignup } from "./TattooerSignup";

export function Content() {
  // TATTOOER LOG FUNCTIONS
  // const jwt = localStorage.getItem("jwt");
  // if (jwt) {
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  // }

  // const [errors, setErrors] = useState([]);

  const handleTattooerLogInSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/tattooer_sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        // window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };
  // END OF TATTOOER LOG FUNCTIONS

  // USER UPDATE FUNCTIONS
  const handleUserUpdateSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateUser(props.user.id, params);
    event.target.reset();
  };
  // END OF USER UPDATE FUNCTIONS

  return (
    <div>
      {/* TATTOOER LOG IN */}
      <div id="login">
        <h1>Tattooer Log In</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleTattooerLogInSubmit}>
          <div>
            Email: <input name="email" type="email" />
          </div>
          <div>
            Password: <input name="password" type="password" />
          </div>
          <button type="submit">Login</button>
          <a href="#" onClick={handleClick} id="logout">
            Log Out
          </a>
        </form>
      </div>
      {/* END TATTOOER LOG IN */}
      <br />
      <br />
      <hr />
      <br />
      {/* USER UPDATE */}
      <div id="signup">
        <h1>Users Update</h1>
        <form onSubmit={handleUserUpdateSubmit}>
          <div>
            First Name: <input name="first_name" type="text" />
          </div>
          <div>
            Last Name: <input name="last_name" type="text" />
          </div>
          <div>
            Address: <input name="address" type="text" />
          </div>
          <div>
            Phone Number: <input name="phone_number" type="text" />
          </div>
          <div>
            Email: <input name="email" type="email" />
          </div>
          <div>
            Password: <input name="password" type="password" />
          </div>
          <div>
            Password confirmation: <input name="password_confirmation" type="password" />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
      {/* END USER UPDATE */}
    </div>
  );
}
