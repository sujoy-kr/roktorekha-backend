const router = require('express').Router()
const districtController = require('../../../controllers/districtController')

router.get('/', districtController.getAllDistricts)
router.put('/', districtController.updateDistrict)

module.exports = router
