import { FC } from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import backgroundImage from "../../assets/hero2.jpg";
import spainFlag from "../../assets/spainFlag1.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home: FC<Props> = ({ setSelectedPage }: Props) => {
  return (
    <motion.section
      className="relative flex h-screen w-screen place-items-center justify-center bg-cover bg-center bg-no-repeat py-16"
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: 0.25, duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gold-main/10 bg-gradient-to-b from-primary-bg-light/80 to-gold-main/20"></div>
      <div className="relative mx-auto max-w-screen-xl items-center justify-center px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="relative max-w-3xl text-center ltr:sm:text-left rtl:sm:text-right">
          <div className="absolute right-12 bottom-48 mt-4 ml-4 animate-bounce-slow-four sm:bottom-48 sm:right-32">
            {/* <GiMicrochip size={40} /> */}
            <img src={spainFlag} alt="" className="h-12 w-12" />
          </div>
          <h1 className="text-3xl font-extrabold text-light-100 drop-shadow-2xl sm:text-5xl">
            Получите
            <strong className="block font-extrabold text-gold-main drop-shadow-2xl">
              Золотую Визу в Испании
            </strong>
          </h1>
          {/* <p>Costa del Sol, Spain</p> */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4 text-center">
            <AnchorLink
              href={"#contact"}
              offset="100"
              className="w-fit gap-4 rounded-xl bg-green-main px-8 py-2.5 text-center font-semibold text-white shadow-md shadow-green-main/20 duration-200 hover:scale-105 hover:bg-gold-main md:w-max"
            >
              Получить консультацию
            </AnchorLink>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
