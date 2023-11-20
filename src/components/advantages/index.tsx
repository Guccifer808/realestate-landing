import { FC } from "react";
import { motion } from "framer-motion";
import { SelectedPage, ServicesType } from "../../shared/types";
import Service, { servicesList } from "./Service";
import { container } from "../../shared/motionConfig";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Advantages: FC<Props> = ({ setSelectedPage }: Props) => {
  return (
    <motion.section className="bg-primary-bg-light py-8" id="advantages">
      <motion.div className="mx-auto max-w-7xl px-8 md:px-6">
        {/* heading text */}
        <motion.div
          className="mb-5 sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          onViewportEnter={() => setSelectedPage(SelectedPage.Advantages)}
        >
          <span className="font-medium text-gold-main">Преимущества</span>
          <h1 className="text-2xl font-bold text-dark-100 sm:text-3xl">
            Привилегии приобретения недвижимости в Испании
          </h1>
          {/* <p className="max-w-2 mx-auto mt-2 text-dark-100">
            Lorem ipsum dolor sit amet.
          </p> */}
        </motion.div>
        {/* services */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
        >
          {servicesList.map((item: ServicesType) => (
            <Service
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Advantages;
