import { Link } from "react-router-dom";
import { useTheme } from "../App";
import {
  HOW_IT_WORKS_LIGHT_IMAGE,
  HOW_IT_WORKS_DARK_IMAGE,
} from "../utils/images";

const HowItWorks = () => {
  const { darkMode } = useTheme();

  return (
    <div className="px-6 pb-12 pt-24 lg:pt-12">
      <div className="relative border lg:border-none border-black/50 lg:bg-[url('/images/landing-page/borders/full-border-how-things-work.png')] dark:invert lg:bg-contain lg:bg-center lg:bg-no-repeat flex flex-col lg:flex-row items-center justify-evenly gap-12 md:gap-0 rounded-3xl py-8 lg:p-16 lg:pt-28 xl:pt-40 shadow-md shadow-black/20 dark:shadow-white lg:shadow-none mx-auto max-w-screen-xl">
        {/* BORDER TOP DECORATION IMAGE */}
        <img
          loading="lazy"
          className="absolute block lg:hidden -top-[3.5rem] left-1/2 rotate-180 -translate-x-1/2 w-40"
          src="/images/landing-page/borders/border-top-2.png"
          alt="Top border decoration"
        />

        {/* HOW IT WORKS TEXT CONTAINER */}
        <div className="dark:invert flex flex-col items-center lg:items-start p-4 lg:p-0 text-center lg:text-start w-full lg:w-[40%]">
          <h2 className="font-marlide font-normal mt-8 mb-4 md:my-6 text-4xl lg:text-5xl">
            Dynamic Confidentiality for Every Block
          </h2>
          <p className="my-4 md:my-6 text-xl">
            Accessible confidentiality for emergent onchain markets. Powered by
            MPC and customizable for optimal application performance with
            multimodal cryptography.
          </p>
          <button className="bg-[#58BDF6] hover:bg-[#718BD2] border border-black/50 dark:border-white/50 font-medium mt-6 px-6 py-2 rounded-3xl text-black w-fit">
            <Link to="/how-it-works">
              Learn How It Works
            </Link>
          </button>
        </div>

        {/* HOW IT WORKS IMAGE CONTAINER */}
        <div className="w-full lg:w-[60%]">
          <img
            src={darkMode ? HOW_IT_WORKS_DARK_IMAGE : HOW_IT_WORKS_LIGHT_IMAGE}
            loading="lazy"
            className="dark:invert h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
