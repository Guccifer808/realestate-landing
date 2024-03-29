import { FC, useState } from "react";
import { SelectedPage } from "../../shared/types";
import effectImage from "../../assets/images/effect.png";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import image from "../../assets/lm_book.png";
import spainFlag from "../../assets/spainFlag1.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contacts: FC<Props> = ({ setSelectedPage }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const publicKey = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;

  const resetMessages = () => {
    setTimeout(() => {
      setSuccessMessage(false);
      setError(false);
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!isEmailValid(email)) {
        setError(true);
        resetMessages();
        return;
      }
      // if (!isPhoneValid(phone)) {
      //   setError(true);
      //   resetMessages();
      //   return;
      // }
      // if (!isNameValid(name)) {
      //   setError(true);
      //   resetMessages();
      //   return;
      // }

      await emailjs.sendForm(
        "service_d4pvyl4",
        "template_iuy2oi7",
        e.currentTarget,
        publicKey
      );
      setSuccessMessage(true);
      resetMessages();
      navigate("/thank-you");

      setName("");
      setPhone("");
      setEmail("");
    } catch (error) {
      setError(true);
      resetMessages();
    }
  };

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // const isPhoneValid = (phone: string): boolean => {
  //   return phone.trim().length > 1;
  // };

  // const isNameValid = (name: string): boolean => {
  //   return name.trim().length > 1;
  // };
  return (
    <>
      <section
        className="relative z-10 overflow-hidden bg-primary-bg-light py-8"
        id="contact"
      >
        <img
          loading="lazy"
          src={effectImage}
          alt="effect"
          className="absolute bottom-[-1px] z-[-10] h-full w-full opacity-[0.25]"
        />
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          <motion.div
            className="-mx-4 flex flex-wrap lg:justify-between"
            onViewportEnter={() => setSelectedPage(SelectedPage.Contacts)}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {/* info */}
            <div className="z-10 w-full pt-8 pb-16">
              <div className="flex min-h-[300px] items-center justify-center rounded-xl bg-gold-main/30 p-3 shadow-lg sm:p-2 md:justify-start md:pl-14 xl:justify-center xl:pr-32">
                <form onSubmit={handleSubmit}>
                  <div className="">
                    <span className=" font-medium text-gold-main drop-shadow-lg">
                      Руководство для Инвесторов
                    </span>
                    <h1 className=" my-5 text-center text-lg font-bold text-dark-100 drop-shadow-lg sm:text-2xl">
                      Оставьте заявку и получите руководство для инвесторов и
                      покупателей недвижимости
                    </h1>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-8">
                    <img
                      src={image}
                      className=" my-7 flex h-[250px] w-fit object-cover px-10 sm:hidden md:h-96 md:w-96"
                    />

                    <div className="mb-3 flex flex-col items-center md:mt-3">
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required={true}
                          autoComplete="true"
                          placeholder="Ваше Имя"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-72 rounded-xl border px-4 py-3 text-green-main focus:border-green-main focus:outline-none sm:w-64"
                        />
                        <span className="absolute top-2 right-4 text-gray-300">
                          *
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 flex flex-col items-center md:mt-3 ">
                      <div className="relative">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="true"
                          placeholder="Ваш телефон"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-72 rounded-xl border px-4 py-3 text-green-main focus:border-green-main focus:outline-none sm:w-64"
                        />
                        <span className="absolute top-2 right-4 text-gray-300">
                          *
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 flex flex-col items-center md:mt-3">
                      {email && !isEmailValid(email) && (
                        <span className="absolute max-h-6 text-center text-red-500">
                          Неверный Email
                        </span>
                      )}
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="true"
                          placeholder="Ваш Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`w-72 rounded-xl border sm:w-64 ${
                            email && !isEmailValid(email)
                              ? "focus:border-red-500"
                              : ""
                          } px-4 py-3 text-green-main focus:border-green-main focus:outline-none`}
                        />
                        <span className="absolute top-2 right-4 text-gold-main">
                          *
                        </span>
                      </div>
                    </div>
                    <div className="z-20 mb-3 flex flex-col items-center md:mt-3">
                      <button
                        type="submit"
                        className=" flex w-72 items-center justify-center rounded-xl bg-green-main p-3 font-semibold text-light-100 transition-all duration-300 hover:scale-105 hover:bg-gold-main sm:w-64"
                        disabled={!email}
                      >
                        Получить
                        <svg
                          className="ml-2 h-5 w-5 rtl:rotate-180 "
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                    <img
                      src={spainFlag}
                      className="absolute hidden animate-bounce-slow-four md:left-4 md:hidden lg:top-12 lg:left-96 lg:flex lg:h-16 lg:w-16"
                    />
                    <img
                      src={image}
                      loading="lazy"
                      className="absolute z-[-10] hidden h-full w-full transition-all duration-500 hover:scale-105 md:hidden lg:right-48 lg:-top-3 lg:flex lg:h-64 lg:w-64"
                    />
                  </div>
                </form>
                {/* Success message */}
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute mt-1 max-w-[300px] rounded-xl bg-green-400/70 py-3 px-6 text-center text-lg text-light-100 shadow-lg lg:bottom-32 lg:max-w-[700px]"
                  >
                    Спасибо! Мы свяжемся с вами в ближайшее время.
                  </motion.div>
                )}
                {/* Error */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute mt-1 max-w-[300px] rounded-xl bg-red-400/70 py-3 px-6 text-center text-lg text-light-100 shadow-lg lg:bottom-32 lg:max-w-[700px]"
                  >
                    Что-то пошло не так. Попробуйте позже.
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Contacts;
