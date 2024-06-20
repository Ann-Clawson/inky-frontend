import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { ActivityShow } from "./ActivityShow";
import { ApplyShow } from "./ApplyShow";
import { LoginShow } from "./LoginShow";
import { SignupShow } from "./SignupShow";
import { BrowserRouter } from "react-router-dom";
import { Modal } from "./Modal";
import { useState } from "react";
import axios from "axios";

function App() {
  const [isSignupShowVisible, setIsSignupShowVisible] = useState(false);
  const [isApplyShowVisible, setIsApplyShowVisible] = useState(false);
  const [isLoginShowVisible, setIsLoginShowVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignupShow = () => setIsSignupShowVisible(true);
  const handleSignupClose = () => setIsSignupShowVisible(false);
  const handleApplyShow = () => setIsApplyShowVisible(true);
  const handleApplyClose = () => setIsApplyShowVisible(false);
  const handleLoginShow = () => setIsLoginShowVisible(true);
  const handleLoginClose = () => setIsLoginShowVisible(false);

  const jwt = localStorage.getItem("jwt");
  console.log(jwt);
  if (jwt) {
    // setIsLoggedIn(true);
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  }
  // console.log(isLoggedIn);

  return (
    <div className="app-container">
      <BrowserRouter>
        <Header onSignupShow={handleSignupShow} onApplyShow={handleApplyShow} onLoginShow={handleLoginShow} />
        <div className="content">
          <Content />
        </div>
        <Footer />
        <Modal show={isSignupShowVisible} onClose={handleSignupClose}>
          <SignupShow onClose={handleSignupClose} />
        </Modal>
        <Modal show={isApplyShowVisible} onClose={handleApplyClose}>
          <ApplyShow />
        </Modal>
        <Modal show={isLoginShowVisible} onClose={handleLoginClose}>
          <LoginShow onClose={handleLoginClose} />
        </Modal>
        <Modal>
          <ActivityShow />
        </Modal>
      </BrowserRouter>
    </div>
  );
}

export default App;
