import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { SignupShow } from "./SignupShow";
import { ApplyShow } from "./ApplyShow";
import { LoginShow } from "./LoginShow";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isSignupShowVisible, setIsSignupShowVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupShowVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupShowVisible(false);
  };

  const [isApplyShowVisible, setIsApplyShowVisible] = useState(false);

  const handleApplyShow = () => {
    setIsApplyShowVisible(true);
  };

  const handleApplyClose = () => {
    setIsApplyShowVisible(false);
  };

  const [isLoginShowVisible, setIsLoginShowVisible] = useState(false);

  const handleLoginShow = () => {
    setIsLoginShowVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginShowVisible(false);
  };

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
      </BrowserRouter>
    </div>
  );
}

export default App;
