import { FC, useState } from "react";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import property1 from "../../assets/images/gallery/property1.jpg";
import property2 from "../../assets/images/gallery/property2.jpg";
import property3 from "../../assets/images/gallery/property3.jpg";
import property4 from "../../assets/images/gallery/property4.jpg";
import property5 from "../../assets/images/gallery/property5.jpg";
import property6 from "../../assets/images/gallery/property6.jpg";
import property7 from "../../assets/images/gallery/property7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Gallery: FC<Props> = ({ setSelectedPage }) => {
  const slideImages = [
    property4,
    property3,
    property5,
    property6,
    property7,
    property1,
    property2,
  ];

  return (
    <motion.div className="bg-primary-bg-light py-8" id="objects">
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        <div className="md:flex md:justify-between md:gap-6">
          {/* Heading text (Order changed for mobile screens) */}
          <div className="order-2 md:order-1 md:w-4/12">
            <motion.div
              className="mb-5 sm:mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <span className="font-medium text-gold-main">Объекты</span>
              <h1 className="text-2xl font-bold text-dark-100 sm:text-3xl">
                Эксклюзивные объекты: идеальный выбор для вашего будущего
              </h1>
            </motion.div>
            <p className="mb-10 text-dark-100">
              Мы собрали наиболее актуальные и востребованные объекты для наших
              клиентов.
            </p>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              onViewportEnter={() => setSelectedPage(SelectedPage.Objects)}
            ></motion.ul>
            <div className="hidden w-full min-w-full sm:flex">
              <AnchorLink
                href={"#contact"}
                offset="100"
                className="w-full gap-4 rounded-xl bg-green-main px-8 py-2.5 text-center font-semibold text-white shadow-md shadow-green-main/20 duration-200 hover:scale-105 hover:bg-gold-main md:w-max"
              >
                Получить консультацию
              </AnchorLink>
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-6 items-center justify-between justify-items-center md:order-2 md:mt-0 md:flex md:w-7/12">
            <div id="gallery" className="relative w-full" data-carousel="slide">
              <div className="relative h-56 overflow-hidden rounded-xl md:h-96">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  grabCursor={true}
                  autoplay
                  loop={true}
                  effect={"fade"}
                  navigation={true}
                  modules={[EffectFade, Autoplay, Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 0 },
                    768: { slidesPerView: 1, spaceBetween: 0 },
                    1024: { slidesPerView: 1, spaceBetween: 0 },
                  }}
                >
                  {slideImages.map((icon: string, index: number) => (
                    <SwiperSlide key={index}>
                      <img
                        src={slideImages[index]}
                        alt={icon}
                        loading="lazy"
                        className="absolute top-1/2 left-1/2 block h-auto max-w-full -translate-x-1/2 -translate-y-1/2 rounded-xl object-cover transition-opacity"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="mt-6 flex w-full min-w-full bg-red-100 sm:hidden">
              <AnchorLink
                href={"#contact"}
                offset="100"
                className="w-full gap-4 rounded-xl bg-green-main px-8 py-2.5 text-center font-semibold text-white shadow-md shadow-green-main/20 duration-200 hover:scale-105 hover:bg-gold-main md:w-max"
              >
                Получить консультацию
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
