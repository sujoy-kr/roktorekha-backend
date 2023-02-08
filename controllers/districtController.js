const District = require('../models/District')

const getAllDistricts = async (req,res) => {
    try {
        const districts = await District.find({})
    if(districts){
        res.json(districts)
    } else {
        res.json([])
    }
    } catch (e){
        res.json({message:e.message})
    }
}

const updateDistrict = async(req,res) => {
    res.json('hello')
}

module.exports = {
    getAllDistricts,
    updateDistrict,
}