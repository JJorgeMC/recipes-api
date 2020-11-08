const loaders = require("./loaders");

async function startServer(port) {
  server = await loaders();

  server.listen(port, () => {
    console.log(`RECIPES-API running on port ${port}`);
  });
}

module.exports = startServer;
