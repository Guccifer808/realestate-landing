import { FC } from "react";
import { motion } from "framer-motion";
import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from "../../shared/types";
import aboutImage1 from "../../assets/about1.jpg";
import aboutImage2 from "../../assets/about2.jpg";
import aboutImage3 from "../../assets/about3.jpg";
import aboutImage4 from "../../assets/about4.jpg";
import { FaPeopleGroup, FaCheckDouble, FaBriefcase } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About: FC<Props> = ({ setSelectedPage }) => {
  return (
    <motion.section className="bg-primary-bg-light py-8" id="about">
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        <div className="md:flex md:justify-between md:gap-6">
          <div className="md:w-6/12">
            {/* heading text */}
            <motion.div
              className="mb-5 sm:mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 1, x: -150 },
                visible: { opacity: 1, x: 0 },
              }}
              onViewportEnter={() => setSelectedPage(SelectedPage.About)}
            >
              <span className="font-medium text-gold-main">О Нас</span>
              <h1 className="text-2xl font-bold text-dark-100 sm:text-3xl">
                LM Group Real Estate
              </h1>
            </motion.div>
            {/* images mob */}
            <motion.div
              className="order-2 mb-5 flex items-center justify-center sm:hidden md:mt-0 md:w-5/12"
              viewport={{ once: true, amount: 0.9 }}
              transition={{ delay: 0.5, duration: 1.75 }}
              variants={{
                hidden: { opacity: 0, x: -1100 },
                visible: { opacity: 1, x: 0 },
              }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <img
                    className="h-auto max-w-full rounded-xl"
                    src={aboutImage1}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-xl"
                    src={aboutImage2}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-xl"
                    src={aboutImage3}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-xl"
                    src={aboutImage4}
                    alt=""
                  />
                </div>
              </div>
            </motion.div>
            <p className="mb-2 text-dark-100">
              LM Group Real Estate была основана в 2013 году как семейный бизнес
              под брендом Luks Marbella. За последние 10 лет компания выросла и
              развилась во всех аспектах, в которых вы, наши уважаемые клиенты,
              просили нас расширить спектр наших услуг и сотрудничества.
            </p>
            <p className="mb-6 text-dark-100">
              Сейчас мы являемся одной из топовых международных команд,
              состоящей из более 30 профессионалов и 100 надежных партнеров,
              представляющих различные сопутствующие секторы и рынки - от
              финансирования и ВНЖ до дизайна интерьера и местного консьержа. Мы
              продолжаем органично расширять наши услуги, оптимизировать наши
              ресурсы и модернизировать наши технологические и другие
              инструменты для вашего максимального удобства, безопасности и
              результатов.
            </p>
            <p className="mb-6 text-dark-100">
              Мы предлагаем нашим клиентам 100% комплексный персонализированный
              подход, фокус которого всегда на Вас, клиенте. Таким образом мы
              заботимся обо всех возможных аспектах вашей покупки недвижимости,
              переезда, образа жизни и управления инвестициями.
            </p>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <li className="mb-6 flex items-center">
                <div className=" flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-green-main text-primary-bg-light">
                  <FaBriefcase size={18} />
                </div>
                <p className=" ml-4 max-w-md font-medium ">
                  Второе десятилетие на рынке
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-green-main text-primary-bg-light">
                  <FaPeopleGroup size={24} />
                </div>
                <p className="ml-4 max-w-md font-medium text-dark-100">
                  Более 30 сотрудников
                </p>
              </li>
              <li className="mb-6 flex items-center">
                <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-green-main text-primary-bg-light">
                  <IoIosPeople size={24} />
                </div>
                <p className="ml-4 max-w-md font-medium text-dark-100">
                  100 + партнёров и коллабораторов
                </p>
              </li>
              <li className="mb-8 flex items-center">
                <motion.div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-green-main text-primary-bg-light">
                  <FaCheckDouble size={22} />
                </motion.div>
                <p className="ml-4 max-w-md font-medium text-dark-100">
                  100% комплексный подход
                </p>
              </li>
            </motion.ul>

            <div className=" flex w-full min-w-full">
              <ActionButton setSelectedPage={setSelectedPage}>
                Получить руководство
              </ActionButton>
            </div>
          </div>
          {/* images desktop */}
          <motion.div
            className="order-2 mb-5 hidden items-start justify-center pt-6 sm:flex md:mt-0 md:w-5/12"
            viewport={{ once: true, amount: 0.9 }}
            transition={{ delay: 0.5, duration: 1.75 }}
            variants={{
              hidden: { opacity: 0, x: -1100 },
              visible: { opacity: 1, x: 0 },
            }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="grid grid-cols-2 gap-2">
              <div>
                <img
                  className="h-auto max-w-full rounded-xl"
                  src={aboutImage1}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-xl"
                  src={aboutImage2}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-xl"
                  src={aboutImage3}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-xl"
                  src={aboutImage4}
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
