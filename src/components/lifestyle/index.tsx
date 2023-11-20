import { FC, useRef, useState } from "react";
import { SelectedPage } from "../../shared/types";
import Circles from "./Circles";
import { motion } from "framer-motion";
import videoVibe from "../../assets/videos/LifestyleVibe.mp4";
import videoCalahonda from "../../assets/videos/LifestyleCalahonda.mp4";
import videoEvening from "../../assets/videos/LifestyleEvening.mp4";
import ReactPlayer from "react-player";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Lifestyle: FC<Props> = ({ setSelectedPage }) => {
  const videoVibeRef = useRef<HTMLVideoElement>(null);
  const videoCalahondaRef = useRef<HTMLVideoElement>(null);
  const videoEveningRef = useRef<HTMLVideoElement>(null);

  const [hovered, setHovered] = useState(false);

  const handleHover = (videoRef: any) => {
    setHovered(true);
    videoRef?.current?.play();
    videoRef?.current?.seekTo(0);
  };

  const handleMouseOut = (videoRef: any) => {
    setHovered(false);
    videoRef?.current?.pause();
    videoRef?.current?.seekTo(0);
  };

  return (
    <section
      className="overflow-hidden bg-primary-bg-light py-8"
      id="lifestyle"
    >
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        <div className="md:flex md:justify-between md:gap-6">
          <div className="w-full px-6 lg:w-6/12 ">
            <div className="-mx-3 hidden items-center justify-evenly sm:-mx-10 md:flex">
              <div className="w-full px-3 sm:px-4 xl:w-2/5 ">
                <div
                  className=" cursor-pointer py-3 sm:py-4"
                  onMouseEnter={() => handleHover(videoCalahondaRef)}
                  onMouseLeave={() => handleMouseOut(videoCalahondaRef)}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <ReactPlayer
                    url={videoCalahonda}
                    controls={true}
                    width="100%"
                    height="100%"
                    playing={false}
                    volume={0.25}
                    preload="metadata"
                  />
                </div>
                <div
                  className="cursor-pointer py-4 sm:py-8 "
                  onMouseEnter={() => handleHover(videoEveningRef)}
                  onMouseLeave={() => handleMouseOut(videoEveningRef)}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <ReactPlayer
                    url={videoEvening}
                    controls={true}
                    width="100%"
                    height="100%"
                    playing={false}
                    volume={0.25}
                    preload="metadata"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div
                  className="relative z-10 cursor-pointer py-3 sm:py-4"
                  onMouseEnter={() => handleHover(videoVibeRef)}
                  onMouseLeave={() => handleMouseOut(videoVibeRef)}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <ReactPlayer
                    url={videoVibe}
                    controls={true}
                    width="100%"
                    height="100%"
                    playing={false}
                    volume={0.25}
                    preload="metadata"
                  />

                  <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <Circles />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full  lg:w-1/2 xl:w-6/12">
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
              onViewportEnter={() => setSelectedPage(SelectedPage.Lifestyle)}
            >
              <span className="font-medium text-gold-main">Lifestyle</span>
              <h1 className="text-2xl font-bold text-dark-100 sm:text-3xl">
                Освежите свою жизнь: Откройте новый образ жизни с нами
              </h1>
              <p className="max-w-2 mx-auto mt-10 text-dark-100">
                Предлагаем вам заглянуть в уникальный мир, где каждое видео -
                это окно в жизнь, наполненную вдохновением, красотой и
                удивительными историями. Откройте для себя эстетику и стиль,
                ощутите атмосферу и эмоции жизни на побережье.
              </p>
              <div className="-mx-3 mt-5 flex items-center justify-evenly sm:-mx-10 sm:hidden">
                <div className="w-full px-3 sm:px-4 xl:w-2/5 ">
                  <div
                    className=" cursor-pointer py-3 sm:py-4"
                    onMouseEnter={() => handleHover(videoCalahondaRef)}
                    onMouseLeave={() => handleMouseOut(videoCalahondaRef)}
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <ReactPlayer
                      url={videoCalahonda}
                      controls={true}
                      width="100%"
                      height="100%"
                      playing={false}
                      volume={0.25}
                      preload="metadata"
                    />
                  </div>
                  <div
                    className="cursor-pointer py-4 sm:py-8 "
                    onMouseEnter={() => handleHover(videoEveningRef)}
                    onMouseLeave={() => handleMouseOut(videoEveningRef)}
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <ReactPlayer
                      url={videoEvening}
                      controls={true}
                      width="100%"
                      height="100%"
                      playing={false}
                      volume={0.25}
                      preload="metadata"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div
                    className="relative z-10 cursor-pointer py-3 sm:py-4"
                    onMouseEnter={() => handleHover(videoVibeRef)}
                    onMouseLeave={() => handleMouseOut(videoVibeRef)}
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <ReactPlayer
                      url={videoVibe}
                      controls={true}
                      width="100%"
                      height="100%"
                      playing={false}
                      volume={0.25}
                      preload="metadata"
                    />

                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <Circles />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
