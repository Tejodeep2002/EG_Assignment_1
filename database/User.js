const mongoose=require('mongoose');
const Joi=require('joi');

//Document Structure Defines
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    qualification:String
});

//Validation function
function validateUser(user){
    const pattern=new RegExp('^[a-zA-z\s]+$');
    const schema=Joi.object({
        name:Joi.string().min(2).max(300).required().regex(pattern),
        email:Joi.string().required(),
        password:Joi.string().required(),
        qualification:Joi.string().required()
    });
    return Joi.validate(user,schema);
}

//Collection Create
const User=mongoose.model('Users Database',userSchema);


exports.User=User;
exports.validate=validateUser;