const Trade = require('../models/trades')

const getAllTrades = (req, res, next) => {
    console.log(req.query)
    const {user_id, type} = req.query;
    const options = {where: {}};
    user_id ? options.where.user_id = user_id : undefined;
    type? options.where.type = type : undefined;

    Trade.findAll(options)
        .then((doc) => {
            res.status(200).json(doc);
        })
        .catch((err) =>{
            res.statusCode = 500;
            res.status(500).json(err)
        })

}
module.exports =  getAllTrades;