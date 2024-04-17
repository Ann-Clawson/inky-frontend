/* eslint-disable react/prop-types */

export function SignupShow(props) {
  return (
    <div className="signup-modal">
      <h2>
        Are you joining our community as a <br />
        <a href="/usersignup" onClick={props.onClose}>
          User
        </a>{" "}
        or{" "}
        <a href="/tattooersignup" onClick={props.onClose}>
          Tattooer
        </a>
        ?
      </h2>
    </div>
  );
}
