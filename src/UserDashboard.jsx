/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";

export function UserDashboard() {
  const [currentUser, setCurrentUser] = useState({});
  const [applications, setApplications] = useState([]);
  const [tattooers, setTattooers] = useState([]);

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

  const handleIndexTattooers = () => {
    axios.get("http://localhost:3000/tattooers.json").then((response) => {
      setTattooers(response.data);
    });
  };

  useEffect(getUser, []);
  useEffect(getApplications, []);
  useEffect(handleIndexTattooers, []);

  const getTattooerName = (tattooerId, nameType) => {
    const tattooer = tattooers.find((t) => t.id === tattooerId);
    return tattooer ? tattooer[nameType] : "Unknown Tattooer";
  };

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
            <th>Date of Appointment</th>
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
              <td>
                {getTattooerName(application.tattooer_id, "first_name")}{" "}
                {getTattooerName(application.tattooer_id, "last_name")}
              </td>
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
