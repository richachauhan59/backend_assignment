const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    district:{type:String ,required : true }
})
module.exports = mongoose.model('districtData', userSchema)
