const controller = {}
const model = require('../models/users')

controller.getIndex = (req, res, next) => {
  model.getAsal((err, result) => {
    if (!err) {
      res.json(result)
    }    
  })
}

module.exports = controller
