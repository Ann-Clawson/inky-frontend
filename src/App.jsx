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
import IdleTimerComponent from "./IdleTimerComponent";

function App() {
  const [isSignupShowVisible, setIsSignupShowVisible] = useState(false);
  const [isApplyShowVisible, setIsApplyShowVisible] = useState(false);
  const [isLoginShowVisible, setIsLoginShowVisible] = useState(false);
  const [isIdleShow, setIsIdleShow] = useState(false);

  const handleSignupShow = () => setIsSignupShowVisible(true);
  const handleSignupClose = () => setIsSignupShowVisible(false);
  const handleApplyShow = () => setIsApplyShowVisible(true);
  const handleApplyClose = () => setIsApplyShowVisible(false);
  const handleLoginShow = () => setIsLoginShowVisible(true);
  const handleLoginClose = () => setIsLoginShowVisible(false);
  const handleIdleClose = () => setIsIdleShow(false);

  const handleOnIdle = () => {
    // delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
    localStorage.removeItem("tattooer_id");
    window.location.href = "/";
    setIsIdleShow(true);
    console.log("User has been idle for 5 seconds");
  };

  const jwt = localStorage.getItem("jwt");

  // if (jwt) {
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  // }

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
        <Modal show={isIdleShow} onClose={handleIdleClose}>
          <ActivityShow />
        </Modal>
      </BrowserRouter>
      {jwt && <IdleTimerComponent onIdle={handleOnIdle} />}
    </div>
  );
}

export default App;
