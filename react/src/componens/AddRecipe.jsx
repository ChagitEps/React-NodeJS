import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addrecipylist } from "../Redux/action"
import { AddRecipy } from "../axios/recipyAxios"

export const AddRecipe = () => {
  // const [obj, setobj] = useState({})
  // 1:נגדיר משתנה שישגר
  let d = useDispatch()
  const navigate = useNavigate()
const [r, setr] = useState({ingrediens:[{ name: "", amout: "" }]})
  function addrecipy() {
    const  f=async()=>{
      //לך תוסיף לשרת
      let res=await AddRecipy(r)
      // תציג הודעה שהוספת
      alert("נוסף בהצלחה")

    d(addrecipylist(r.data))
  
   }
    f() 
     //אחרי שנוסף לך לקומפוננטה דף הבית
     navigate('/home')
  }

  const [show, setshow] = useState(false)
  
  // const [arrc, setarrc] = useState([{ name: "", amout: "" }])
  const setsrrname = (index, value) => {

    const arr = [...r.ingrediens]
    arr[index].name = value
    setr({...r,ingrediens:arr})
  }
  const setsrramount = (index, value) => {
    const arr = [...r.ingrediens]
    arr[index].amout = value
    setr({...r,ingrediens:arr})
  }

  return <div className="form-group container">
    <h4>הוסף מתכון</h4>
    <br />
    <input type="text" className="form-control" placeholder="הכנס שם מתכון" onChange={(a)=>setr({...r,name:a.target.value})}></input>
    <br></br>
    <p>הכנס דרגת קושי:</p>
    <select  className="form-control" onChange={(a)=>setr({...r,level:a.target.value})} >
        <option className="dropdown-item">קל </option>
        <option className="dropdown-item">קשה</option>
        <option className="dropdown-item">בינוני</option>
    </select>
    <br></br>
    <input type="number" className="form-control" placeholder="הכנס  זמן הכנה" onChange={(a)=>setr({...r,time:a.target.value})}></input>
    <br></br>
    <select  className="form-control"  onChange={(a)=>setr({...r,type:a.target.value})}>
        <option className="dropdown-item">פרווה</option>
        <option className="dropdown-item">בשרי</option>
        <option className="dropdown-item">חלבי</option>
    </select>
    <br></br>
    <input type="password" className="form-control" placeholder="הכנס שם משתמש" onChange={(a)=>setr({...r,code:a.target.value})}></input>
    <br></br>
    <button className="btn btn-outline-dark btn-block" onClick={() => { setshow(true) }}>הוסף רכיבים למתכון</button>
    <br></br>
    {
      show && <>
        {r.ingrediens.map((recepy, index) => <div className="form-group container">
          <input type="text" className="form-control" placeholder="שם רכיב" value={recepy.amout}
          onChange={(e)=>{setsrramount(index,e.target.value)}}></input>
          <input type="text" className="form-control" placeholder="כמות" value={recepy.name}
          onChange={(e)=>{setsrrname(index,e.target.value)}}></input>
          
          
        </div>)
        }
            
    <button className="btn btn-outline-dark" onClick={() =>setr({...r,ingrediens:r.ingrediens.concat({name:"",amout:""})})}>+</button>
        </>
    }
    <br></br>
    <br />
    <button className="btn btn-outline-dark btn-block" onClick={() => addrecipy()}>הוסף</button>

    <br></br>
    
  </div>
  
}