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

export function Content() {
  const handleCreateApplication = (params) => {
    axios.post("http://localhost:3000/applications.json", params).then((response) => {
      console.log(response.data);
    });
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
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/tattooerdashboard" element={<TattooerDashboard />} />
      </Routes>
    </div>
  );
}
