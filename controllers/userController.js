const District = require('../models/District')
const User = require('../models/User')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        if(users){
            res.json(users)
        } else {
            res.json([])
        }
        
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}

const createUser = async (req, res) => {
    try {
        let { name, contact, password, blood_group, district } = req.body
        if (!name || !contact || !password || !blood_group || !district) {
            return res.status(400).json({
                message: 'Please fill all the fields',
            })
        }

        district = district.toLowerCase()
        blood_group = blood_group.toLowerCase()

        // create user
        const user = new User({
            name,
            contact,
            password,
            blood_group,
            district,
        })
        const savedUser = await user.save()

        // update district column
        const userDistrict = await District.findOne({name:district})
        if(userDistrict){
            console.log(userDistrict)
            console.log(savedUser)
            console.log('id',savedUser.id)
            console.log('donors',userDistrict.name)
            userDistrict.donors.push(savedUser._id)
            await userDistrict.save()
        } else {
            const newDistrict = new District({
                name:district,
                donors:[savedUser.id]
            })

            await newDistrict.save()
        }

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
