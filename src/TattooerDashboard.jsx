import axios from "axios";
import { useState, useEffect } from "react";

export function TattooerDashboard() {
  const [currentTattooer, setCurrentTattooer] = useState({});
  const [applications, setApplications] = useState([]);
  const [users, setUsers] = useState([]);

  // eslint-disable-next-line no-unused-vars
  let tattooerID = localStorage.getItem("tattooer_id");

  const getTattooer = (tattooerID) => {
    axios.get(`http://localhost:3000/tattooers/${tattooerID}.json`).then((response) => {
      setCurrentTattooer(response.data);
    });
  };

  const getApplications = () => {
    axios.get("http://localhost:3000/applications.json").then((response) => {
      setApplications(response.data);
    });
  };

  const handleIndexUsers = () => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      setUsers(response.data);
    });
  };

  useEffect(getTattooer, []);
  useEffect(getApplications, []);
  useEffect(handleIndexUsers, []);

  const getUserName = (userId, nameType) => {
    const user = users.find((u) => u.id === userId);
    return user ? user[nameType] : "Unknown user";
  };

  return (
    <div>
      <h1>Howdy {currentTattooer.first_name}!</h1>
      <h4>Here is a list of your applications:</h4>
      <table>
        <thead>
          <tr>
            <th>Application Date</th>
            <th>Amount</th>
            <th>Client</th>
            <th>Date of Appointment</th>
            <th>Tattoo Description</th>
            <th>Payment Status</th>
            <th>Upload Artwork</th>
            <th>Artwork Status</th>
          </tr>
          {applications.map((application) => (
            <tr key={application.id}>
              <td>{application.friendly_created_at}</td>
              <td>{application.amount}</td>
              <td>
                {getUserName(application.tattooer_id, "first_name")} {getUserName(application.tattooer_id, "last_name")}
              </td>
              <td>{application.date_of_appt}</td>
              <td>{application.description}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}
