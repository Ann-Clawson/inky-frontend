import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { SignupShow } from "./SignupShow";
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
  return (
    <div>
      <BrowserRouter>
        <Header onSignupShow={handleSignupShow} />
        <Content />
        <Footer />
        <Modal show={isSignupShowVisible} onClose={handleSignupClose}>
          <SignupShow />
        </Modal>
      </BrowserRouter>
    </div>
  );
}

export default App;
