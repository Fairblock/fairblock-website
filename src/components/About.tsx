import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedCallout = () => {
  const phrases = [
    "Explore cApps",
    "Confidential Stablecoins",
    "Protected Trading",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((index + 1) % phrases.length);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <Link to="/cApps" aria-label="Explore cApps and Confidential Tools">
      <motion.div
        key={phrases[index]}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-center gap-2 backdrop-blur-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-marlide font-medium px-6 py-2 rounded-full w-fit text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.03] cursor-pointer mx-auto lg:mx-0"
      >
        {phrases[index]}
      </motion.div>
    </Link>
  );
};

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-between min-h-screen px-3 py-12 md:py-20"
    >
      <div className="flex flex-col lg:flex-row-reverse gap-12 items-center justify-center mx-auto max-w-screen-xl">
        {/* ABOUT IMAGE CONTAINER */}
        <div className="flex flex-col gap-12 p-6 text-xl mx-auto w-full md:w-1/2 lg:w-[35%]">
          <img
            loading="lazy"
            className="dark:invert mx-auto w-full"
            src="/images/landing-page/fairblock.png"
            alt="Fairblock"
          />
        </div>

        {/* ABOUT TEXT CONTAINER */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h2 className="font-marlide font-normal mb-6 text-3xl md:text-5xl">
            Trustworthy Rails for Open Finance.
          </h2>
          <p className="mb-6 md:text-xl">
            Most Web2—and even many Web3—applications still rely on centralized
            intermediaries, making them vulnerable to silent manipulation and
            security risks. But fully exposed blockchains aren’t the answer
            either: public execution leaks sensitive data like trading int
