import mongoose from 'mongoose'

let recipySchema=mongoose.Schema({
    name:String,
    img:String,
    level:String,
    time:Number,
    type:String,
    userPassword:String,
    ingrediens:Array
})
let recipyModel=mongoose.model("modelrecipy",recipySchema,"Recipy")
//ייצוא
export default recipyModel