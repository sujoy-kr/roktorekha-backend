const mongoose = require('mongoose')
const { MONGODB_URI } = require('./env_config')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(MONGODB_URI)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB
