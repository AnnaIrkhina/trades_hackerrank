const express = require('express');
const router = express.Router();
const getAllTrades = require('../controllers/getAllTrades');
const getTradeById = require('../controllers/getTradeById');
const createTrade = require('../controllers/createTrade');
const deleteTradeById = require('../controllers/deleteTrageById');


router.get('/', getAllTrades);
router.post('/', createTrade);
router.get('/:tradeId', getTradeById);
router.put('/:tradeId', deleteTradeById);
router.delete('/:tradeId', deleteTradeById);
router.patch('/:tradeId', deleteTradeById);



module.exports = router;
