import dotenv from 'dotenv'
import express  from 'express'
import mongoose from 'mongoose'
import recepycontroller from './Controller/Recipy.js'
import usercon from './Controller/User.js'
import cors from 'cors'
//יצירת המופע של ההצפנה
dotenv.config()
//החיבור ל mongo
mongoose.connect("mongodb://0.0.0.0:27017/RecipyProject",{ useNewUrlParser: true, useUnifiedTopology: true })
//מופע של אקפרסס
let app=express()
//הרשאת גישה מהלקוח
app.use(cors())
//שיוך תקיית ה public
app.use(express.static('public'))
//הגדרת המשתנה של ה db
app.use("/Recipy",recepycontroller)
app.use("/User",usercon)
let db =mongoose.connection
//open db
db.on('open',()=>{
    console.log("db open!!!!!!!!!!!!!!!!")
})
//http://localhost:8688/Recipy/GetAllRecipy
//הרצת התוכנית
app.listen(process.env.PORT,()=>{

    console.log("run!!!!!!!!!!!!!!"+process.env.PORT);
})

