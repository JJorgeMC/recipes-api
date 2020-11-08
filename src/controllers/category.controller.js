const Category = require("../models/category.model");

const controller = {};

controller.findAll = findCategories;
controller.findById = findCategory;
controller.insert = insertCategory;
controller.update = updateCategory;
controller.delete = deleteCategory;

function findCategories(req, res) {
  Category.find((err, result) => {
    if (err) throw err;
    if (!result) {
      res.send(JSON.stringify({ error: "No data" }));
    }
    res.status = 200;
    res.json(result);
  });
}

function findCategory(req, res) {
  id = req.params.id;
  Category.findById(id, (err, result) => {
    if (err) throw err;
    if (!result) {
      res.send(JSON.stringify({ error: "No data" }));
    }
    res.status = 200;
    res.json(result);
  });
}

function insertCategory(req, res) {
  const data = req.body;
  if (!data) {
    res.sendStatus(400);
  }

  Category.create(data, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    }
    res.json(result);
  });
}

function updateCategory(req, res) {
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

  Category.findByIdAndUpdate(id, data, (err, result) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(result);
  });
}

function deleteCategory(req, res) {
  const id = req.params.id;

  Category.findByIdAndDelete(id, (err, result) => {
    if (err) {
      res.status(500).json(err);
      throw err;
    }

    res.json(result);
  });
}

module.exports = controller;
