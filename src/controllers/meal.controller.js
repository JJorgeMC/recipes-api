const Meal = require("../models/meal.model");

const controller = {};

controller.findAll = findMeals;
controller.findById = findMeal;
controller.insert = insertMeal;
controller.update = updateMeal;
controller.delete = deleteMeal;

function findMeals(req, res) {
  Meal.find((err, result) => {
    if (err) throw err;
    if (!result) {
      res.send(JSON.stringify({ error: "No data" }));
    }
    res.status = 200;
    res.json(result);
  });
}

function findMeal(req, res) {
  id = req.params.id;
  Meal.findById(id, (err, result) => {
    if (err) throw err;
    if (!result) {
      res.send(JSON.stringify({ error: "No data" }));
    }
    res.status = 200;
    res.json(result);
  });
}

function insertMeal(req, res) {
  const data = req.body;
  if (!data) {
    res.sendStatus(400);
  }

  Meal.create(data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    }
    res.json(result);
  });
}

function updateMeal(req, res) {
  const id = req.params.id;
  const data = req.body;

  if (!data) {
    res.sendStatus(400);
    return;
  }

  if (data.id != id) {
    res.sendStatus(404);
    return;
  }

  Meal.findByIdAndUpdate(id, data, (err, result) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(result);
  });
}

function deleteMeal(req, res) {
  const id = req.params.id;

  Meal.findByIdAndDelete(id, (err, result) => {
    if (err) {
      res.status(500).json(err);
      throw err;
    }

    res.json(result);
  });
}

module.exports = controller;
