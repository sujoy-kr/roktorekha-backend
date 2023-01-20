const mongoose = require('mongoose')
const { DATABASE_URI } = require('./env_config')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(DATABASE_URI)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB
