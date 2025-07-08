import {
  ANAGRAM,
  GALILEO,
  DIALECTIC,
  LEMNISCAP,
  ROBOT_VENTURES,
  AXELAR,
  ARBITRUM,
  GSR,
  CHORUS_ONE,
  REVERIE,
  FAIRATES_IMG,
  FAIRY_COW_SWAP_IMG,
  FAIR_EX_IMG,
  UNRUGGABLE_AI_IMG,
  LAZY_KILLER_IMG,
  VERIFIABLE_RANDOMNESS_IMG,
  ON_CHAIN_TIME_BOMB_IMG,
  PRIVATE_GOVERNANCE_IMG,
  FAIRATES_VIDEO_URL,
  FAIRY_COW_SWAP_VIDEO_URL,
  FAIR_EX_VIDEO_URL,
  UNRUGGABLE_AI_VIDEO_URL,
  LAZY_KILLER_VIDEO_URL,
  VERIFIABLE_RANDOMNESS_VIDEO_URL,
  ON_CHAIN_TIME_BOMB_VIDEO_URL,
  PRIVATE_GOVERNANCE_VIDEO_URL,
  CHARACTER_BLUE_SCROLL_IMAGE,
  CHARACTER_GREEN_KEY_IMAGE,
  CHARACTER_PURPLE_LANTERN_IMAGE,
  CONFIDENTIAL_STABLECOINS_IMG,
  CONFIDENTIAL_STABLECOINS_VIDEO_URL,
  TIME_MACHINE_IMG,
  TIME_MACHINE_VIDEO_URL
} from "./images";

import {
  DISCORD_LINK,
  TWITTER_LINK,
  FAIR_BLOCK_MAIL,
  DOCS_LINK,
  DOCS_C_APP_LINK,
  FAIRATES_LINK,
  FAIRY_COW_SWAP_LINK,
  FAIR_EX_LINK,
  UNRUGGABLE_AI_LINK,
  LAZY_KILLER_LINK,
  VERIFIABLE_RANDOMNESS_LINK,
  ON_CHAIN_TIME_BOMB_LINK,
  TIME_MACHINE_LINK,
  PRIVATE_GOVERNANCE_LINK,
  CONFIDENTIAL_STABLECOINS_LINK,
} from "./links";

// *************** APP CONSTANTS - FOOTER - START ***************

export const FOOTER_LINKS_COLUMN_1 = {
  mainLabel: "Connect",
  links: [
    {
      linkLabel: "Discord",
      href: DISCORD_LINK,
      openInNewTab: true,
    },
    {
      linkLabel: "Mail",
      href: FAIR_BLOCK_MAIL,
    },
    {
      linkLabel: "X (Twitter)",
      href: TWITTER_LINK,
      openInNewTab: true,
    },
  ],
};

export const FOOTER_LINKS_COLUMN_2 = {
  mainLabel: "Resources",
  links: [
    {
      linkLabel: "Docs",
      href: DOCS_LINK,
    },
    {
      linkLabel: "Github",
      href: "https://github.com/Fairblock",
      openInNewTab: true,
    },
    {
      linkLabel: "News",
      href: "https://news.fairblock.network/",
    },
    {
      linkLabel: "Brand Kit",
      href: "https://ballistic-sail-a4e.notion.site/Fairblock-Brand-Kit-4602243ba91c44b385dfdc9fccc426dc",
    },
  ],
};

export const FOOTER_LINKS_COLUMN_3 = {
  mainLabel: "For developers",
  links: [
    {
      linkLabel: "Careers",
      to: "/careers",
    },
    {
      linkLabel: "Builders Program",
      href: "https://fairblock.notion.site/Fairblock-Builders-Program-RFP-List-69cd0c7747904e89bd27257a359a80f1",
    },
  ],
};

// *************** APP CONSTANTS - FOOTER - END ***************

// *************** LANDING PAGE - SECTION 03 - CARDS - START ***************

export const SLIDING_CARDS_ARRAY = [
  {
    name: "Accessible",
    imageUrlLight: "/images/landing-page/cards/accessible.png",
    imageUrlDark: "/images/landing-page/cards/accessible-dark.png",
    description: "Confidentiality is always one click away.",
  },
  {
    name: "Expansive",
    imageUrlLight: "/images/landing-page/cards/expansive.png",
    imageUrlDark: "/images/landing-page/cards/expansive-dark.png",
    description: "Unlocking impactful DeFi and Al apps.",
  },
  {
    name: "Composable",
    imageUrlLight: "/images/landing-page/cards/composable.png",
    imageUrlDark: "/images/landing-page/cards/composable-dark.png",
    description: "Pluggable confidential logic into any application.",
  },
  {
    name: "Dynamic",
    imageUrlLight: "/images/landing-page/cards/dynamic.png",
    imageUrlDark: "/images/landing-page/cards/dynamic-dark.png",
    description: "Fine-tuned performance and security for each application.",
  },
  {
    name: "Compliant",
    imageUrlLight: "/images/landing-page/cards/compliant.png",
    imageUrlDark: "/images/landing-page/cards/compliant-dark.png",
    description: "Zero compliance risks with post-transaction accountability.",
  },
];

// *************** LANDING PAGE - SECTION 03 - CARDS - END ***************

// *************** LANDING PAGE - SECTION 05 - BACKERS - START ***************

type BackersImageObject = {
  label: string;
  imageUrl: string;
};

export const BACKERS_IMAGE_ARRAY: BackersImageObject[] = [
  { label: "Anagram", imageUrl: ANAGRAM },
  { label: "Galileo", imageUrl: GALILEO },
  { label: "Dialectic", imageUrl: DIALECTIC },
  { label: "Lemniscap", imageUrl: LEMNISCAP },
  { label: "Robot Ventures", imageUrl: ROBOT_VENTURES },
  { label: "Axelar", imageUrl: AXELAR },
  { label: "Arbitrum", imageUrl: ARBITRUM },
  { label: "GSR", imageUrl: GSR },
  { label: "Chorus One", imageUrl: CHORUS_ONE },
  { label: "Reverie", imageUrl: REVERIE },
];

export const BACKERS_NAME_ARRAY: string[] = [
  "Zaki Manian",
  "Waikit Lau",
  "Leland Lee",
  "Calvin Liu",
  "George Lambeth",
  "Xavier Meegan",
  "Stefan Coolican",
  "Richard Malone",
  "Collin Myers",
  "Batu",
];

// *************** LANDING PAGE - SECTION 05 - BACKERS - END ***************

// *************** LANDING PAGE - SECTION 06 - ECOSYSTEM - START ***************

export const ECOSYSTEM_ARRAY_1 = [
  {
    name: "Arbitrum",
    imageUrl: "/images/landing-page/ecosystem/arbitrum.png",
    link: "https://arbitrum.io/",
  },
  {
    name: "OP Stack",
    imageUrl: "/images/landing-page/ecosystem/opstack.png",
    link: "https://optimism.io/",
  },
  {
    name: "Polygon",
    imageUrl: "/images/landing-page/ecosystem/polygon.png",
    link: "https://polygon.technology/",
    isBlack: true,
  },
  {
    name: "Polymer",
    imageUrl: "/images/landing-page/ecosystem/polymer.png",
    link: "https://www.polymerlabs.org/",
    isBlack: true,
  },
  {
    name: "Celestia",
    imageUrl: "/images/landing-page/ecosystem/celestia.png",
    link: "https://celestia.org/",
  },
  {
    name: "Xai",
    imageUrl: "/images/landing-page/ecosystem/xai.png",
    link: "https://xai.games/",
  },
  {
    name: "Alt Layer",
    imageUrl: "/images/landing-page/ecosystem/alt layer.png",
    link: "https://www.altlayer.io/",
    isBlack: true,
  },
  {
    name: "Squid",
    imageUrl: "/images/landing-page/ecosystem/squid.png",
    link: "https://www.squidrouter.com/",
  },
  {
    name: "Rollkit",
    imageUrl: "/images/landing-page/ecosystem/rollkit.png",
    link: "https://rollkit.dev/",
    isBlack: true,
  },
];

export const ECOSYSTEM_ARRAY_2 = [
  {
    name: "Ritual",
    imageUrl: "/images/landing-page/ecosystem/ritual.png",
    link: "https://ritual.net/",
    isBlack: true,
  },
  {
    name: "Cosmos Hub",
    imageUrl: "/images/landing-page/ecosystem/cosmoshub.png",
    link: "https://cosmos.network/",
    isBlack: true,
  },
  {
    name: "Stargaze",
    imageUrl: "/images/landing-page/ecosystem/stargaze.png",
    link: "https://www.stargaze.zone/",
  },
  {
    name: "Ethereum",
    imageUrl: "/images/landing-page/ecosystem/ethereum.png",
    link: "https://ethereum.org/en/",
  },
  {
    name: "CoW Swap",
    imageUrl: "/images/landing-page/ecosystem/cowswap.png",
    link: "https://swap.cow.fi/",
  },
  {
    name: "Monad",
    imageUrl: "/images/landing-page/ecosystem/monad.png",
    link: "https://www.monad.xyz/",
  },
  {
    name: "Fluent",
    imageUrl: "/images/landing-page/ecosystem/fluent.png",
    link: "https://fluent.xyz/",
  },
  {
    name: "Anoma",
    imageUrl: "/images/landing-page/ecosystem/anoma.png",
    link: "https://anoma.net/",
  },
];

// *************** LANDING PAGE - SECTION 06 - ECOSYSTEM - END ***************

// *************** LANDING PAGE - SECTION 07 - DEVELOPERS - START ***************

export const DEVELOPERS_ARRAY = [
  {
    imageUrl: CHARACTER_BLUE_SCROLL_IMAGE,
    imageText: "Character-scroll",
    header: "Wander the Woods",
    description: "Get started with fairy ring developer docs.",
    url: DOCS_LINK,
  },
  {
    imageUrl: CHARACTER_GREEN_KEY_IMAGE,
    imageText: "Character-key",
    header: "Build a cApp",
    description: "Build your Confidential App in 30 minutes.",
    url: DOCS_C_APP_LINK,
  },
  {
    imageUrl: CHARACTER_PURPLE_LANTERN_IMAGE,
    imageText: "Character-lantern",
    header: "Join our FairyRing",
    description: "Become a mushroom in the fairy ring.",
    url: DISCORD_LINK,
  },
];

// *************** LANDING PAGE - SECTION 07 - DEVELOPERS - END ***************

// *************** LANDING PAGE - SECTION 08 - NEWS - START ***************

export const NEWS_CARDS_ARRAY = [
  {
    imageUrl: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7c4c4d7b-2ff3-41d1-b204-68de7f5fea13_1600x1066.png",
    newsHeader: "Fairblock: Incorruptible Markets and Confidential Stablecoin Rails",
    newsBody: "Fairblock is building the Incorruptible world computer that unlocks secure, trust-minimized applications crucial for the next generation of institutional-grade DeFi systems.",
    newsLink: "https://www.shoal.gg/p/fairblock-incorruptible-markets-and",
    site: "shoal.gg",
    type: "news",
  },
  {
    imageUrl: "https://academy-public.coinmarketcap.com/srd-optimized-uploads/ed43ef9b80ce489fb99f48e863bc99de.jpg",
    newsHeader: "Fairblock Q2 2025 Overview",
    newsBody: "Fairblock is building the Incorruptible Computer. It delivers fair and credible decentralized markets and autonomous machines through institutional-grade confidentiality. The outcome is provably fair trades, transfers, bids, and AI decisions that preserve trust and credibility.",
    newsLink: "https://coinmarketcap.com/community/articles/682cb2cff9996f5939813d6d/",
    site: "coinmarketcap.com",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*nqeeFwC-zmdEylSXtIMGQg.png",
    newsHeader: "Trustless and Unstoppable Al with Fairblock and Ritual",
    newsBody:
      "Fairblock and Ritual are collaborating for Trustless and Unstoppable Al economies through decentralized confidential computing.",
    newsLink:
      "https://medium.com/@0xfairblock/confidential-rituals-trustless-and-unstoppable-ai-with-dynamic-confidentiality-95ecaee66e4c",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*Fadf2P2PH7_UvkNa",
    newsHeader:
      "Permissionless and performant confidential computing for Arbitrum ecosystem",
    newsBody:
      "Fairblock and Arbitrum are collaborating for permissionless and efficient confidential computing in EVM L2s.",
    newsLink:
      "https://medium.com/@0xfairblock/unlocking-arbitrum-with-dynamic-confidentiality-c376f4dd3000",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*7TfdDRazLdM0eumI",
    newsHeader:
      "Native Encryption for the OP Superchain with Camp and Fairblock",
    newsBody:
      "Fairblock and Camp Network are collaborating to bring confidential computing to Optimism Superchain and Camp Ecosystem of Al and consumer applications.",
    newsLink:
      "https://medium.com/@0xfairblock/native-encryption-for-the-op-superchain-with-camp-and-fairblock-e003dc62c648",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*3Yg5EJeVq7nI3GYu",
    newsHeader: "Encrypt Every Rollup",
    newsBody:
      "Bringing Dynamic Confidentiality to Rollup Developers with AltLayer.",
    newsLink:
      "https://medium.com/@0xfairblock/encrypting-every-rollup-ae95cfcad848",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*iaGYDRZZiiYQ_TM4Mo_zpw.png",
    newsHeader: "Announcing FairyCoW: Encrypted Orders for CoW Swap",
    newsBody:
      "FairyCoW improves onchain trading experiences by increasing capital efficiency and protecting against pre-execution order leakage without reliance on centralized parties.",
    newsLink:
      "https://medium.com/@0xfairblock/announcing-fairycow-encrypted-orders-for-cow-swap-2a5ae0bd0785",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl:
      "https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2024%2F03%2FED_hacks_20231105d-1-1.jpg&w=1920&q=75",
    newsHeader:
      "What is fully homomorphic encryption and how will it change blockchain?",
    newsBody:
      "FHE differs from zero-knowledge technology, as it can perform computation on top of encrypted data without revealing data points.",
    newsLink: "https://blockworks.co/news/what-is-fully-homomorphic-encryption",
    site: "blockworks.co",
    type: "news",
  },
  {
    imageUrl:
      "https://website-0xfairblock.vercel.app/_next/image?url=https%3A%2F%2Fhackmd.io%2F_uploads%2FBJo97G8pC.png&w=1920&q=75",
    newsHeader: "Multimodal Cryptography Series - Accountable MPC + TEE",
    newsBody:
      "Trusted Execution Environment (TEE) is a secure area within the memory and CPU of a device (computer or server), isolated from the rest of the system through encryption.",
    newsLink: "https://hackmd.io/@Fairblock/rkSiU78TR",
    site: "hackmd.io",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*zeb3NhzUNr9qeioTVRLmwQ.png",
    newsHeader: "Fairblock raises 2.5M",
    newsBody:
      "Fairblock raises 2.5M to build toward conditional decryption and programmable privacy.",
    newsLink:
      "https://medium.com/@0xfairblock/fairblock-raises-2-5m-to-build-toward-conditional-decryption-and-pre-execution-privacy-8f652877bf95",
    site: "medium.com",
    type: "news",
  },
];

// *************** LANDING PAGE - SECTION 08 - NEWS - END ***************

export const ARTICLE_CARDS_ARRAY = [
  {
    imageUrl: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7c4c4d7b-2ff3-41d1-b204-68de7f5fea13_1600x1066.png",
    newsHeader: "Fairblock: Incorruptible Markets and Confidential Stablecoin Rails",
    newsBody: "Fairblock is building the Incorruptible world computer that unlocks secure, trust-minimized applications crucial for the next generation of institutional-grade DeFi systems.",
    newsLink: "https://www.shoal.gg/p/fairblock-incorruptible-markets-and",
    site: "shoal.gg",
    type: "articles",
  },
  {
    imageUrl: "https://academy-public.coinmarketcap.com/srd-optimized-uploads/ed43ef9b80ce489fb99f48e863bc99de.jpg",
    newsHeader: "Fairblock Q2 2025 Overview",
    newsBody: "Fairblock is building the Incorruptible Computer. It delivers fair and credible decentralized markets and autonomous machines through institutional-grade confidentiality. The outcome is provably fair trades, transfers, bids, and AI decisions that preserve trust and credibility.",
    newsLink: "https://coinmarketcap.com/community/articles/682cb2cff9996f5939813d6d/",
    site: "coinmarketcap.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*nqeeFwC-zmdEylSXtIMGQg.png",
    newsHeader: "Trustless and Unstoppable Al with Fairblock and Ritual",
    newsBody:
      "Fairblock and Ritual are collaborating for Trustless and Unstoppable Al economies through decentralized confidential computing.",
    newsLink:
      "https://medium.com/@0xfairblock/confidential-rituals-trustless-and-unstoppable-ai-with-dynamic-confidentiality-95ecaee66e4c",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*Fadf2P2PH7_UvkNa",
    newsHeader:
      "Permissionless and performant confidential computing for Arbitrum ecosystem",
    newsBody:
      "Fairblock and Arbitrum are collaborating for permissionless and efficient confidential computing in EVM L2s.",
    newsLink:
      "https://medium.com/@0xfairblock/unlocking-arbitrum-with-dynamic-confidentiality-c376f4dd3000",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl: "/images/article-page/ibe-ibe-img.png",
    newsHeader:
      "Intent-Based Execution through Identity-Based Encryption and Auctions",
    newsBody:
      "Fairblock is unlocking rapid and leaderless auctions for dynamic and fair price discovery in intent matching, lending markets, token launches, and RWA/NFT sales.",
    newsLink: "https://eprint.iacr.org/2025/241",
    site: "eprint.iacr.org",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*3Yg5EJeVq7nI3GYu",
    newsHeader: "Encrypt Every Rollup",
    newsBody:
      "Bringing Dynamic Confidentiality to Rollup Developers with AltLayer.",
    newsLink:
      "https://medium.com/@0xfairblock/encrypting-every-rollup-ae95cfcad848",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*7TfdDRazLdM0eumI",
    newsHeader:
      "Native Encryption for the OP Superchain with Camp and Fairblock",
    newsBody:
      "Fairblock and Camp Network are collaborating to bring confidential computing to Optimism Superchain and Camp Ecosystem of Al and consumer applications.",
    newsLink:
      "https://medium.com/@0xfairblock/native-encryption-for-the-op-superchain-with-camp-and-fairblock-e003dc62c648",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*iaGYDRZZiiYQ_TM4Mo_zpw.png",
    newsHeader: "Announcing FairyCoW: Encrypted Orders for CoW Swap",
    newsBody:
      "FairyCoW improves onchain trading experiences by increasing capital efficiency and protecting against pre-execution order leakage without reliance on centralized parties.",
    newsLink:
      "https://medium.com/@0xfairblock/announcing-fairycow-encrypted-orders-for-cow-swap-2a5ae0bd0785",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2024%2F03%2FED_hacks_20231105d-1-1.jpg&w=1920&q=75",
    newsHeader:
      "What is fully homomorphic encryption and how will it change blockchain?",
    newsBody:
      "FHE differs from zero-knowledge technology, as it can perform computation on top of encrypted data without revealing data points.",
    newsLink:
      "https://blockworks.co/articles/what-is-fully-homomorphic-encryption",
    site: "blockworks.co",
    type: "articles",
  },
  {
    imageUrl:
      "https://website-0xfairblock.vercel.app/_next/image?url=https%3A%2F%2Fhackmd.io%2F_uploads%2FBJo97G8pC.png&w=1920&q=75",
    newsHeader: "Multimodal Cryptography Series - Accountable MPC + TEE",
    newsBody:
      "Trusted Execution Environment (TEE) is a secure area within the memory and CPU of a device (computer or server), isolated from the rest of the system through encryption.",
    newsLink: "https://hackmd.io/@Fairblock/rkSiU78TR",
    site: "hackmd.io",
    type: "articles",
  },
  {
    imageUrl:
      "https://website-0xfairblock.vercel.app/_next/image?url=https%3A%2F%2Fethresear.ch%2Fuploads%2Fdefault%2Foptimized%2F3X%2Fc%2F0%2Fc06c6733354f18254792958d1ccf872057a2fbba_2_1132x586.png&w=1920&q=75",
    newsHeader: "What happened to our decentralized private new internet?",
    newsBody:
      "The lack of onchain confidentiality has hindered the growth and adoption of even the most obvious applications.",
    newsLink:
      "https://ethresear.ch/t/what-happened-to-our-decentralized-private-new-internet/20657",
    site: "ethresear.ch",
    type: "articles",
  },
  {
    imageUrl: "https://hackmd.io/_uploads/SyTZb72nA.png",
    newsHeader: "MPCs going Harder, Better, Faster, and Stronger",
    newsBody:
      "At Fairblock, we have implemented Joint Feldman DKG, which is one of the most widely used DKG schemes nowadays and consists of (n) parallel verifiable secret sharing (VSS) instances.",
    newsLink: "https://hackmd.io/@Fairblock/r1YoJakpA",
    site: "hackmd.io",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*h_3IGs2zfe6MM9D3",
    newsHeader: "Introducing Dynamic Operator Sets: Secured by Symbiotic",
    newsBody:
      "Fairblock's dynamic operator sets allow protocol and application developers looking for more cryptographic flexibility to leverage multiple solutions within a tailored network.",
    newsLink:
      "https://medium.com/@0xfairblock/introducing-dynamic-operator-sets-secured-by-symbiotic-53fd2b0ecdef",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*fA7a4_g_dy21yetbBIcrnA.png",
    newsHeader: "Fairblock Public Testnet is Now Live",
    newsBody:
      "We're thrilled to announce the launch of our first public testnet, FairyRing.",
    newsLink:
      "https://medium.com/@0xfairblock/fairblock-public-testnet-is-now-live-a487f97ea3e0",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://ethresear.ch/uploads/default/original/3X/5/f/5fa5f78d2b4b44708e03133cf29d1de097113e36.jpeg",
    newsHeader: "Accessible Encryption for Ethereum Rollups with Fairomon",
    newsBody:
      "Fairomon is a special fairy type pokemon that combines the work of Fairblock and Monomer - a framework that enables builders to create Ethereum rollups with built-in encryption with minimal lift.",
    newsLink:
      "https://ethresear.ch/t/accessible-encryption-for-ethereum-rollups-with-fairomon/20349",
    site: "ethresear.ch",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*MmLvof7ahhmnlWOZ",
    newsHeader: "No More Plain Vanilla DeFi - We Need More Flavors",
    newsBody:
      "The Vitalik doesn't support DeFi' narrative is misunderstood. DeFi accounts for the lionshare of onchain activity and supports the weight of Ethereum's security budget — Vitalik and the Ethereum community understand this.",
    newsLink:
      "https://medium.com/@0xfairblock/no-more-plain-vanilla-defi-we-need-more-flavors-1ce16018f7b9",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*zeb3NhzUNr9qeioTVRLmwQ.png",
    newsHeader: "Fairblock raises 2.5M",
    newsBody:
      "Fairblock raises 2.5M to build toward conditional decryption and programmable privacy.",
    newsLink:
      "https://medium.com/@0xfairblock/fairblock-raises-2-5m-to-build-toward-conditional-decryption-and-pre-execution-privacy-8f652877bf95",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*0aJtme7AEE3OZCN-",
    newsHeader: "Encryption is the Prescription",
    newsBody:
      "Encryption is a prerequisite for blockchains to become the future of the internet.",
    newsLink:
      "https://medium.com/@0xfairblock/encryption-is-the-prescription-925beef5b226",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*kaDqFWboWQAAGtt-acvJEQ.png",
    newsHeader: "Fresh Wave of Privacy-Enhancing",
    newsBody:
      "Fairblock and Secret Network Partner To Develop New Generation of Privacy-Enhancing Products.",
    newsLink:
      "https://medium.com/@0xfairblock/fresh-wave-of-privacy-enhancing-technologies-d39008ec7eda",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*FiCnyeT7PkLHq5ymsyJRqg.png",
    newsHeader: "Fast Fairy Series: Programmable Privacy in DeFi",
    newsBody:
      "Decentralized finance is a radically new and distinct means of conducting financial activities.",
    newsLink:
      "https://medium.com/@0xfairblock/fast-fairy-series-programmable-privacy-in-defi-102b16ee8245",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*gNvXTdwBIvW9EZnhDt5fmw.png",
    newsHeader:
      "Fast Fairy Series: Three Cryptographic Schemes Advancing Programmable Privacy",
    newsBody:
      "Here we'll be taking a deeper look into all three schemes, their unique properties, and what benefits they offer.",
    newsLink:
      "https://medium.com/@0xfairblock/fast-fairy-series-three-cryptographic-schemes-advancing-programmable-privacy-57637c78b0d6",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*WCB1z7nqszzz0vLc",
    newsHeader: "Fast Fairy Series: Fairblock's Vision",
    newsBody:
      "Fairblock Delivers the Practical Privacy Tools Enabling Novel Web3 Applications",
    newsLink:
      "https://medium.com/@0xfairblock/fast-fairy-series-fairblocks-vision-340c37769ccf",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*-72ly7032FCqPhzP",
    newsHeader: "Fast Fairy Series: Private Governance",
    newsBody:
      'In the second installment of the Fast Fairy Series, we delve into "private governance", an application made possible by Fairblock infrastructure.',
    newsLink:
      "https://medium.com/@0xfairblock/fast-fairy-series-private-governance-b41b5faa0613",
    site: "medium.com",
    type: "articles",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*0Pdpg3fVY1zeVdfcNFkQTw.png",
    newsHeader: "Fast Fairy Series: FairyRing Architecture I",
    newsBody:
      "In the Fast Fairy Series, we are going to publish a series of articles to cover our architecture,design, potential applications, cryptography, and our long-term vision.",
    newsLink:
      "https://medium.com/@0xfairblock/fast-fairy-series-fairyring-architecture-i-d5293e0ce665",
    site: "medium.com",
    type: "articles",
  },
];

export const NEWS_CARDS_ARRAY_2 = [
  {
    imageUrl:
      "https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2024%2F03%2FED_hacks_20231105d-1-1.jpg&w=1920&q=75",
    newsHeader:
      "What is fully homomorphic encryption and how will it change blockchain?",
    newsBody:
      "FHE differs from zero-knowledge technology, as it can perform computation on top of encrypted data without revealing data points",
    newsLink: "https://blockworks.co/news/what-is-fully-homomorphic-encryption",
    site: "blockworks.co",
    type: "news",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*kaDqFWboWQAAGtt-acvJEQ.png",
    newsHeader: "Fresh Wave of Privacy-Enhancing Technologies",
    newsBody:
      "Fairblock and Secret Network Partner To Develop New Generation of Privacy-Enhancing Products",
    newsLink:
      "https://medium.com/@0xfairblock/fresh-wave-of-privacy-enhancing-technologies-d39008ec7eda",
    site: "medium.com",
    type: "news",
  },
  {
    imageUrl:
      "https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2023%2F10%2Ffairblocks-decryption.jpg&w=1920&q=75",
    newsHeader:
      "Fairblock raises $2.5M for fully private blockchain transactions",
    newsBody:
      "The Fairblock team has recently secured $2.5 million from investors to bring conditional encryption to blockchains",
    newsLink:
      "https://blockworks.co/news/fairblock-fundraising-conditional-decryption-privacy",
    site: "blockworks.co",
    type: "news",
  },
  {
    imageUrl:
      "https://uwaterloo.ca/computer-science/sites/default/files/uploads/images/peyman-momeni-in-dc-1500-pixels.jpg",
    newsHeader:
      "Fairblock, company co-founded by Cheriton alumnus Peyman Momeni, secures $2.5M USD for privacy of decentralized applications",
    newsBody:
      "Fairblock, a company co-founded by Cheriton School of Computer Science master's graduate Peyman Momeni, has secured $2.5 million to build infrastructure to bring conditional encryption and pre-execution privacy to blockchains.",
    newsLink:
      "https://uwaterloo.ca/computer-science/news/fairblock-co-founded-cheriton-alumnus-peyman-momeni-secures-2-point-5-m-usd-privacy-decentralized-applications",
    site: "uwaterloo.ca",
    type: "news",
  },
];

// *************** DEMOS PAGE - DEMO APPS - START ***************

export const DEMOS_ARRAY = [
  {
    demoId: "confidentialStablecoins",
    demoName: "Confidential stablecoins",
    demoDescription:
      "Confidential stablecoins are the final catalyst before institutions go “All In.” Fairblock makes them fast, compliant, and seamless—across any EVM chain and Solana. We use a multimodal cryptographic stack—including homomorphic encryption, MPC, lightweight ZKPs, and cross-chain message passing—to deliver confidential stablecoins without compromising performance, security, or user accessibility. This website only serves as an educational demo for confidential stablecoins.",
    demoLink: CONFIDENTIAL_STABLECOINS_LINK,
    demoVideoThumbnail: CONFIDENTIAL_STABLECOINS_IMG,
    demoVideoUrl: CONFIDENTIAL_STABLECOINS_VIDEO_URL,
  },
  {
    demoId: "fairates",
    demoName: "Fairates",
    demoDescription:
      "One rate: Fixed-rate for all lenders and borrowers through sealed-bid auctions. Zero game: Fair price discovery. No centralized auctioneers or blackbox mechanisms powered by confidential computing",
    demoLink: FAIRATES_LINK,
    demoVideoThumbnail: FAIRATES_IMG,
    demoVideoUrl: FAIRATES_VIDEO_URL,
  },
  {
    demoId: "cow-limit-order",
    demoName: "FairyCoW Swap",
    demoDescription:
      "FairyCoW Swap showcases how programmable encryption can be used within CoWSwap limit orders. Available on Sepolia testnet.",
    demoLink: FAIRY_COW_SWAP_LINK,
    demoVideoThumbnail: FAIRY_COW_SWAP_IMG,
    demoVideoUrl: FAIRY_COW_SWAP_VIDEO_URL,
  },
  {
    demoId: "time-machine",
    demoName: "Time Machine",
    demoDescription:
      "Encrypt your price prediction. Your alpha stays confidential. The earlier and more accurate you are, the more you earn.",
    demoLink: TIME_MACHINE_LINK,
    demoVideoThumbnail: TIME_MACHINE_IMG,
    demoVideoUrl: TIME_MACHINE_VIDEO_URL,
  },
  {
    demoId: "FairEx",
    demoName: "FairEx",
    demoDescription:
      "FairEx allows Arbitrum users to encrypt swaps and protect the contents of their orders from being leaked prior to execution.",
    demoLink: FAIR_EX_LINK,
    demoVideoThumbnail: FAIR_EX_IMG,
    demoVideoUrl: FAIR_EX_VIDEO_URL,
  },
  {
    demoId: "unruggable-ai",
    demoName: "Unruggable AI",
    demoDescription:
      "TEEs face a critical challenge: keys stored in volatile enclave memory are lost during hardware failures or restarts. Traditional backups introduce centralization risks, while manual recovery processes are error-prone. Unruggable AI addresses this by integrating TEEs, Fairblock’s MPC network, and a conditional private decryption protocol to ensure keys are securely backed up and recoverable.",
    demoLink: UNRUGGABLE_AI_LINK,
    demoVideoThumbnail: UNRUGGABLE_AI_IMG,
    demoVideoUrl: UNRUGGABLE_AI_VIDEO_URL,
  },
  {
    demoId: "murder-mystery",
    demoName: "Lazy Killer",
    demoDescription:
      "Lazy Killer is a multi-player murder mystery game that utilizes encryption to conceal the murderer until a certain block height is met.",
    demoLink: LAZY_KILLER_LINK,
    demoVideoThumbnail: LAZY_KILLER_IMG,
    demoVideoUrl: LAZY_KILLER_VIDEO_URL,
  },
  {
    demoId: "randomness",
    demoName: "Verifiable Randomness",
    demoDescription:
      "Verifiable randomness is generated with FairyRing and unlocks a new generation of gaming, defi, distribution, and auction-based apps across chains.",
    demoLink: VERIFIABLE_RANDOMNESS_LINK,
    demoVideoThumbnail: VERIFIABLE_RANDOMNESS_IMG,
    demoVideoUrl: VERIFIABLE_RANDOMNESS_VIDEO_URL,
  },
  {
    demoId: "time-bomb",
    demoName: "Onchain Time Bomb",
    demoDescription:
      "Our Time Bomb game allows users to grasp the power of encryption tangibly. Over 10,000 bombs have exploded since our testnet launch.",
    demoLink: ON_CHAIN_TIME_BOMB_LINK,
    demoVideoThumbnail: ON_CHAIN_TIME_BOMB_IMG,
    demoVideoUrl: ON_CHAIN_TIME_BOMB_VIDEO_URL,
  },
  {
    demoId: "private-gov",
    demoName: "Private Governance",
    demoDescription:
      "Our private governance module allows EVM and Cosmos users to encrypt their votes in any onchain poll to produce credibly neutral results.",
    demoLink: PRIVATE_GOVERNANCE_LINK,
    demoVideoThumbnail: PRIVATE_GOVERNANCE_IMG,
    demoVideoUrl: PRIVATE_GOVERNANCE_VIDEO_URL,
  },
];

// *************** DEMOS PAGE - DEMO APPS - END ***************
