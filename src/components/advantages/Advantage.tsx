import { FC } from "react";
import { motion } from "framer-motion";
import { ServicesType } from "../../shared/types";
import { BsBuildingFillCheck } from "react-icons/bs";
import { TbBeach } from "react-icons/tb";
import { MdFactCheck, MdPriceChange } from "react-icons/md";
import { RiShieldKeyholeFill } from "react-icons/ri";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const advantagesList: Array<ServicesType> = [
  {
    icon: <MdFactCheck size={30} />,
    title: "Безвизовый режим в Испании и Евросоюзе",
    description: "",
  },
  {
    icon: <RiShieldKeyholeFill size={30} />,
    title: "Возможность проживания и работы",
    description: "",
  },
  {
    icon: <MdPriceChange size={30} />,
    title:
      "Цена на новостройки напрямую от застройщиков - зачастую на 35% ниже рыночных",
    description: "",
  },

  {
    icon: <BsBuildingFillCheck size={30} />,
    title: "Более 500 качественных новостроек в Малаге и Марбелье",
    description: "",
  },

  {
    icon: <TbBeach size={30} />,
    title: "Шикарные апартаменты и виллы с видом на море ",
    description: "",
  },

  {
    icon: <BsBuildingFillCheck size={30} />,
    title: "Персональное обслуживание на всех этапах ",
    description: "",
  },
];

const Advantage: FC<Props> = ({ icon, title, description }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{
        scale: 1.005,
        transition: { duration: 0.5 },
        y: -10,
      }}
    >
      <div className="max-h[175px] group flex h-[175px] flex-col items-center justify-self-stretch rounded-xl border border-gold-main/10 bg-primary-bg-light px-5 py-8 text-dark-100 shadow-lg shadow-gold-main/10  duration-200 hover:shadow-gold-main md:min-h-[160px]">
        <div className="text-green-main group-hover:text-green-main">
          {icon}
        </div>
        <h4 className="text-md mt-3 mb-1 text-center font-semibold duration-200 ">
          {title}
        </h4>
        <p className="text-center text-sm duration-200">{description}</p>
      </div>
    </motion.div>
  );
};

export default Advantage;
