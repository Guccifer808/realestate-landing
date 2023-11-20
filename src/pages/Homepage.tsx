import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Advantages from "../components/advantages";
import { SelectedPage } from "../shared/types";
import About from "../components/about";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import { FC, useEffect, useState } from "react";
import Gallery from "../components/gallery";
import Lifestyle from "../components/lifestyle";

import TagManager from "react-gtm-module";
import Features from "../components/features";

const tagManagerArgs = {
  gtmId: "GTM-5ZM3LBL2",
};
TagManager.initialize(tagManagerArgs);
const Homepage: FC = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    //adding event listener
    window.addEventListener("scroll", handleScroll);
    //removing on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Hero setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Advantages setSelectedPage={setSelectedPage} />
      <Gallery setSelectedPage={setSelectedPage} />
      <Features setSelectedPage={setSelectedPage} />
      <Lifestyle setSelectedPage={setSelectedPage} />
      <Contacts setSelectedPage={setSelectedPage} />
      <Footer />
      {/* <GoogleTagManager /> */}
    </div>
  );
};

export default Homepage;
