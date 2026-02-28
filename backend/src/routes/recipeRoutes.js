import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import {
  getAllRecipes,
  getUserRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  addReview,
  getRecipeReviews,
} from '../controllers/recipeController.js';

const router = express.Router();

/**
 * Recipe Routes
 */

// Public routes
router.get('/', getAllRecipes); // Get all recipes with search & pagination
router.get('/:id', getRecipeById); // Get single recipe with details
router.get('/:id/reviews', getRecipeReviews); // Get reviews for a recipe
router.get('/user/:userId', getUserRecipes); // Get user's recipes

// Protected routes (require authentication)
router.post('/', authMiddleware, createRecipe); // Create new recipe
router.put('/:id', authMiddleware, updateRecipe); // Update recipe
router.delete('/:id', authMiddleware, deleteRecipe); // Delete recipe
router.post('/:id/reviews', authMiddleware, addReview); // Add review to recipe

export default router;
