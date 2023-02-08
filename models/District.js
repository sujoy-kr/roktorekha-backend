const mongoose = require('mongoose')

const districtSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    donors: [{
        type : mongoose.Types.ObjectId,
        ref: 'User',
        default:[]
    }
    ],
},{
    timestamps:true
})

districtSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.createdAt
        delete returnedObject.updatedAt
    },
})

module.exports = mongoose.model('District', districtSchema)