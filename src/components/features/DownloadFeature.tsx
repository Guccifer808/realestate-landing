import { motion } from "framer-motion";
import { FC, useState } from "react";
import { IoMdDownload } from "react-icons/io";

type Props = {
  image: string;
  title?: string;
  pdfPath: string;
};
const childVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};
const DownloadFeature: FC<Props> = ({ image, title, pdfPath }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfPath;
    downloadLink.download = `${title}.pdf`; // Set the download file name (use the title or default to "download")
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <motion.div
      className="mx-auto flex flex-col items-center justify-center rounded-xl border border-green-main/10 bg-primary-bg-light px-2 py-2 shadow-lg shadow-gold-main/10 duration-200 hover:shadow-gold-main"
      variants={childVariant}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{
        scale: 1.005,
        transition: { duration: 0.5 },
        y: -10,
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img className="min-h-64 w-64 rounded-xl" src={image} alt={title} />
      {isHovered && (
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-xl bg-gold-main bg-opacity-10">
          <span className="cursor-pointer text-lg font-bold text-gold-main">
            <IoMdDownload size={48} onClick={handleDownload} />
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default DownloadFeature;
