import { FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Preloader from "./components/ui/Preloader";
import ThankYou from "./pages/ThankYou";
import avatar from "./assets/logo512.png";
import TagManager from "react-gtm-module";
import { chatMessageWithBreak, tagManagerArgs } from "./shared/constants";

type Props = {};

// GTM init
TagManager.initialize(tagManagerArgs);

const App: FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1250);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    const whatsappLink = `https://wa.link/f3lsz1`;
    window.open(whatsappLink);
  };

  return (
    <div className="app">
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <FloatingWhatsApp
            phoneNumber="+34 644 06 15 59"
            accountName="LM Group Real Estate"
            avatar={avatar}
            chatboxStyle={{ border: "2px solid #E0A221" }}
            allowClickAway={true}
            chatboxClassName="chatbox"
            chatMessage={chatMessageWithBreak}
            chatboxHeight={500}
            notification={true}
            notificationDelay={30}
            notificationSound={true}
            messageDelay={1}
            placeholder="Введите сообщение"
            statusMessage="в сети"
            onSubmit={handleSubmit}
            notificationLoop={1}
          />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
