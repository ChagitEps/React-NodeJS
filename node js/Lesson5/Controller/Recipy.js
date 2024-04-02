import express from 'express'
//יצירת השרת express
let router=express.Router()
import bodyParser from 'body-parser'
router.use(bodyParser())
import recipyModel from '../models/RecipyModel.js'


//שליפת כל המתכונים
router.get('/GetAllRecipy',async(rep,res)=>{
    let data=await recipyModel.find({})
    res.json(data)
})
//שליפת מתכונים ע"פ קוד אוטומטי
router.get('/GetRecipyPass/:id',async(req,res)=>{
    let myid=req.params.id
    let idRecipy=await recipyModel.find({_id:myid})
    res.json(idRecipy)
})
//הוספת מתכון
router.post('/addRecipy',async (req,res)=>{
    //שליפת הנתונים המגיעם בצורה מאובטחת
    let recipy=req.body
    //הוספה
    let newRecipy=await recipyModel.create(recipy)
    //נשלוף עוד פעם את הנתונים וניראה שהם נוספו
    let data=await recipyModel.find({})
   //שליחת הנתונים אחרי ההוספה 
   res.json(data)
})
//מחיקת מתכון
// router.delete('/delrouter/:idRecipy/:nameuser',async (req,res)=>{

// })
export default router