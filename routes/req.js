const express = require('express')
const router = express.Router()
const {getRequest, postResponce} = require('../controllers/req')

router.route('/').get(getRequest).post(postResponce);

module.exports = router