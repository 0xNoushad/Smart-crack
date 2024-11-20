import type { NextSeoProps } from "next-seo";

export const SEO: NextSeoProps = {
  title: " SMART Crack | Transform your data into interactive graphs",
  description:
    "SMART Crack Editor is a tool for visualizing into graphs, analyzing, editing, formatting, querying, transforming and validating Your Rust Smart Contract.",
  themeColor: "#36393E",
  openGraph: {
    type: "website",
    images: [
      {
        url: "https://jsoncrack.com/assets/jsoncrack.png",
        width: 1200,
        height: 627,
      },
    ],
  },
  twitter: {
    handle: "#",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
      sizes: "48x48",
    },
  ],
};
