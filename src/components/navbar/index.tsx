import { FC, useState, useEffect, useRef } from "react";
import logo from "../../assets/LOGO.svg";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import CustomLink from "./CustomLink";
import ActionButton from "../../shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Navbar: FC<Props> = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBg = isTopOfPage ? "" : " bg-primary-bg-light ";

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
    <nav>
      <div
        className={`${navbarBg} ${flexBetween} fixed top-0 z-30 w-full py-1 font-medium text-dark-100`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} max-h-24 w-full gap-16`}>
            {/* Left side */}

            <img
              src={logo}
              alt="logo"
              className="lg:h-34 w-34 h-32 cursor-pointer lg:w-40"
              onClick={handleScrollToTop}
            />

            {/* Right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* Links */}
                <div className={`${flexBetween} text-md gap-8`}>
                  <CustomLink
                    page="about"
                    sectionName="О Нас"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <CustomLink
                    page="advantages"
                    sectionName="Преимущества"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <CustomLink
                    page="objects"
                    sectionName="Объекты"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <CustomLink
                    page="Files"
                    sectionName="Руководство"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <CustomLink
                    page="Lifestyle"
                    sectionName="Lifestyle"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <CustomLink
                    page="Contact"
                    sectionName="Контакты"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* Button */}
                <ActionButton setSelectedPage={setSelectedPage}>
                  Получить руководство
                </ActionButton>
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
          className="fixed right-0 top-[103px] z-30 w-full max-w-full rounded-b-xl border-b border-green-main bg-primary-bg-light p-6  transition-all duration-200  sm:right-1 sm:max-w-[300px] md:right-7"
        >
          <div
            className={`${flexBetween} text-md flex flex-col justify-center gap-6 font-semibold`}
          >
            <CustomLink
              page="about"
              sectionName="О Нас"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="advantages"
              sectionName="Преимущества"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="objects"
              sectionName="Объекты"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="Files"
              sectionName="Руководство"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="Lifestyle"
              sectionName="Lifestyle"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <CustomLink
              page="Contact"
              sectionName="Контакты"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
