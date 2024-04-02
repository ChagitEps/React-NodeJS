import express from 'express'
import bodyParser from 'body-parser'
import userModel from '../models/userModel.js'
//יצירת השרת express
let router=express.Router()
//איפשור קבלת נתונים מהלקוח לשרת
router.use(bodyParser())
//שליפת כל המשתנים
router.get('/GetAllUsers',async(rep,res)=>{
    let data=await userModel.find({})
    console.log(data)
    res.json(data)
})
//הוספת משתמש
router.post('/',async (req,res)=>{
    //שליפת הנתונים המגיעם בצורה מאובטחת
    let user=req.body
    //הוספה
    let newuser=await userModel.create(user)
    //נשלוף עוד פעם את הנתונים וניראה שהם נוספו
    let data=await userModel.find({})
   //שליחת הנתונים אחרי ההוס]פה 
   res.json(data)
})
//שליפת נתונים ע"י שם וסיסמא
router.get('/GetRecipyPass/:pass/:name',async(rep,res)=>{
    let myid=req.params.id
    let myname=req.params.name
    let user=await recipyModel.findOne({'id':myid,'name':myname})
    res.json(user)
})
export default router