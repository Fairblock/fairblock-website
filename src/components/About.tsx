import { Link } from "react-router-dom";

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
          Most Web2—and even many Web3—applications still rely on centralized intermediaries, making them vulnerable to silent manipulation and security risks. But fully exposed blockchains aren’t the answer either: public execution leaks sensitive data like trading intents, stablecoin transfers, liquidation triggers, solver bids, and AI agent inputs. This leakage invites exploitation, distorts price discovery, and holds back the next generation of high-impact consumer applications.
          </p>
          <p className="font-medium mb-6 md:mb-12 text-lg md:text-2xl">
            Fairblock leverages dynamic confidential computing to eliminate security risks, information leakage, and onchain manipulation—enabling new financial primitives, better pricing, and unlocking trustworthy consumer applications. We power the foundation for incorruptible markets and machines.
          </p>
          <Link
            to="/cApps"
            className="bg-fuchsia-300 hover:bg-fuchsia-400 border border-black/50 dark:border-white/50 font-marlide font-medium px-6 py-2 rounded-3xl text-black w-fit min-w-48"
          >
            Explore Confidential Stablecoins and Protected Trading
          </Link>
        </div>
      </div>
    </div>
  );
};
export default About;
