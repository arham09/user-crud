/* eslint-disable no-undef */

const expect = require('chai').expect
const model = require('../src/models/index')

describe('Main Model', () => {
    it('getReturnData: Should return success as true', (done) => {
        expect(model.getReturnData().success).to.equal(true)
        done()
    })

    it('getReturnData: Should return exact message', (done) => {
        expect(model.getReturnData().message).to.equal('Welcome to WISE Framework')
        done()
    })
})
