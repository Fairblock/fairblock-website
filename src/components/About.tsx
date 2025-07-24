import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AnimatedCallout = () => {
  const phrases = [
    { text: "Explore cApps", bg: "bg-blue-200" },
    { text: "Confidential Stablecoins", bg: "bg-purple-200" },
    { text: "Protected Trading", bg: "bg-orange-200" },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), 2200);
    const cycle = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
      setFade(true);
    }, 2500);

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(cycle);
    };
  }, [index]);

  return (
    <Link to="/cApps" aria-label="Explore cApps and Confidential Tools">
      <div
        className={`transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        } ${phrases[index].bg} text-black font-marlide font-medium px-6 py-2 rounded-full min-w-[14rem] text-base md:text-lg shadow-md hover:shadow-lg transform hover:scale-105 cursor-pointer mx-auto lg:mx-0 text-center`}
      >
        {phrases[index].text}
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


          {/* 🔁 Animated CTA */}
          <AnimatedCallout />
        </div>
      </div>
    </div>
  );
};

export default About;
