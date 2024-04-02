import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import users from "../useContetext"
import { getAllUsers } from "../axios/userAxios"

export const Login = () => {
  let list=useContext(users)
 const [user,setuser]=useState({})
 let navigate=useNavigate()
 const [shownav, setshownav] = useState(false)
 

  
    function check()
     {
        debugger
        let elif=0
    
        if((user.name=="מנהל"||user.name=="meneger")&&user.password=="1234")
        {
         
           navigate('/show')//יתווסף הוספת מתכון בנב
           list.setcuser(user)
        } 
        else if(user.name==null||user.password==null) 
        {
            alert("לא מולאו פרטים")
        }  
        else {
            let y=list.alllist 
            debugger
            for (let i = 0; i < list.alllist.length; i++) {
                if(list.alllist[i].nameUser==user.name&&list.alllist[i].password==user.password)
                   {
                    list.setcuser(user)
                    navigate('/AddRecipe')
                    break
                   }
                   elif++
            }
            if(elif==list.alllist.length)
          {            list.setcuser({})
 
            navigate('/Register')}//אם לא קיים
        }
    }
    return <div className="form-group container">
        <br />
        <br />
        <input className="form-control" type="text" placeholder="הכנס שם" 
        onChange={(e)=>setuser({...user,name:e.target.value})}/>
        <br />
        <input className="form-control" type="password" placeholder="הכנס סיסמה" 
        onChange={(a)=>setuser({...user,password:a.target.value})}/>
        <br />
        <br />
        <button type="button" className="btn btn-outline-dark btn-block" onClick={()=>check()}>התחבר</button>
        <>{shownav &&
alert(user.name+"התחבר")
        }</>
    </div>
}