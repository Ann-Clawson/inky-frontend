/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";

export function UserDashboard() {
  const [currentUser, setCurrentUser] = useState({});
  const [applications, setApplications] = useState([]);

  let userID = localStorage.getItem("user_id");

  const getUser = (userID) => {
    axios.get(`http://localhost:3000/users/${userID}.json`).then((response) => {
      setCurrentUser(response.data);
    });
  };

  const getApplications = () => {
    axios.get("http://localhost:3000/applications.json").then((response) => {
      setApplications(response.data);
    });
  };

  // const getApplications = () => {
  //   axios.get("http://localhost:3000/applications.json").then(async (response) => {
  //     const updatedApplications = [];

  //     for (const application of response.data) {
  //       // Fetch tattooer information for each application
  //       const tattooerResponse = await axios.get(`http://localhost:3000/tattooers/${application.tattooer_id}.json`);

  //       // Create an updated application object with the tattooer's name
  //       const updatedApplication = {
  //         ...application,
  //         tattooer_name: `${tattooerResponse.data.first_name} ${tattooerResponse.data.last_name}`,
  //       };

  //       updatedApplications.push(updatedApplication);
  //     }

  //     setApplications(updatedApplications);
  //   });
  // };

  useEffect(getUser, []);
  useEffect(getApplications, []);

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
          {applications.map((application) => (
            <tr key={application.id}>
              <td>{application.friendly_created_at}</td>
              <td>{application.amount}</td>
              <td>{application.tattooer_id}</td>
              <td>{application.date_of_appt}</td>
              <td>{application.description}</td>
              <td>{application.approved ? "approved" : "pending"}</td>
              <td>{application.number_of_months} months</td>
              <td>{application.interest_rate * 100}%</td>
              <td>${application.monthly_payment}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}
