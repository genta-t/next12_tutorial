const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
}
