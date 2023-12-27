/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export function Header(props) {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <Link onClick={() => props.onApplyShow()}>Apply</Link> |{" "}
        <Link onClick={() => props.onSignupShow()}>Sign Up</Link> | <Link to="/login">Log In</Link>
      </>
    );
  } else {
    authenticationLinks = (
      <>
        <Link to="/apply">Apply</Link>
        <Logout />
      </>
    );
  }

  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | {authenticationLinks}
      </nav>
    </header>
  );
}
