import { useNavigate } from "react-router-dom";
import logo from "../assets/LOGO.svg";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex h-screen flex-col place-content-center items-center overflow-hidden bg-primary-bg-light px-4 text-center">
      <img
        src={logo}
        alt="logo"
        className="lg:h-34 w-34 h-34 cursor-pointer lg:w-40"
        // onClick={handleScrollToTop}
      />

      <h1 className="py-5 text-2xl uppercase tracking-widest text-gold-main/70 ">
        404 | Not Found
      </h1>
      <div className="mx-auto flex w-full shrink-0 items-center justify-center gap-x-3 sm:w-auto">
        <button
          onClick={() => navigate("/")}
          className="text-md mt-12 flex items-center justify-center gap-x-2 rounded-xl border bg-green-main px-5 py-3 font-bold text-light-100 transition-colors duration-200 hover:scale-105 hover:bg-gold-main sm:w-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-5 w-5 rtl:rotate-180"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span>Go back</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
