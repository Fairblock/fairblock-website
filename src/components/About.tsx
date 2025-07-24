import { Link } from "react-router-dom";

// ✅ Clean clickable pill-style tag group
const ConceptTags = () => {
  const tags = [
    { label: "Explore cApps", bg: "bg-blue-100", hover: "hover:bg-blue-200" },
    { label: "Confidential cUSD", bg: "bg-purple-100", hover: "hover:bg-purple-200" },
    { label: "Protected Trading", bg: "bg-orange-100", hover: "hover:bg-orange-200" },
  ];

  return (
    <Link
      to="/cApps"
      aria-label="Explore cApps and Confidential Tools"
      className="inline-block"
    >
      <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`text-black font-marlide text-sm md:text-base px-4 py-2 rounded-full shadow-sm ${tag.bg} ${tag.hover} transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-md cursor-pointer`}
          >
            {tag.label}
          </span>
        ))}
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

          {/* 🔁 Beautiful clickable tag group */}
          <ConceptTags />
        </div>
      </div>
    </div>
  );
};

export default About;
