const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
            minlength: 11,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        last_donation: {
            type: Date,
        },
        blood_group: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
        },
        total_donations: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.password
        delete returnedObject.createdAt
        delete returnedObject.updatedAt
    },
})

module.exports = mongoose.model('User', userSchema)
