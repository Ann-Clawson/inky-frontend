import axios from "axios";
import { useState, useEffect } from "react";

export function TattooerDashboard() {
  const [currentTattooer, setCurrentTattooer] = useState({});
  const [applications, setApplications] = useState([]);
  const [users, setUsers] = useState([]);

  // eslint-disable-next-line no-unused-vars
  let tattooerID = localStorage.getItem("tattooer_id");

  const getUser = (tattooerID) => {
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

  useEffect(getUser, []);
  useEffect(getApplications, []);
  useEffect(handleIndexUsers, []);

  return (
    <div>
      <h1>Howdy {currentTattooer.first_name}!</h1>
      <h4>Here is a list of your applications:</h4>
    </div>
  );
}
