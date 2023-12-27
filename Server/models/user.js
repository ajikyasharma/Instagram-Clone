const mongoose= require('mongoose')

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requires:true
    },
    password:{
        type:String,
        equired:true 
    }
})

mongoose.model("User",userSchema)