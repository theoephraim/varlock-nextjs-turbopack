import type { NextConfig } from "next";
import { varlockNextConfigPlugin } from '@varlock/nextjs-integration/plugin';
import path from "path";


/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  turbopack: {
  },
};

export default varlockNextConfigPlugin()(nextConfig);
