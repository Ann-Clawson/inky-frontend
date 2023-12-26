import axios from "axios";
import { useState, useEffect } from "react";
import { UserSignup } from "./UserSignup";
// import { UserUpdate } from "./UserUpdate";
import { UserLogin } from "./UserLogin";
import { UserLogout } from "./UserLogout";
import { TattooerSignup } from "./TattooerSignup";
import { TattooerLogin } from "./TattooerLogin";
import { TattooerLogout } from "./TattooerLogout";
// import { TattooerUpdate } from "./TattooerUpdate";
// import { UserDashboard } from "./UserDashboard";
import { Application } from "./Application";

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

  useEffect(handleIndexTattooers, []);

  return (
    <div>
      <UserLogin />
      <UserLogout />
      <UserSignup />
      <TattooerLogin />
      <TattooerLogout />
      <TattooerSignup />
      <Application onCreateApplication={handleCreateApplication} tattooers={tattooers} />
      {/* <UserDashboard /> */}
      {/* <UserUpdate onUpdateUser={handleUpdateUser} user={currentUser} />
      <TattooerUpdate onUpdate={handleUpdateTattooer} tattooer={currentTattooer} /> */}
    </div>
  );
}
