export function UserDashboard() {
  let user = localStorage.getItem("user");

  let currentUser = () => {};

  return <h1>Howdy {user}</h1>;
}
