const Trade = require('../models/trades')

const deleteTradeById = (req, res, next) => {

    res.status(405).json('API doesn\'t allow deleting or modifying trades');

}
module.exports =  deleteTradeById;