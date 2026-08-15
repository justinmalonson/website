export const SITE_NAME = "Justin Malonson";
export const SITE_ORIGIN = "https://justinmalonson.com";
export const HOME_URL = `${SITE_ORIGIN}/`;
export const ABOUT_URL = `${SITE_ORIGIN}/about/`;
export const EXPERTISE_URL = `${SITE_ORIGIN}/expertise/`;
export const CONTACT_URL = `${SITE_ORIGIN}/contact/`;

export const PERSON_ID = `${SITE_ORIGIN}/#justin-malonson`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
export const HOMEPAGE_ID = `${SITE_ORIGIN}/#webpage`;
export const PROFILE_PAGE_ID = `${ABOUT_URL}#profilepage`;
export const PRIMARY_IMAGE_ID = `${SITE_ORIGIN}/#primaryimage`;
export const ORGANIZATION_ID = "https://blockchaincomputer.com/#organization";
export const PRIMARY_IMAGE_URL = `${SITE_ORIGIN}/justin-malonson.png`;

export const PERSON_DESCRIPTION =
  "Justin Malonson is a software engineer specializing in distributed systems, cryptographic protocols, cybersecurity, blockchain architecture, artificial intelligence infrastructure, and sovereign computing.";

export const HOME_DESCRIPTION =
  "Justin Malonson is a software engineer specializing in distributed systems, cryptography, cybersecurity, blockchain architecture, artificial intelligence infrastructure, and sovereign computing.";

export const SAME_AS = [
  "https://www.linkedin.com/in/justin-malonson",
  "https://x.com/justinmalonson",
  "https://github.com/justinmalonson",
  "https://t.me/justinmalonson",
] as const;

type JsonLdNode = Record<string, unknown>;

export function imageObject(): JsonLdNode {
  return {
    "@type": "ImageObject",
    "@id": PRIMARY_IMAGE_ID,
    url: PRIMARY_IMAGE_URL,
    contentUrl: PRIMARY_IMAGE_URL,
    width: 800,
    height: 800,
    caption: "Justin Malonson",
  };
}

export function person(): JsonLdNode {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Justin Malonson",
    url: HOME_URL,
    jobTitle: "Software Engineer",
    description: PERSON_DESCRIPTION,
    image: { "@id": PRIMARY_IMAGE_ID },
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
    },
    knowsAbout: [
      "Software Engineering",
      "Distributed Systems",
      "Cryptography",
      "Cybersecurity",
      "Blockchain Architecture",
      "Artificial Intelligence",
      "Sovereign Computing",
    ],
    sameAs: [...SAME_AS],
    worksFor: { "@id": ORGANIZATION_ID },
    affiliation: { "@id": ORGANIZATION_ID },
  };
}

export function organization(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Blockchain Computer Inc.",
    url: "https://blockchaincomputer.com/",
    founder: { "@id": PERSON_ID },
  };
}

export function website(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: HOME_URL,
    name: SITE_NAME,
    description: HOME_DESCRIPTION,
    publisher: { "@id": PERSON_ID },
  };
}

export function breadcrumb(id: string, items: Array<{ name: string; url: string }>): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function jsonLd(graph: JsonLdNode[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph,
    }),
  };
}

export function socialMeta({
  title,
  description,
  url,
  type = "website",
}: {
  title: string;
  description: string;
  url: string;
  type?: "profile" | "website";
}) {
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: PRIMARY_IMAGE_URL },
    { property: "og:image:alt", content: "Portrait of Justin Malonson" },
    { property: "og:image:width", content: "800" },
    { property: "og:image:height", content: "800" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: PRIMARY_IMAGE_URL },
    { name: "twitter:image:alt", content: "Portrait of Justin Malonson" },
    { name: "twitter:site", content: "@justinmalonson" },
    { name: "twitter:creator", content: "@justinmalonson" },
  ];
}
