const { Router } = require("@layer0/core/router");
const { frontityRoutes } = require("@layer0/frontity");

const ONE_HOUR = 60 * 60;
const ONE_DAY = 24 * ONE_HOUR;

const PAGE_CACHE_TTL = {
  edge: {
    maxAgeSeconds: ONE_HOUR,
    staleWhileRevalidateSeconds: ONE_DAY,
  },
  browser: false,
};

module.exports = new Router()
  .get("/", ({ cache }) => cache(PAGE_CACHE_TTL))
  .get("/category/:path*", ({ cache }) => cache(PAGE_CACHE_TTL))
  .get("/tag/:path*", ({ cache }) => cache(PAGE_CACHE_TTL))
  .get("/about-us", ({ cache }) => cache(PAGE_CACHE_TTL))
  .use(frontityRoutes);
