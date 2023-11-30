import { FC } from "react";
import logo from "../../assets/LOGO.svg";
import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/instagram.svg";
import FacebookIcon from "../../assets/facebook.svg";
import TelegramIcon from "../../assets/telegram.svg";

interface Props {}

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer: FC<Props> = ({}: Props) => {
  return (
    <footer className="inset-0  bg-gradient-to-b from-primary-bg-light/90 to-gold-main/25 pt-8">
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        <div className="row-gap-10 mb-8 flex justify-center gap-16 lg:flex">
          <div className="flex flex-col items-center justify-center md:max-w-md lg:flex">
            {/* Logo */}
            <img
              src={logo}
              alt="footer"
              className="h-34 lg:h-34 w-40 cursor-pointer lg:w-40"
              onClick={handleScrollToTop}
            />
            {/* Social Media icons */}
            <div className="mt-4 flex items-center justify-center space-x-5 ">
              <div className="grid grid-cols-3 items-center justify-center gap-4">
                <Link
                  to="https://www.instagram.com/lmgroup.realestate/"
                  target="_blank"
                >
                  <img
                    src={InstagramIcon}
                    className="transition-all duration-300 hover:scale-110"
                  ></img>
                </Link>
                <Link
                  to="https://www.facebook.com/LMGroup.RealEstate/"
                  target="_blank"
                >
                  <img
                    src={FacebookIcon}
                    className="transition-all duration-300 hover:scale-110"
                  ></img>
                </Link>
                <Link to="https://t.me/LMGroupRealestate" target="_blank">
                  <img
                    src={TelegramIcon}
                    className="transition-all duration-300 hover:scale-110"
                  ></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div>
          <div className="flex items-center justify-center gap-2 py-6 sm:flex-row">
            <p className="text-sm text-dark-100/70">
              LM Group Real Estate © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
