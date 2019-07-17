const controller = {}
const model = require('../models/users')

controller.getUsers = (req, res) => {
  model.getUsers((err, result) => {
    if (!err) {
      res.json(result)
    } else {
      console.error(err)
    }
  })
}

controller.getUsers = (req, res) => {
  model.getUser(req.params.userId, (err, result) => {
    if (!err) {
      res.json(result)
    } else {
      console.error(err)
    }
  })
}

controller.createUser = (req, res) => {
  let data = {
    fullname: req.body.fullname,
    email: req.body.email
  }

  model.createUser(data, (err, result) => {
    if(!err) {
      res.json(result)
    } else {
      console.error(err)
    }
  })
}

controller.updateUser = (req, res) => {
  let data = {
    fullname: req.body.fullname,
    email: req.body.email
  }

  model.editUser(req.params.userId, data, (err, result) => {
    if(!err) {
      res.json(result)
    } else {
      console.error(err)
    }
  })
}

controller.deleteUser = (req, res) => {
  model.deleteUser(req.params.userId, (err, result) => {
    if(!err) {
      res.json(result)
    } else {
      console.error(err)
    }
  })
}

module.exports = controller
