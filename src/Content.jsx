import axios from "axios";
import { useState } from "react";
import { UserSignup } from "./UserSignup";
import { UserUpdate } from "./UserUpdate";
import { UserLogin } from "./UserLogin";
import { UserLogout } from "./UserLogout";
import { TattooerSignup } from "./TattooerSignup";
import { TattooerLogin } from "./TattooerLogin";
import { TattooerLogout } from "./TattooerLogout";

export function Content() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const handleUpdateUser = (id, params) => {
    axios.patch(`http://localhost:3000/users/${id}.json`, params).then((response) => {
      setUsers(
        users.map((user) => {
          if (user.id === response.data.id) {
            return response.data;
          } else {
            return user;
          }
        })
      );
      setCurrentUser(response.data);
      // setIsUserShowVisible(false);
    });
  };

  return (
    <div>
      <UserLogin />
      <UserLogout />
      <UserSignup />
      <TattooerLogin />
      <TattooerLogout />
      <TattooerSignup />
      <UserUpdate onUpdateUser={handleUpdateUser} user={currentUser} />
    </div>
  );
}
