import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import ContentSection from "./components/ContentSection";
import { AnimatePresence, motion } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";
import Header from "./pages/home/Header";
import About from "./pages/home/About";
import Featured from "./pages/home/featured";
import { BsHeartFill } from "react-icons/bs";
import Contact from "./pages/home/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App antialiased font-poppins ">
      <Navbar />
      <main>
        <Header />
        <About></About>
        <Featured />
        <Contact />
      </main>
      <footer
        className={
          "w-full h-[20vh] bg-green-300 flex flex-col justify-center items-center gap-1 text-sm font-bold text-black/70"
        }
      >
        Site feito com muito <BsHeartFill className={"text-red-500"} /> por
        William Hideki
        <p className={"text-xs mt-6"}>
          William Hideki Whatsapp: (18) 99617-0886
        </p>
      </footer>
    </div>
  );
}

export default App;
