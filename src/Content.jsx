import axios from "axios";
import { useState } from "react";
import { UserSignup } from "./UserSignup";
import { UserUpdate } from "./UserUpdate";
import { UserLogin } from "./UserLogin";
import { UserLogout } from "./UserLogout";
import { TattooerSignup } from "./TattooerSignup";
import { TattooerLogin } from "./TattooerLogin";
import { Header } from "./Header";

export function Content() {
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
      setIsUserShowVisible(false);
    });

    return (
      <main>
        <UserUpdate onUpdateUser={handleUpdateUser} />
      </main>
    );
  };
}
