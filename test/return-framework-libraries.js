/* eslint-disable no-undef */

const expect = require('chai').expect

const library = require('../src/libraries/return-framework/index')

describe('Main Model', () => {
    it('return-framework: returnSame() Should return same value as declared', (done) => {
        const whatValue = {
            success: true,
            name: 'framework-library'
        }

        expect(library.returnSame(whatValue)).to.equal(whatValue)

        done()
    })
})
