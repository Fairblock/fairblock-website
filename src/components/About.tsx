import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 🔁 Rotating animated tag with faster, cooler transition
const ConceptTag = () => {
  const tags = [
    { label: "Confidential Stablecoins", bg: "bg-blue-300", ring: "ring-blue-400" },
    { label: "Protected trading", bg: "bg-purple-300", ring: "ring-purple-400" },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), 1200);
    const cycle = setTimeout(() => {
      setIndex((prev) => (prev + 1) % tags.length);
      setFade(true);
    }, 800);

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(cycle);
    };
  }, [index]);

  return (
    <Link to="/cApps" aria-label="Explore Confidential Apps and Trading">
      <div
  className={`transition-all duration-500 ease-out transform ${
    fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
  } ${tags[index].bg} ${tags[index].ring} text-black font-marlide text-base md:text-xl px-6 py-2 rounded-full 
  ring-1 shadow-sm hover:shadow-md hover:ring-2 hover:ring-opacity-60 hover:scale-[1.02] 
  mx-auto lg:mx-0 text-center w-[15rem] whitespace-nowrap mt-6 cursor-pointer`}
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
            Most Web2—and even many Web3—applications rely on fully trusted intermediaries, making them vulnerable to security breaches and silent manipulation. But fully exposed blockchains aren't the answer either: they leak sensitive data like stablecoin transfers, liquidation triggers, and private AI inputs. Whether it's blind trust or reckless data exposure, both models invite exploitation, distort price discovery, and ultimately block the next wave of impactful onchain applications.
          </p>
          <p className="font-medium mb-6 md:mb-12 text-lg md:text-2xl">
            Fairblock solves this with dynamic confidential computing eliminating information leakage and manipulation. The results: encrypted stablecoins, new financial primitives, better pricing and trustworthy financial rails for institutions.
          </p>

          {/* 🔁 Upgraded animated pill */}
          <ConceptTag />
        </div>
      </div>
    </div>
  );
};

export default About;
