const router = require('express').Router()

router.use('/test', require('./test'))
router.use('/user', require('./user'))

module.exports = router
