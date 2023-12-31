import axios from "axios";

export function Logout() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
    localStorage.removeItem("tattooer_id");
    window.location.href = "/";
  };

  return (
    <a href="#" onClick={handleClick}>
      Log Out
    </a>
  );
}
