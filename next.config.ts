import type { NextConfig } from "next";
import createMdx from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    reactCompiler: true,
    mdxRs: true,
  },
};

const withMdx = createMdx({});

export default withMdx(nextConfig);
