const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type:String ,required : true },
    sex:{type:String ,required : true },
    DOB: {type: String, required : true},
    father_name: {type:String ,required : true },
    mother_name: {type:String ,required : true },
    state:{type:String ,required : true },
    district:{type:String ,required : true }
})
module.exports = mongoose.model('childData', userSchema)

