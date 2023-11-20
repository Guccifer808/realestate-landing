import { FC, useEffect, useRef, useState } from "react";
import { SelectedPage } from "../../shared/types";
import Circles from "./Circles";
import { motion } from "framer-motion";
import videoVibe from "../../assets/videos/LifestyleVibe.mp4";
import videoCalahonda from "../../assets/videos/LifestyleCalahonda.mp4";
import videoEvening from "../../assets/videos/LifestyleEvening.mp4";
import playBtn from "../../assets/playBtn.svg";

import ReactPlayer from "react-player";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Lifestyle: FC<Props> = ({ setSelectedPage }) => {
  const [showVibeOverlay, setShowVibeOverlay] = useState(true);
  const [showCalahondaOverlay, setShowCalahondaOverlay] = useState(true);
  const [showEveningOverlay, setShowEveningOverlay] = useState(true);

  const videoVibeRef = useRef<HTMLVideoElement>(null);
  const videoCalahondaRef = useRef<HTMLVideoElement>(null);
  const videoEveningRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoVibeRef.current) {
      videoVibeRef.current.volume = 0.25;
    }
    if (videoCalahondaRef.current) {
      videoCalahondaRef.current.volume = 0.25;
    }
    if (videoEveningRef.current) {
      videoEveningRef.current.volume = 0.25;
    }
    videoVibeRef.current?.setAttribute("preload", "metadata");
    videoCalahondaRef.current?.setAttribute("preload", "metadata");
    videoEveningRef.current?.setAttribute("preload", "metadata");
  }, []);

  const [hovered, setHovered] = useState(false);

  const handleHover = (videoRef: any) => {
    setHovered(true);
    setShowVibeOverlay(false);
    videoRef?.current?.seekTo(0); // Restart the video from the beginning
    videoRef?.current?.play();
  };

  const handleMouseOut = (videoRef: any) => {
    setHovered(false);
    setShowVibeOverlay(true);
    videoRef?.current?.pause();
    videoRef?.current?.seekTo(0); // Go back to the start on mouse out
  };

  const handleHoverVibe = () => {
    if (videoVibeRef.current) {
      videoVibeRef.current.play();
      setShowVibeOverlay(false);
      setShowCalahondaOverlay(true);
      setShowEveningOverlay(true);
    }
  };

  const handleHoverCalahonda = () => {
    if (videoCalahondaRef.current) {
      videoCalahondaRef.current.play();
      setShowCalahondaOverlay(false);
      setShowVibeOverlay(true);
      setShowEveningOverlay(true);
    }
  };

  const handleHoverEvening = () => {
    if (videoEveningRef.current) {
      videoEveningRef.current.play();
      setShowEveningOverlay(false);
      setShowVibeOverlay(true);
      setShowCalahondaOverlay(true);
    }
  };

  const handleMouseOutVibe = () => {
    if (videoVibeRef.current) {
      videoVibeRef.current.pause();
      setShowVibeOverlay(true);
      videoVibeRef.current.currentTime = 0;
    }
  };

  const handleMouseOutCalahonda = () => {
    if (videoCalahondaRef.current) {
      videoCalahondaRef.current.pause();
      setShowCalahondaOverlay(true);
      videoCalahondaRef.current.currentTime = 0;
    }
  };

  const handleMouseOutEvening = () => {
    if (videoEveningRef.current) {
      videoEveningRef.current.pause();
      setShowEveningOverlay(true);
      videoEveningRef.current.currentTime = 0;
    }
  };

  return (
    <section
      className="overflow-hidden bg-primary-bg-light py-8"
      id="lifestyle"
    >
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        <div className="md:flex md:justify-between md:gap-6">
          <div className="w-full px-6 lg:w-6/12 ">
            <div className="-mx-3 flex items-center justify-evenly sm:-mx-10 ">
              <div className="w-full px-3 sm:px-4 xl:w-2/5 ">
                <div
                  className=" cursor-pointer py-3 sm:py-4"
                  // onMouseEnter={handleHoverVibe}
                  // onMouseLeave={handleMouseOutVibe}
                  onMouseEnter={() => handleHover(videoVibeRef)}
                  onMouseLeave={() => handleMouseOut(videoVibeRef)}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  {/* <motion.video
                    className="w-full rounded-xl md:h-[400px]"
                    ref={videoVibeRef}
                    preload="metadata"
                    initial="hidden"
                  >
                    <source src={videoVibe} type="video/mp4" />
                  </motion.video> */}
                  <ReactPlayer
                    url={videoVibe}
                    controls={true} // Enable player controls
                    width="100%"
                    height="100%"
                    playing={false} // Set to true to auto-play
                    volume={0.25} // Set volume (0 to 1)
                    preload="metadata"
                  />
                  {showVibeOverlay && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        cursor: "pointer",
                      }}
                      onClick={handleHoverVibe}
                    >
                      <img
                        src={playBtn}
                        alt="Play Icon"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  )}
                </div>
                <div
                  className="cursor-pointer py-4 sm:py-8 "
                  onMouseEnter={handleHoverCalahonda}
                  onMouseLeave={handleMouseOutCalahonda}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <video
                    className="w-full rounded-xl md:h-[400px]"
                    ref={videoCalahondaRef}
                    preload="metadata"
                  >
                    <source src={videoCalahonda} type="video/mp4" />
                  </video>
                  {showCalahondaOverlay && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        cursor: "pointer",
                      }}
                      onClick={handleHoverCalahonda}
                    >
                      <img
                        src={playBtn}
                        alt="Play Icon"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div
                  className="relative z-10 cursor-pointer py-3 sm:py-4"
                  onMouseEnter={handleHoverEvening}
                  onMouseLeave={handleMouseOutEvening}
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <video
                    className="w-full rounded-xl md:h-[400px]"
                    ref={videoEveningRef}
                    preload="metadata"
                  >
                    <source src={videoEvening} type="video/mp4" />
                  </video>
                  {showEveningOverlay && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        cursor: "pointer",
                      }}
                      onClick={handleHoverEvening}
                    >
                      <img
                        src={playBtn}
                        alt="Play Icon"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  )}
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
