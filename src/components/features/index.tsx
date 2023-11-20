import { FC } from "react";
import { motion } from "framer-motion";
import { FeaturesType, SelectedPage } from "../../shared/types";
import Feature from "./Feature";
import thumbnail1 from "../../assets/thumbnail1.webp";
import thumbnail2 from "../../assets/thumbnail2.webp";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const featuresList: Array<FeaturesType> = [
  {
    image: { thumbnail1 },
    title: "GoldenVisa",
  },
  {
    image: { thumbnail2 },
    title: "BuyersGuide",
  },
];
//motion div configurations
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const Features: FC<Props> = ({ setSelectedPage }: Props) => {
  return (
    <section className="bg-primary-bg-light py-8" id="files">
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        {/* heading text  */}
        <motion.div
          className="mb-5 sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <span className="font-medium text-gold-main">
            Загрузите наше руководство
          </span>
          <h1 className=" text-2xl font-bold text-dark-100 sm:text-3xl">
            Руководство для Покупателя
          </h1>
        </motion.div>
        {/* services img  */}
        <div className="md:flex md:justify-between md:gap-6 xl:gap-10">
          {/* titles */}
          <motion.div
            className="md:w-7/12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex w-11/12 flex-col">
              <p className="mb-3 text-dark-100">
                <span className="font-bold text-gold-main">Золотая Виза </span>
                содержит важные детали и требования для успешного оформления
                визы.
              </p>
              <p className="mb-3 text-dark-100">
                <span className="font-bold text-gold-main">
                  Процесс Покупки{" "}
                </span>
                содержит подробную информацию о шагах, которые вам предстоит
                совершить.
              </p>
            </div>
          </motion.div>
          {/* Files */}
          <motion.div
            className="mt-5 grid gap-6 sm:grid-cols-2 md:-mt-16 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={container}
            onViewportEnter={() => setSelectedPage(SelectedPage.Files)}
          >
            {featuresList.map((item: FeaturesType) => (
              <Feature
                key={item.title}
                image={Object.values(item.image)[0]} // extract the image file path
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
