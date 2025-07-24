import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 🔁 One rotating, clickable pill with darker pastel background
const ConceptTag = () => {
  const tags = [
    { label: "Explore cApps", bg: "bg-blue-300", ring: "ring-blue-400" },
    { label: "Confidential Stablecoins", bg: "bg-purple-300", ring: "ring-purple-400" },
    { label: "Protected Trading", bg: "bg-orange-300", ring: "ring-orange-400" },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), 2200);
    const cycle = setTimeout(() => {
      setIndex((prev) => (prev + 1) % tags.length);
      setFade(true);
    }, 2500);

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(cycle);
    };
  }, [index]);

  return (
    <Link to="/cApps" aria-label="Explore Confidential Apps and Trading">
      <div
        className={`transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        } ${tags[index].bg} ${tags[index].ring} text-black font-marlide text-base md:text-lg px-6 py-2 rounded-full 
        ring-1 shadow-sm hover:shadow-md hover:scale-[1.02] transform transition-all duration-200 
        mx-auto lg:mx-0 text-center w-fit whitespace-nowrap mt-6 cursor-pointer`}
      >
        {tags[index].label}
      </div>
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
            Most Web2—and even many Web3—apps still rely on centralized intermediaries, exposing them to silent manipulation and systemic risk. But fully public blockchains aren’t the solution either: they leak sensitive information like trading intents, stablecoin transfers, liquidation triggers, auction bids, and private AI inputs. This visibility invites exploitation, skews price discovery, and prevents the next wave of high-impact financial applications.
          </p>

          <p className="font-medium mb-6 md:mb-12 text-lg md:text-2xl">
            Fairblock solves this with dynamic confidential computing — eliminating information leakage, protecting execution, and enabling secure, composable logic onchain. The result: new financial primitives, better pricing, and trustworthy applications that can't be manipulated.
          </p>

          {/* 🔁 Animated Pill CTA */}
          <ConceptTag />
        </div>
      </div>
    </div>
  );
};

export default About;
