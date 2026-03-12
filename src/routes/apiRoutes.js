const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes'); 

const chefController = require('../controllers/chefController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.use('/auth', authRoutes); 

router.get('/auth/chefs', chefController.getAllChefs);
router.post('/auth/chefs', chefController.createChef);

const {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
} = require('../controllers/dishController');

router.get('/', getAllDishes);
router.post('/', protect, authorize('admin', 'manager'), createDish);
router.get('/:id', getDishById);
router.put('/:id', updateDish);
router.delete('/:id', deleteDish);

module.exports = router;