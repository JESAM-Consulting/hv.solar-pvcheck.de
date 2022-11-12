/** @type {import('next').NextConfig} */
const nextConfig = {


  async redirects(){
    return [
      {
      source:"/",
      destination:"/1",
      permanent:true
      }
    ]
  },

  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
