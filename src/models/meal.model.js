const { Schema, model } = require("mongoose");

const MealSchema = new Schema({
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  ],
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  ingredients: { type: [String], required: true },
  steps: { type: [String], required: true },
  duration: { type: Number, required: true },
  complexity: { type: Number, required: true },
  affordability: { type: Number, required: true },
  isGlutenFree: { type: Boolean, required: true },
  isLactoseFree: { type: Boolean, required: true },
  isVegan: { type: Boolean, required: true },
  isVegetarian: { type: Boolean, required: true },
});

module.exports = model("Meal", MealSchema);
