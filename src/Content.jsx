import axios from "axios";
import { useState, useEffect } from "react";
import { UserSignup } from "./UserSignup";
import { UserLogin } from "./UserLogin";
import { Logout } from "./Logout";
import { TattooerSignup } from "./TattooerSignup";
import { TattooerLogin } from "./TattooerLogin";
import { Home } from "./Home";
import { Application } from "./Application";
import { Routes, Route } from "react-router-dom";
import { UserDashboard } from "./UserDashboard";

export function Content() {
  const [applications, setApplications] = useState([]);

  const [currentUser, setCurrentUser] = useState([]);

  const handleGetCurrentUser = (params) => {
    axios.get(`http://localhost:3000/users/${response.data.user_id}.json`, params).then((response) => {
      setCurrentUser([response.data]);
    });
  };

  const handleCreateApplication = (params) => {
    axios.post("http://localhost:3000/applications.json", params).then((response) => {
      console.log(response);
      setApplications([response.data, ...applications]);
    });
  };

  const [tattooers, setTattooers] = useState([]);

  const handleIndexTattooers = () => {
    axios.get("http://localhost:3000/tattooers.json").then((response) => {
      // console.log(response.data);
      setTattooers(response.data);
    });
  };

  useEffect(handleIndexTattooers, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserLogin onGetCurrentUser={handleGetCurrentUser} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/tattooerlogin" element={<TattooerLogin />} />
        <Route path="/tattooersignup" element={<TattooerSignup />} />
        <Route
          path="/apply"
          element={<Application onCreateApplication={handleCreateApplication} tattooers={tattooers} />}
        />
        <Route path="/userdashboard" element={<UserDashboard currentUser={currentUser} />} />
      </Routes>
    </div>
  );
}
