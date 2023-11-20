import { FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import CookieConsent from "react-cookie-consent";
import Preloader from "./components/ui/Preloader";
import ThankYou from "./pages/ThankYou";
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
  return (
    <div className="app">
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
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
