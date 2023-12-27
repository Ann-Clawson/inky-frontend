import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        {/* <a onClick={() => props.onSignupShow()}>Sign Up</a> |  */}
        <Link to="/login">Log In</Link>
      </>
    );
  } else {
    authenticationLinks = (
      <>
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
