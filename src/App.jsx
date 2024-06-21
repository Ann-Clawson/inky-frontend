import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { ActivityShow } from "./ActivityShow";
import { ApplyShow } from "./ApplyShow";
import { LoginShow } from "./LoginShow";
import { SignupShow } from "./SignupShow";
import { BrowserRouter } from "react-router-dom";
import { Modal } from "./Modal";
import { useRef, useState } from "react";
// import axios from "axios";
import { useIdleTimer } from "react-idle-timer";

function App() {
  const [isSignupShowVisible, setIsSignupShowVisible] = useState(false);
  const [isApplyShowVisible, setIsApplyShowVisible] = useState(false);
  const [isLoginShowVisible, setIsLoginShowVisible] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isIdle, setIsIdle] = useState(false);
  const [isIdleShow, setIsIdleShow] = useState(false);

  const handleSignupShow = () => setIsSignupShowVisible(true);
  const handleSignupClose = () => setIsSignupShowVisible(false);
  const handleApplyShow = () => setIsApplyShowVisible(true);
  const handleApplyClose = () => setIsApplyShowVisible(false);
  const handleLoginShow = () => setIsLoginShowVisible(true);
  const handleLoginClose = () => setIsLoginShowVisible(false);
  const handleIdleClose = () => setIsIdleShow(false);

  const handleOnIdle = () => {
    console.log("User has been idle for 5 seconds");
    setIsIdleShow(true);
  };
  const idleTimer = useIdleTimer({
    timeout: 5000, // 5 seconds in milliseconds
    onIdle: handleOnIdle,
  });

  // const jwt = localStorage.getItem("jwt");
  // console.log(jwt);
  // if (jwt) {
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  //   // setIsLoggedIn(true);
  // }

  // console.log(isLoggedIn);

  // const IdleTimerRef = useRef(null);
  // // const sessionTimeoutRef = useRef(null);

  // const onIdle = () => {
  //   setIsIdleShow(true);
  //   console.log("You are idle for 5 seconds");
  //   // sessionTimeoutRef.current = setTimeout(logOut, 5000);
  // };

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
    </div>
  );
}

export default App;
