import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/footer";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/LOGO.svg";
import { FeaturesType } from "../shared/types";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import thumbnail1 from "../assets/thumbnail1.webp";
import thumbnail2 from "../assets/thumbnail2.webp";
import DownloadFeature from "../components/features/DownloadFeature";

type Props = {};

const downloadList: Array<FeaturesType> = [
  {
    image: { thumbnail1 },
    action: "",
    path: "/LM_Group_Golden_Visa_compressed.pdf",
    title: "LM Group - Золотая Виза (RU)",
  },
  {
    image: { thumbnail2 },
    action: "",
    path: "/LM_Group_Purchase_Off-Plan_compressed.pdf",
    title: "LM Group - Процесс Покупки объектов новостроек (RU)",
  },
];
//motion div configurations
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const ThankYou = (props: Props) => {
  const navigate = useNavigate();
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  // Scroll to the top of the page when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMenuToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMenuToggled(!isMenuToggled);
  };

  // close mob menu on outside click
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuToggled(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="h-full">
      <div className="bg-primary-bg-light py-14 ">
        <nav>
          <div
            className={`bg-primary-bg-light  ${flexBetween} fixed top-0 z-30 w-full  py-1 font-medium text-dark-100`}
          >
            <div className={`${flexBetween} mx-auto w-5/6`}>
              <div className={`${flexBetween} max-h-24 w-full gap-16`}>
                {/* Left side */}
                <img
                  src={logo}
                  alt="logo"
                  className="lg:h-34 w-34 h-32 cursor-pointer lg:w-40"
                  onClick={() => navigate("/")}
                />

                {/* Right side */}
                {isAboveMediumScreens ? (
                  <div className={`${flexBetween} w-full`}>
                    {/* Links */}
                    <div className={`${flexBetween} text-md gap-8`}>
                      <Link
                        to="/"
                        className="transition duration-500 hover:text-gold-main"
                      >
                        Главная
                      </Link>
                    </div>
                  </div>
                ) : (
                  <button
                    className="rounded-full p-2 text-green-main"
                    onClick={handleMenuToggle}
                  >
                    {!isMenuToggled ? (
                      <HiMenuAlt3 className="h-6 w-6" />
                    ) : (
                      <HiX className="h-6 w-6" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* Mob menu */}
          {!isAboveMediumScreens && isMenuToggled && (
            <div
              ref={menuRef}
              className="fixed right-0 top-[103px] z-30 w-full max-w-full rounded-b-xl border-b border-green-main bg-primary-bg-light p-6 transition-all duration-200 sm:right-1 sm:max-w-[300px] md:right-7"
            >
              <div
                className={`${flexBetween} text-md flex flex-col justify-center gap-6 font-semibold`}
              >
                <Link
                  to="/"
                  className="transition duration-500 hover:text-gold-main"
                >
                  Главная
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
      {/* MAIN */}
      <section className="bg-primary-bg-light py-8" id="files">
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          {/* heading text  */}
          <motion.div
            className="mb-5 sm:mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className="font-medium text-gold-main">
              Загрузите наше руководство
            </span>
            <h1 className=" text-2xl font-bold text-dark-100 sm:text-3xl">
              Нажмите на файл для начала загрузки
            </h1>
          </motion.div>
          {/* services img  */}
          <div className="md:flex md:justify-between md:gap-6 xl:gap-10">
            {/* titles */}
            <motion.div
              className="md:w-7/12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="flex w-11/12 flex-col">
                <p className="mb-3 text-dark-100">
                  <span className="font-bold text-gold-main">
                    Золотая Виза{" "}
                  </span>
                  содержит важные детали и требования для успешного оформления
                  визы.
                </p>
                <p className="mb-3 text-dark-100">
                  <span className="font-bold text-gold-main">
                    Процесс Покупки{" "}
                  </span>
                  содержит подробную информацию о шагах, которые вам предстоит
                  совершить.
                </p>
              </div>
            </motion.div>
            {/* Files */}
            <motion.div
              className="mt-5 grid gap-6 sm:grid-cols-2 md:-mt-16 lg:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={container}
            >
              {downloadList.map((item: FeaturesType) => (
                <DownloadFeature
                  key={item.title}
                  image={Object.values(item.image)[0]} // extract the image file path
                  title={item.title}
                  pdfPath={item.path}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default ThankYou;
