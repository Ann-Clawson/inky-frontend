/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";

export function UserDashboard() {
  const [currentUser, setCurrentUser] = useState({});

  let userID = localStorage.getItem("user_id");
  // console.log(userID);

  const getUser = (userID) => {
    axios.get(`http://localhost:3000/users/${userID}.json`).then((response) => {
      // console.log(response.data);
      setCurrentUser(response.data);
    });
  };

  useEffect(getUser, []);

  return (
    <div>
      <h1>Howdy {currentUser.first_name}!</h1>
      <h4>Here is a list of your applications:</h4>
      <table>
        <thead>
          <tr>
            <th>Application Date</th>
            <th>Amount</th>
            <th>Tattooer</th>
            <th>Date of Apppointment</th>
            <th>Tattoo Description</th>
            <th>App Status</th>
            <th>Loan Term</th>
            <th>Interest Rate</th>
            <th>Monthly Payment</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
