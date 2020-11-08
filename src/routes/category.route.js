const router = require("express").Router();

const CategoryController = require("../controllers/category.controller");

router.get("/", CategoryController.findAll);
router.post("/", CategoryController.insert);

router.get("/:id", CategoryController.findById);
router.put("/:id", CategoryController.update);
router.delete("/:id", CategoryController.delete);

module.exports = router;
