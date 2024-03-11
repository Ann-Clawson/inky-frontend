import axios from "axios";
import { UserSignup } from "./UserSignup";
import { UserLogin } from "./Login";
import { Logout } from "./Logout";
import { TattooerSignup } from "./TattooerSignup";
import { Home } from "./Home";
import { About } from "./About";
import { Application } from "./Application";
import { Routes, Route } from "react-router-dom";
import { UserDashboard } from "./UserDashboard";
import { TattooerDashboard } from "./TattooerDashboard";
import { Modal } from "./Modal";
import { useState } from "react";
import { ProfileShow } from "./ProfileShow";

export function Content() {
  const handleCreateApplication = (params) => {
    axios.post(`${import.meta.env.VITE_APP_API_URL}/applications.json`, params).then((response) => {
      console.log(response.data);
    });
  };

  const [isProfileShowVisible, setIsProfileShowVisible] = useState(false);

  const handleProfileShow = () => {
    setIsProfileShowVisible(true);
  };

  const handleProfileClose = () => {
    setIsProfileShowVisible(false);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/tattooersignup" element={<TattooerSignup />} />
        <Route path="/apply" element={<Application onCreateApplication={handleCreateApplication} />} />
        <Route path="/userdashboard" element={<UserDashboard handleProfileShow={handleProfileShow} />} />
        <Route path="/tattooerdashboard" element={<TattooerDashboard />} />
      </Routes>
      {/* <Modal show={isProfileShowVisible} onClose={handleProfileClose}>
        <ProfileShow />
        <ProfileShow onUpdateUser={handleUpdateUser} user={currentUser} /> 
      </Modal> */}
    </div>
  );
}
