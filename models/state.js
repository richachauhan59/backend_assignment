const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    state:{type:String ,required : true }
})
module.exports = mongoose.model('stateData', userSchema)
