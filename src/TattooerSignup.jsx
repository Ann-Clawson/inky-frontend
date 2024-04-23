import axios from "axios";
import { useState } from "react";

export function TattooerSignup() {
  const [passwordLength, setPasswordLength] = useState([]);

  const handleTattooerSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post(`${import.meta.env.VITE_APP_API_URL}/tattooers.json`, params).then((response) => {
      console.log(response.data);
      event.target.reset();
      window.location.href = "/tattooerlogin";
    });
  };

  return (
    <div className="user-signup">
      <div className="signup-form-container">
        <h2>Join our growing community of tattooers, while growing your business.</h2>
        <small>
          <i>
            If you&apos;d like to join our community as a client, click <a href="/usersignup">here</a>.
          </i>
        </small>
        <div />
        <br />
        <form onSubmit={handleTattooerSubmit}>
          <div>
            First Name: <input name="first_name" type="text" required />
          </div>
          <div>
            Last Name: <input name="last_name" type="text" required />
          </div>
          <div>
            Phone Number: <input name="phone_number" type="text" required />
          </div>
          <div>
            Tattoo Shop: <input name="tattoo_shop" type="text" required />
          </div>
          <div>
            Email: <input name="email" type="email" required />
          </div>
          <div>
            Password:{" "}
            <input
              name="password"
              type="password"
              required
              onChange={(event) => setPasswordLength(event.target.value)}
            />
            <small>
              minimum 5 characters,{" "}
              <span className="password-small">{passwordLength.length <= 5 ? 5 - passwordLength.length : 0} </span>
              characters remaining
            </small>
          </div>
          <div>
            Password confirmation: <input name="password_confirmation" type="password" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
