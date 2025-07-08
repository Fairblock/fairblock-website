import { GoLinkExternal } from "react-icons/go";

type DemosContentProps = {
  index: number;
  demoId: string;
  demoName: string;
  demoDescription: string;
  demoLink: string;
  demoVideoThumbnail: string;
  demoVideoUrl: string;
};

const DemosContent = ({
  index,
  demoId,
  demoName,
  demoDescription,
  demoLink,
  demoVideoThumbnail,
  demoVideoUrl,
}: DemosContentProps) => {
  return (
    <div className="my-4 md:my-28" id={demoId}>
      <h2 className="font-marlide min-h-[3.5rem] mb-4 md:mb-10 text-4xl lg:text-5xl text-center">
        {demoName}
      </h2>
      <div
        className={`flex flex-col gap-8 md:gap-16 items-center justify-between ${
          index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div
          className={`border border-white dark:border-black duration-500 md:hover:rotateY-0 md:w-3/5 rounded-lg ${
            index % 2 === 0 ? "md:rotateY-left" : "md:rotateY-right"
          }`}
        >
          {demoVideoUrl === "" ? (
            <img className="rounded-lg" src={demoVideoThumbnail} alt={demoName} />
          ) : (
            <video
              className="rounded-lg"
              poster={demoVideoThumbnail}
              preload="auto"
              controls
              src={demoVideoUrl}
            ></video>
          )}
        </div>
        <div className="md:w-2/5">
          <p className="mb-4">{demoDescription}</p>
          <a
            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 font-bold"
            href={demoLink}
          >
            Visit App <GoLinkExternal />
          </a>
        </div>
      </div>
    </div>
  );
};
export default DemosContent;
