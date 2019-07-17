const model = {}
const returnFrameworkLibrary = require('../libraries/return-framework')

model.getReturnData = () => {
    return returnFrameworkLibrary.returnSame({
        success: true,
        message: 'Welcome to WISE Framework'
    })
}

module.exports = model
