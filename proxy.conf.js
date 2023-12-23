const PROXY_CONFIG = [
  {
    context: [
      "/api",
    ],
    target: "https://toeicute-38c2b32a7c77.herokuapp.com/",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    pathRewrite: {"^/api": "/api"}
  }
];
module.exports = PROXY_CONFIG;
