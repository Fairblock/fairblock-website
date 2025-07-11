import { useEffect } from "react";
import DemosContent from "./DemosContent";
import { Star } from "../assets/svg/Star";
import { DEMOS_ARRAY } from "../utils/constants";
import { FAIR_BLOCK_RFP_LIST } from "../utils/links";
import { TOP_BORDER_1, BOTTOM_BORDER_1 } from "../utils/images";

const Demos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* SECTION 1 */}
      <div className="bg-[#CEEDFF] mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-12 py-8 lg:py-12 text-black">
        <div className="mx-auto lg:max-w-screen-lg">
          {/* DEMO - HEADER */}
          <h2 className="font-marlide min-h-[3.5rem] md-5 xl:mb-10 text-4xl lg:text-5xl">
            Our Applications
          </h2>

          {/* DEMO - PARAGRAPH & BULLET POINTS CONTAINER */}
          <div>
            <p>
             Fairblock is product-first. Rather than being a general-purpose infrastructure project focused solely on cryptography research or marketing, we prioritize building and collaborating on real, high-impact applications that deliver measurable value to users."
            </p>
            
            {/* BULLET POINTS CONTAINER */}
            <div className="my-12">
              <img
                className="mx-auto sm:w-2/3 xl:w-1/2"
                src={TOP_BORDER_1}
                alt="top-border"
              />
              <div className="border-l border-r border-black p-4 xl:p-8 mx-auto sm:w-2/3 xl:w-1/2">
                <h2 className="font-marlide min-h-[3.5rem] mb-5 xl:mb-10 text-4xl lg:text-5xl text-center">
                  cApps
                </h2>
                <ul className="flex flex-col gap-8 mb-5">
                  <li>
                    <Star className="inline mr-3 w-4" />
                    Confidential and compliant stablecoins with encrypted amounts
                  </li>
                  <li>
                    <Star className="inline mr-3 w-4" />
                    Fixed-rate and fair lending market with encrypted bids and rates
                  </li>
                  <li>
                    <Star className="inline mr-3 w-4" />
                    Protected orders against forced liquidations, frontrunning, and market impact of large trades
                  </li>
                  <li>
                    <Star className="inline mr-3 w-4" />
                    Data marketplace designed to unlock high-quality training and inference data for AI while preserving confidentiality and enabling secure monetization
                  </li>
                  <li>
                    <Star className="inline mr-3 w-4" />
                    Confidential AI inference on encrypted inputs
                  </li>
                </ul>
              </div>
              <img
                className="mx-auto sm:w-2/3 xl:w-1/2"
                src={BOTTOM_BORDER_1}
                alt="bottom-border"
              />
            </div>
            <p>
              Below is a showcase of our impactful and functional confidential applications (cApps):
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-12 py-8 lg:py-12">
        <div className="mx-auto lg:max-w-screen-lg">
          {DEMOS_ARRAY.map((item, index) => (
            <DemosContent
              index={index}
              demoId={item.demoId}
              demoName={item.demoName}
              demoDescription={item.demoDescription}
              demoLink={item.demoLink}
              demoVideoThumbnail={item.demoVideoThumbnail}
              demoVideoUrl={item.demoVideoUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Demos;
