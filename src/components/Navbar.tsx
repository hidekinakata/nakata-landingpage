import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Logo from "../assets/logo.svg";
import { RiWhatsappFill } from "react-icons/ri";
export const sections: { title: string; path: string; btn?: boolean }[] = [
  { title: "Início", path: "/#home" },
  { title: "Sobre", path: "#sobre" },
  {
    title: "Destaques",
    path: "#destaques",
  },
  {
    title: "Produtos",
    path: "#destaques",
  },
  {
    title: "Mande um ",
    path: "#contato",
    btn: true,
  },
];

const divVariants: Variants = {
  visible: {
    opacity: 1,
    display: "flex",
    height: "fit-content",
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  hidden: {
    height: 0,
    opacity: 0,
    display: "none",

    transition: {
      display: {
        delay: 0.5,
      },

      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  hidden: {},
};

const itemVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: -50,
  },
};

type NavbarType = {};

const Navbar: React.FC<NavbarType> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <AnimatePresence>
        <motion.nav
          variants={{
            hidden: {
              y: -100,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="visible"
          className="font-nunito bg-gray-700/5 text-black py-[2vh] w-full fixed top-0 left-0 z-10 backdrop-blur"
        >
          <div className="text-sm w-full h-[6vh] px-5 flex justify-between items-center md:px-20">
            <motion.a
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="#"
              className="text-md font-bold h-full"
            >
              <img className={"h-full"} src={Logo} alt={"Logo"} />
            </motion.a>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex gap-4 items-center font-bold"
            >
              {sections.map((s, i) => {
                if (s.btn) {
                  return (
                    <motion.a
                      variants={itemVariants}
                      href={s.path}
                      key={i}
                      className="hover:bg-green-400 p-4 px-6 text-center border bg-green-500 text-white rounded-full flex items-center gap-2"
                    >
                      {s.title} <RiWhatsappFill className={"text-lg"} />
                    </motion.a>
                  );
                } else {
                  return (
                    <motion.a
                      variants={itemVariants}
                      href={s.path}
                      key={i}
                      className="hover:text-gray-400 p-2 text-center"
                    >
                      {s.title}
                    </motion.a>
                  );
                }
              })}
            </motion.div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="navbar-burger flex items-center text-white p-3"
              >
                <svg
                  className="block h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
          <motion.div
            initial={"hidden"}
            variants={divVariants}
            animate={isOpen ? "visible" : "hidden"}
            className={`md:hidden text-sm box-border flex flex-col gap-3`}
          >
            <div className={"p-5"}>
              {sections.map((s, i) => {
                if (s.btn) {
                  return (
                    <motion.a
                      variants={itemVariants}
                      href={s.path}
                      key={i}
                      className="transition-[background-color] mx-auto w-fit hover:bg-green-300 p-2 px-6 text-center bg-green-500 text-white rounded-full flex items-center gap-2"
                      onClick={toggleMenu}
                    >
                      {s.title} <RiWhatsappFill className={"text-lg"} />
                    </motion.a>
                  );
                } else {
                  return (
                    <motion.a
                      variants={itemVariants}
                      href={s.path}
                      key={i}
                      className="transition-[background-color] block p-2 hover:bg-green-300"
                      onClick={toggleMenu}
                    >
                      {s.title}
                    </motion.a>
                  );
                }
              })}
            </div>
          </motion.div>
          {isOpen && (
            <div
              className={"absolute h-screen w-full"}
              onClick={toggleMenu}
            ></div>
          )}
        </motion.nav>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
