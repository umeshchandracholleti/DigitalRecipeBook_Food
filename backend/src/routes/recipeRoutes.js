import express from 'express';

const router = express.Router();

/**
 * Recipe Routes
 * TODO: Implement recipe endpoints
 */

// GET /api/recipes - Get all public recipes
router.get('/', (req, res) => {
  res.json({ message: 'Get all recipes endpoint - coming soon' });
});

// POST /api/recipes - Create new recipe (Protected)
router.post('/', (req, res) => {
  res.json({ message: 'Create recipe endpoint - coming soon' });
});

export default router;
