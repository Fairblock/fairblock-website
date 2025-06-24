import { ReactNode } from "react";
import { SlDocs } from "react-icons/sl";
import { TbApps } from "react-icons/tb";
import { GrWorkshop, GrArticle } from "react-icons/gr";
import { RiTwitterXFill, RiDiscordLine } from "react-icons/ri";
import { DOCS_LINK, DISCORD_LINK, TWITTER_LINK } from "../../utils/links";

type NavOption = {
  type: "link" | "anchor";
  label: string;
  logo: ReactNode;
  to?: string;
  href?: string;
  hideLabelDesktop?: boolean;
  openInNewTab?: boolean;
};

export const NAV_OPTIONS:NavOption[] = [
  {
    type: "link",
    label: "How it works",
    logo: <GrWorkshop className="md:hidden text-2xl" />,
    to: "/how-it-works",
  },
  {
    type: "anchor",
    label: "Docs",
    logo: <SlDocs className="md:hidden text-2xl" />,
    href: DOCS_LINK,
  },
  {
    type: "link",
    label: "Articles",
    logo: <GrArticle className="md:hidden text-2xl" />,
    to: "/articles",
  },
  {
    type: "link",
    label: "cApps",
    logo: <TbApps className="md:hidden text-2xl" />,
    to: "/cApps",
  },
  {
    type: "anchor",
    label: "Discord",
    hideLabelDesktop: true,
    logo: <RiDiscordLine className="text-2xl" />,
    href: DISCORD_LINK,
    openInNewTab: true,
  },
  {
    type: "anchor",
    label: "Twitter",
    hideLabelDesktop: true,
    logo: <RiTwitterXFill className="text-2xl" />,
    href: TWITTER_LINK,
    openInNewTab: true,
  },
];