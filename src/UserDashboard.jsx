import axios from "axios";
import { useState, useEffect } from "react";

export function UserDashboard() {
  const [currentUser, setCurrentUser] = useState({});

  let userID = localStorage.getItem("user");
  console.log(userID);

  const getUser = (userID) => {
    axios.get(`http://localhost:3000/users/${userID}.json`).then((response) => {
      console.log(response.data);
      setCurrentUser(response.data);
    });
  };

  console.log(currentUser, "name");

  useEffect(getUser, []);

  return (
    <div>
      <h1>Howdy {currentUser.first_name}</h1>
      <h4>Here is a list of your applications:</h4>
    </div>
  );
}
