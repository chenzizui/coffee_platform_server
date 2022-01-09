var redis = require('redis');
var config = require('../config/default.js')
const client = redis.createClient(6379, '127.0.0.1')

class Redis {

    constructor() { }
}
module.exports = new Redis()