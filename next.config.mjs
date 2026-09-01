/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/A_propos",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/project-details",
        destination: "/Projets",
        permanent: true,
      },
      {
        source: "/project-details/:id",
        destination: "/Projets/:id",
        permanent: true,
      },
      {
        source: "/team-details",
        destination: "/team",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
