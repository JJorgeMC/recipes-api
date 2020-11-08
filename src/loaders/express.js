const express = require("express");
const cors = require("cors")({ origin: "*" });
const morgan = require("morgan");

const categoryRoute = require("../routes/category.route");
const mealRoute = require("../routes/meal.route");

module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use(cors);
  app.use(morgan("dev"));

  app.use("/category", categoryRoute);
  app.use("/meal", mealRoute);

  app.get("/", (req, res) => {
    res.status(200).send("Hello from recipes-api");
  });

  app.get("/error", (req, res) => {
    try {
      throw "Error :(";
    } catch (e) {
      res.json(e);
    }
  });

  return app;
};
