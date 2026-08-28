import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/o-nas", destination: "/o-spolecnosti", permanent: true },
      { source: "/kontakty", destination: "/kontakt", permanent: true },
      { source: "/fisposervis", destination: "/servis", permanent: true },
      { source: "/fispobau", destination: "/stavebni-prace", permanent: true }
    ];
  }
};

export default nextConfig;
