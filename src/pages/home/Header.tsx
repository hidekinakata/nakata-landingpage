import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";
import ContentSection from "../../components/ContentSection";

type HeaderType = {};

const Header: React.FC<HeaderType> = (props) => {
  return (
    <ContentSection
      id={"home"}
      className={"flex flex-col justify-center items-center mt-6 p-5 gap-8"}
    >
      <div
        className={
          "flex flex-col md:flex-row items-center justify-center pb-8 "
        }
      >
        <div
          className={
            "flex w-full justify-center text-center items-center pb-8 md:pb-0"
          }
        >
          <h1 className={"text-3xl font-black antialiased"}>
            Conheça os sabores
            <br />
            do nosso sítio!
          </h1>
        </div>

        <figure
          className={
            "h-96 w-60 relative rounded-lg drop-shadow-lg md:w-[40vw] md:h-[50vh]"
          }
        >
          <img
            className="h-full object-cover shadow rounded-xl  "
            src="/galery/campo_maracuja.jpg"
            alt="Imagem aleatória"
          />
          <figcaption className={"px-5 py-3 text-center text-xs font-semibold"}>
            Foto dos campos de maraujá
          </figcaption>
        </figure>
      </div>

      <a
        className={
          "flex flex-col justify-center items-center gap-3 scroll-smooth "
        }
        href={"#sobre"}
      >
        <span>Saiba mais</span>
        <AnimatePresence>
          <motion.div
            transition={{
              staggerChildren: 0.2,
              delayChildren: 0.2,
            }}
          >
            <motion.div
              animate={{
                y: [0, 3, 0],
              }}
              transition={{
                ease: "easeOut",
                duration: 2,
                repeat: Infinity,
              }}
            >
              <SlArrowDown />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 3, 0],
              }}
              transition={{
                ease: "easeOut",
                duration: 2,
                repeat: Infinity,
              }}
            >
              <SlArrowDown />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </a>
    </ContentSection>
  );
};

export default Header;
