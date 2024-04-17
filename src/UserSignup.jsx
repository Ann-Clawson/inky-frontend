import axios from "axios";
import { useState } from "react";

export function UserSignup() {
  const [passwordLength, setPasswordLength] = useState([]);

  const handleUserSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post(`${import.meta.env.VITE_APP_API_URL}/users.json`, params).then((response) => {
      console.log(response.data);
      event.target.reset();
      window.location.href = "/userlogin";
    });
  };

  return (
    <div className="user-signup">
      <div className="signup-form-container">
        <div>
          <h2>
            We&apos;re glad you&apos;re here! <br />
            Tell us a little bit about yourself.
          </h2>
          <form onSubmit={handleUserSubmit}>
            <div>
              First Name <input name="first_name" type="text" required />
            </div>
            <div>
              Last Name <input name="last_name" type="text" required />
            </div>
            <div>
              Address <input name="address" type="text" required />
            </div>
            <div>
              Phone Number <input name="phone_number" type="number" required className="phone" />
            </div>
            <div>
              Email <input name="email" type="email" required />
            </div>
            <div>
              Password
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
              Password confirmation <input name="password_confirmation" type="password" required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
