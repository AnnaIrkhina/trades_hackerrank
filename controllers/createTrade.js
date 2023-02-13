const Trade = require('../models/trades')

const createTrade = (req, res, next) => {
    Trade.create(req.body)
        .then((doc) => {
            res.status(201).json(doc);
        })
        .catch((err) =>{
            res.status(500).json(err)
        })

}
module.exports =  createTrade;