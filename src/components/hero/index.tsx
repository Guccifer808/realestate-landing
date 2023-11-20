import { FC } from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
// import heroImage from "../../assets/hero-image.jpg";
import hero from "../../assets/hero-image-green.svg";
import heroImage from "../../assets/hero2.jpg";
import spainFlag from "../../assets/spainFlag1.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home: FC<Props> = ({ setSelectedPage }: Props) => {
  return (
    // <motion.section
    //   id="home"
    //   className="flex w-full items-center justify-between bg-primary-bg-light py-16 md:h-full"
    //   onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    // >
    //   <div className="mx-auto mt-24 flex max-w-7xl flex-wrap items-center justify-between px-8 md:mt-24 md:px-6">
    //     <motion.div
    //       className="w-full md:basis-5/12"
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.9 }}
    //       transition={{ delay: 0.5, duration: 0.75 }}
    //       variants={{
    //         hidden: { opacity: 0, x: -50 },
    //         visible: { opacity: 1, x: 0 },
    //       }}
    //     >
    //       <h1 className="mb-8 text-4xl font-bold leading-snug text-dark-100 sm:text-[42px] lg:text-[40px] xl:text-[42px]">
    //         Получите
    //         <span className="text-green-main"> Золотую Визу в Испании</span> при
    //         Покупке Недвижимости!
    //       </h1>
    //       {/* <p className="mb-8 max-w-[480px] text-base text-dark-100">
    //         ВНЖ в Испании в подарок!
    //       </p> */}
    //       <div className="flex flex-wrap gap-4">
    //         <AnchorLink
    //           href={"#contactus"}
    //           offset="100"
    //           className="w-full gap-4 rounded-md bg-green-main px-8 py-2.5 text-center font-semibold text-white shadow-md shadow-green-main/20 duration-200 hover:scale-105 hover:bg-gold-main md:w-max"
    //         >
    //           Contact Us
    //         </AnchorLink>
    //       </div>
    //     </motion.div>

    //     {/* Image */}
    //     <div className="relative hidden items-center justify-end pb-10 text-blue-500 group-hover:text-blue-500 md:flex md:w-6/12 md:pb-10 ">
    //       {/* Floating icon 1 */}
    //       <div className="absolute top-20 left-24 mt-4 ml-4 animate-bounce-slow">
    //         {/* <GiMicrochip size={40} /> */}
    //         <img src={spainFlag} alt="" />
    //       </div>

    //       {/* Floating icon 2 */}
    //       {/* <div className="absolute top-14 right-24 mb-4 mr-4 animate-bounce-slow-four">
    //         <ImKey2 size={40} />
    //       </div> */}

    //       {/* Floating icon 3 */}
    //       {/* <div className="absolute bottom-24 right-0 mt-4 mr-4 animate-bounce-slow-five">
    //         <RiShieldKeyholeFill size={40} />
    //       </div> */}

    //       <motion.div
    //         className="relative z-10 inline-block pt-2 lg:pt-0"
    //         initial="hidden"
    //         whileInView="visible"
    //         viewport={{ once: true, amount: 0.9 }}
    //         transition={{ delay: 0.5, duration: 0.75 }}
    //         variants={{
    //           hidden: { opacity: 0, x: 100 },
    //           visible: { opacity: 1, x: 50 },
    //         }}
    //         animate={{ opacity: 1, x: 0 }}
    //         whileHover={{
    //           scale: 1.005,
    //           transition: { duration: 0.5 },
    //           y: -10,
    //         }}
    //       >
    //         <img
    //           loading="lazy"
    //           src={hero}
    //           alt="hero section img"
    //           className="max-w-full md:h-[650px] md:w-[650px]"
    //         />
    //       </motion.div>
    //     </div>
    //   </div>
    // </motion.section>

    // SECTION V2
    <motion.section
      className="relative flex h-screen w-screen place-items-center justify-center bg-[url(hero-2.jpg)] bg-cover bg-center bg-no-repeat py-16"
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: 0.25, duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
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
