/**
 * Depdencies require
 */

const env = require('dotenv')

let bootstrap = {}

bootstrap.beginAppBootstrap = async function () {
  /**
     * Bootstrap your App depedencies that doesn't have any link with Express Itself
     * such as dotenv, etc
     */
  env.config()
}

module.exports = bootstrap
