import { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: string;
  sectionName?: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const CustomLink: FC<Props> = ({
  page,
  sectionName,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      offset="100"
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? "text-gold-main" : ""
      }  transition duration-500 hover:text-gold-main`}
    >
      {sectionName}
    </AnchorLink>
  );
};

export default CustomLink;
