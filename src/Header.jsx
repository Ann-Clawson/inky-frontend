/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export function Header(props) {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <Link onClick={() => props.onApplyShow()}>Apply</Link> <Link onClick={() => props.onSignupShow()}>Sign Up</Link>{" "}
        <Link onClick={() => props.onLoginShow()}>Log In</Link>
      </>
    );
  } else if (localStorage.user_id) {
    authenticationLinks = (
      <>
        <Link
          to="/apply"
          onClick={() => {
            this.forceUpdate();
          }}
        >
          Apply
        </Link>{" "}
        <Link to="/userdashboard">Dashboard</Link>
        <Logout />
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
      <nav className="nav-bar">
        <a href="/" className="logo-anchor">
          <div className="logo">ink(y)</div>
        </a>
        <div>
          <Link to="/">Home</Link> {authenticationLinks}
        </div>
      </nav>
    </header>
  );
}
