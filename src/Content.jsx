import axios from "axios";
import { useState } from "react";
import { UserSignup } from "./UserSignup";
import { UserLogin } from "./UserLogin";
import { UserLogout } from "./UserLogout";
import { TattooerSignup } from "./TattooerSignup";
import { TattooerLogin } from "./TattooerLogin";

export function Content() {
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
