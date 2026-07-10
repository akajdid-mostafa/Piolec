/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/A_propos",
        permanent: true,
      },
      {
        source: "/project-details/:id",
        destination: "/Projets/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
