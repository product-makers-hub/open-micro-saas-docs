import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Open Micro SaaS</span>,
  project: {
    link: "https://github.com/product-makers-hub/open-micro-saas",
  },
  chat: {
    link: "https://discord.gg/BSn25bXyG9",
  },
  docsRepositoryBase:
    "https://github.com/product-makers-hub/open-micro-saas-docs",
  footer: {
    text: "Open Micro SaaS Docs",
  },
  banner: {
    key: "betta.1",
    text: (
      <a href="/roadmap" className="text-wrap	">
        ✨ Beta version! Click here to know more.
      </a>
    ),
  },
  useNextSeoProps() {
    return {
      additionalLinkTags: [
        {
          href: "favicon/apple-icon-180x180.png",
          rel: "apple-touch-icon",
          sizes: "180x180",
        },
        {
          href: "favicon/android-icon-192x192.png",
          rel: "icon",
          sizes: "192x192",
          type: "image/png",
        },
        {
          href: "favicon/favicon-96x96.png",
          rel: "icon",
          sizes: "96x96",
          type: "image/png",
        },
        {
          href: "favicon/favicon-32x32.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
        },
        {
          href: "favicon/favicon-16x16.png",
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
        },
      ],
    };
  },
};

export default config;
