/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { ProfileShow } from "./ProfileShow";

export function UserDashboard(props) {
  const [currentUser, setCurrentUser] = useState({});
  const [applications, setApplications] = useState([]);
  const [tattooers, setTattooers] = useState([]);

  let userID = localStorage.getItem("user_id");

  const getUser = (userID) => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}/users/${userID}.json`).then((response) => {
      setCurrentUser(response.data);
    });
  };

  const getApplications = () => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}/applications.json`).then((response) => {
      setApplications(response.data.sort((a, b) => b.id - a.id));
    });
  };

  const handleIndexTattooers = () => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}/tattooers.json`).then((response) => {
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

  const [isProfileShowVisible, setIsProfileShowVisible] = useState(false);

  const handleProfileShow = () => {
    setIsProfileShowVisible(true);
  };

  const handleProfileClose = () => {
    setIsProfileShowVisible(false);
  };

  const handleUpdateUser = (id, params) => {
    axios.patch(`${import.meta.env.VITE_APP_API_URL}/users/${id}.json`, params).then((response) => {
      setCurrentUser(response.data);
      setIsProfileShowVisible(false);
    });
  };

  return (
    <div className="dashboard">
      <div className="user-profile-view-btn-container">
        <button className="btn btn-outline-info btn-bnr login view-profile-btn">
          <a onClick={() => handleProfileShow()}>View and Update Profile</a>
        </button>
      </div>
      <div>
        <h1>Howdy {currentUser.first_name}!</h1>
        <h4>Here is a list of your applications:</h4>
        <table className="table dash-table">
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
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
      <Modal show={isProfileShowVisible} onClose={handleProfileClose}>
        <ProfileShow onUpdateUser={handleUpdateUser} user={currentUser} />
      </Modal>
    </div>
  );
}
