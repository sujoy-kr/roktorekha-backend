const router = require('express').Router()

router.use('/test', require('./test'))
router.use('/user', require('./user'))
router.use('/district', require('./district'))

module.exports = router
