import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Open Micro SaaS</span>,
  project: {
    link: "https://github.com/product-makers-hub/open-micro-saas",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase:
    "https://github.com/product-makers-hub/open-micro-saas-docs",
  footer: {
    text: "Open Micro SaaS Docs Template",
  },
  banner: {
    key: "pre-release.1",
    text: (
      <a href="/roadmap" target="_blank" className="text-wrap	">
        🚧 Work in Progress! Click here to know more.
      </a>
    ),
  },
};

export default config;
