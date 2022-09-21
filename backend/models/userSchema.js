const mongoose =require('mongoose') 
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const userSchema= mongoose.Schema({
   name:{
        type:String,
        required:[true,"Name is required"],
        maxLength:[20,"Name is too large"],
        trim:true
    },
    email:{
        type:String ,
        required:[true,"Email is required"],
        unique:[true,"email will be unique"]
    },
    phone:{
        type:Number,
        required:[true,"Phone number is required"],
        unique:[true],
        minLength:[11,"Min length will be 11"]
    }    ,
    role:{
        type:String,
        required:true,
        enum:{
            values:["Teacher","Student"],
            message:"role value can be Teacher / Student"
        },
        default:"Student"
    }
         
},
{timestamps:true}


)


const User = mongoose.model('User',userSchema)

module.exports=User