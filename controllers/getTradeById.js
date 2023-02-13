const Trade = require('../models/trades')

const getTradeById = (req, res, next) => {
    console.log(req.params)
    const id = req.params.tradeId;
    const notFound = `ID not found`;

    Trade.findByPk(id)
        .then((doc) => {
            if(doc){
                res.status(200).json(doc);
            } else {
                res.status(404).json(notFound);
            }
        })
        .catch((err) =>{
            res.statusCode = 500;
            json(err)
        })

}
module.exports =  getTradeById;