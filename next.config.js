/** @type {import('next').NextConfig} */
const nextConfig = {


  async redirects(){
    return [
      {
  
      source:"/1",
      destination:"/",
      permanent:true

      }
    ]
  },

  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
