const User = require('../models/User')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}

const createUser = async (req, res) => {
    try {
        const { name, contact, password, blood_group, district } = req.body
        if (!name || !contact || !password || !blood_group || !district) {
            return res.status(400).json({
                message: 'Please fill all the fields',
            })
        }
        const user = new User({
            name,
            contact,
            password,
            blood_group,
            district,
        })
        const savedUser = await user.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}

module.exports = {
    getAllUsers,
    createUser,
}
