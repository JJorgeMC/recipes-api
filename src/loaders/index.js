const http = require("http");

const expressLoader = require("./express");
const mongooseLoader = require("./mongoose");

module.exports = async () => {
  await mongooseLoader();
  const app = expressLoader();

  return http.createServer(app);
};
