const express = require('express');
const { addInvestment, searchInvestment, updateInvestment, getInvestmentById } = require('../controllers/investmentController');

const router = express.Router();

router.post('/', addInvestment);
router.get('/search', searchInvestment);
router.get('/:id', getInvestmentById);  // New route to get investment by ID
router.put('/:id', updateInvestment);

module.exports = router;
