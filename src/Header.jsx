/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export function Header(props) {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <Link onClick={() => props.onApplyShow()}>Apply</Link>
        <Link onClick={() => props.onSignupShow()}>Sign Up</Link>
        <Link onClick={() => props.onLoginShow()}>Log In</Link>
      </>
    );
  } else if (localStorage.user_id) {
    authenticationLinks = (
      <>
        <Link to="/apply" onClick={() => this.forceUpdate()}>
          Apply
        </Link>
        <Link to="/userdashboard">Dashboard</Link>
        <Logout />
      </>
    );
  } else {
    authenticationLinks = (
      <>
        <Link to="/tattooerdashboard">Dashboard</Link>
        <Logout />
      </>
    );
  }

  return (
    <header>
      <nav className="nav-bar">
        <a href="/" className="logo-anchor">
          <div className="logo">inky</div>
        </a>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {authenticationLinks}
        </div>
      </nav>
    </header>
  );
}
