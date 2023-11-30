import { FC, FormEvent, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Preloader from "./components/ui/Preloader";
import ThankYou from "./pages/ThankYou";
import avatar from "./assets/logo512.png";

type Props = {};

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
    // event.preventDefault();
    window.open(
      "https://api.whatsapp.com/send?phone=34644061559&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B0%20%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8%C2%A0%D0%B2%C2%A0%D0%98%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8"
    );
  };

  const chatMessageWithBreak = `
Благодарим за Ваш интерес к нашим услугам по недвижимости на Коста дель Соль!
Пожалуйста, опишите в нескольких словах в чём именно можем быть Вам полезны и с Вами свяжется один из наших менеджеров
`;
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
            chatboxHeight={450}
            notification={true}
            notificationDelay={30}
            notificationSound={true}
            messageDelay={1}
            placeholder="Введите сообщение"
            statusMessage="в сети"
            onSubmit={handleSubmit}
            notificationLoop={2}
          />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      )}

      {/* <CookieConsent
        debug={true}
        location="bottom"
        expires={7}
        buttonStyle={{
          background: "#2563EB",
          color: "white",
          fontWeight: "normal",
          textShadow: "2px 2px black",
          borderRadius: "5px",
          margin: "10px",
          fontFamily: "sans-serif, Inter",
        }}
        contentStyle={{
          textAlign: "center",
        }}
        style={{
          background: "#0B0B0D",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "1px solid #2563EB",
        }}
        acceptOnScrollPercentage={25}
        acceptOnScroll={true}
      >
        We collect cookies to analyze our website traffic and performance.
      </CookieConsent> */}
    </div>
  );
};

export default App;
