import axios from "axios";
import { useState, useEffect } from "react";
import { UserSignup } from "./UserSignup";
// import { UserUpdate } from "./UserUpdate";
import { UserLogin } from "./UserLogin";
import { Logout } from "./Logout";
import { TattooerSignup } from "./TattooerSignup";
import { TattooerLogin } from "./TattooerLogin";
import { Home } from "./Home";
// import { TattooerUpdate } from "./TattooerUpdate";
// import { UserDashboard } from "./UserDashboard";
import { Application } from "./Application";
import { SignupShow } from "./SignupShow";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";

export function Content() {
  // UPDATE USER FUNCTIONS
  // const [users, setUsers] = useState([]);
  // const [currentUser, setCurrentUser] = useState({});

  // const handleUpdateUser = (id, params) => {
  //   axios.patch(`http://localhost:3000/users/${id}.json`, params).then((response) => {
  //     console.log(response);
  //     setUsers(
  //       users.map((user) => {
  //         if (user.id === response.data.id) {
  //           return response.data;
  //         } else {
  //           return user;
  //         }
  //       })
  //     );
  //     setCurrentUser(response.data);
  //     // setIsUserShowVisible(false);
  //   });
  // };

  // UPDATE TATTOOER FUNCTIONS
  // const [tattooers, setTattooers] = useState([]);
  // const [currentTattooer, setCurrentTattooer] = useState({});

  // const handleUpdateTattooer = (id, params) => {
  //   axios.patch(`http://localhost:3000/tattooers/1.json`, params).then((response) => {
  //     console.log(response);
  //     setTattooers(
  //       tattooers.map((tattooer) => {
  //         if (tattooer.id === response.data.id) {
  //           return response.data;
  //         } else {
  //           return tattooer;
  //         }
  //       })
  //     );
  //     setCurrentTattooer(response.data);
  //   });
  // };

  const [applications, setApplications] = useState([]);

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

  const [isSignupShowVisible, setIsSignupShowVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupShowVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupShowVisible(false);
  };

  useEffect(handleIndexTattooers, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home onSignupShow={handleSignupShow} />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/usersignup" element={<UserSignup />} />
        <Route path="/tattooerlogin" element={<TattooerLogin />} />
        <Route path="/tattooersignup" element={<TattooerSignup />} />
        <Route
          path="/apply"
          element={<Application onCreateApplication={handleCreateApplication} tattooers={tattooers} />}
        />
      </Routes>
      <Modal show={isSignupShowVisible} onClose={handleSignupClose}>
        <SignupShow />
      </Modal>

      {/* <UserDashboard /> */}
      {/* <UserUpdate onUpdateUser={handleUpdateUser} user={currentUser} />
      <TattooerUpdate onUpdate={handleUpdateTattooer} tattooer={currentTattooer} /> */}
    </div>
  );
}
