import { Link } from "react-router-dom";

export function LoginShow(props) {
  // console.log("Howdy world!");
  return (
    <div>
      <h1>Who is logging in?</h1>
      <Link to="/userlogin" onClick={props.onClose}>
        User
      </Link>
      <br />
      <Link to="/tattooerlogin" onClick={props.onClose}>
        Tattooer
      </Link>
    </div>
  );
}
