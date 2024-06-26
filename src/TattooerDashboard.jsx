import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { ProfileShow } from "./ProfileShow";

export function TattooerDashboard() {
  const [currentTattooer, setCurrentTattooer] = useState({});
  const [applications, setApplications] = useState([]);
  const [users, setUsers] = useState([]);
  const [isProfileShowVisible, setIsProfileShowVisible] = useState(false);

  const handleProfileShow = () => setIsProfileShowVisible(true);
  const handleProfileClose = () => setIsProfileShowVisible(false);

  // eslint-disable-next-line no-unused-vars
  // let tattooerID = localStorage.getItem("tattooer_id");

  const getApplications = () => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}/applications.json`).then((response) => {
      setApplications(response.data.sort((a, b) => b.id - a.id));
    });
  };

  const handleIndexUsers = () => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}/users.json`).then((response) => {
      setUsers(response.data);
    });
  };

  const getUserName = (userId, nameType) => {
    const user = users.find((u) => u.id === userId);
    return user ? user[nameType] : "Unknown user";
  };

  const getTattooer = (tattooerID) => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}/tattooers/${tattooerID}.json`).then((response) => {
      setCurrentTattooer(response.data);
    });
  };

  const handleUpdateTattooer = (id, params) => {
    axios.patch(`${import.meta.env.VITE_APP_API_URL}/tattooers/${id}.json`, params).then((response) => {
      setCurrentTattooer(response.data);
      setIsProfileShowVisible(false);
    });
  };

  useEffect(getTattooer, []);
  useEffect(getApplications, []);
  useEffect(handleIndexUsers, []);

  return (
    <div className="dashboard">
      <div className="user-profile-view-btn-container">
        <button className="btn btn-outline-info btn-bnr login view-profile-btn apply-btn">
          <a onClick={() => handleProfileShow()}>View and Update Profile</a>
        </button>
      </div>
      <div>
        <h1>Howdy {currentTattooer.first_name}!</h1>
        <h4>Here is a list of your clients:</h4>
        <table className="table dash-table">
          <thead>
            <tr>
              <th>Date of Appointment</th>
              <th>Application Date</th>
              <th>Amount</th>
              <th>Client Name</th>
              <th>Client Phone</th>
              <th>Client Email</th>
              <th>Tattoo Description</th>
              <th>Payment Status</th>
              <th>Upload Artwork</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application.id}>
                <td>{application.date_of_appt}</td>
                <td>{application.friendly_created_at}</td>
                <td>{application.amount}</td>
                <td>
                  {getUserName(application.user_id, "first_name")} {getUserName(application.user_id, "last_name")}
                </td>
                <td>{getUserName(application.user_id, "phone_number")}</td>
                <td>{getUserName(application.user_id, "email")}</td>
                <td>{application.description}</td>
                <td>Payment Received</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={isProfileShowVisible} onClose={handleProfileClose}>
        <ProfileShow onUpdateUser={handleUpdateTattooer} user={currentTattooer} />
      </Modal>
    </div>
  );
}
