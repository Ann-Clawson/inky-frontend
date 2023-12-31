/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function SignupShow(props) {
  return (
    <div>
      <h1>Who are you?</h1>
      <Link to="/usersignup" onClick={props.onClose}>
        User
      </Link>
      <br />
      <Link to="/tattooersignup" onClick={props.onClose}>
        Tattooer
      </Link>
    </div>
  );
}
