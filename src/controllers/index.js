const controller = {}
const model = require('../models/index')

controller.getIndex = (req, res, next) => {
    res.json(model.getReturnData())
}

module.exports = controller
