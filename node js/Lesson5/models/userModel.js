import mongoose from 'mongoose'

let userSchema=mongoose.Schema({
  nameUser: String,
  password:String,
  phon: String,
  manager: Boolean,
  recipysLove: []
})
let userModel=mongoose.model("modeluser",userSchema,"User")
//ייצוא
export default userModel