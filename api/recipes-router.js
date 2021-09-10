const express = require('express');

// RECIPES MODEL
const Recipe = require('./recipes-model');

const router = express.Router();

router.get('/:recipe_id', async (req, res, next) => {
  try {
    const recipe = await Recipe.getRecipeById(req.params.recipe_id)
    res.json(recipe)
  } catch (err) {
    next(err)
  }
});

module.exports = router;