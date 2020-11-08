const dotenv = require("dotenv");

dotenv.config();

const startServer = require("./src/app");

startServer(process.env.PORT || 3000);
