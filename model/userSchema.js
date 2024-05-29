const mongoose = require("mongoose")
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    imageUrl :{
        type: String,
        required: false
    },
    tokens:[
        {
            token:{
                type:String,
                required: false
            }
        }
    ],
})

// userSchema.methods.generateAuthToken = async function(){
//     try {
//         const token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     } catch (error) {
//         console.log(error);
//     }
// }

const User = mongoose.model("User", userSchema);
module.exports = User;