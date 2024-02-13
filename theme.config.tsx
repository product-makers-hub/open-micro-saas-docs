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
};

export default config;
