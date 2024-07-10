const express = require('express');
const router = express.Router();
const TradesController = require('../controllers/trades');
const { tradeValidation } = require('../middlewares/validate');

router.post('/', tradeValidation, (req, res) => TradesController.createTrade(req, res));
router.get('/', (req, res) => TradesController.getTrades(req, res));
router.get('/:id', (req, res) => TradesController.getTrade(req, res));
router.delete('/:id', (req, res) => TradesController.handleModification(req, res));
router.put('/:id', (req, res) => TradesController.handleModification(req, res));
router.patch('/:id', (req, res) => TradesController.handleModification(req, res));

module.exports = router;
