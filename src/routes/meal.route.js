const router = require("express").Router();

const MealController = require("../controllers/meal.controller");

router.get("/", MealController.findAll);
router.post("/", MealController.insert);

router.get("/:id", MealController.findById);
router.put("/:id", MealController.update);
router.delete("/:id", MealController.delete);

module.exports = router;
