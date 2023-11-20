import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      offset="100"
      className="w-full gap-4 rounded-xl bg-green-main px-8 py-2.5 text-center font-semibold text-white shadow-md shadow-green-main/20 duration-300 hover:scale-105 hover:bg-gold-main md:w-max"
      onClick={() => setSelectedPage(SelectedPage.Contacts)}
      href={`#${SelectedPage.Contacts}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
