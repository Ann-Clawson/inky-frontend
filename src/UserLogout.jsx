import axios from "axios";

export function UserLogout() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    // window.location.href = "/";
  };

  return (
    <a href="#" onClick={handleClick}>
      Log Out
    </a>
  );
}
