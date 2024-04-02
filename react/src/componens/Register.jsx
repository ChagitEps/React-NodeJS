import { useContext } from "react"

import users from "../useContetext"
 import { useNavigate } from "react-router-dom"
import { Adduser } from "../axios/userAxios.jsx"

export const Register=()=>{
    const add=useContext(users).setlist
     const navigate=useNavigate()
    const saveuser=async()=>{
        let e={nameUser:document.getElementById("myName").value,password:document.getElementById("password").value,phon:document.getElementById("myPhon").value}
       let addoneuser=await Adduser(e)
       alert("נוסף בהצלחה")
      add(addoneuser.data)
    }
    //שליחת הנתונים לרידקס
  

    return <div className="form-group container">
        <h4>הוספת משתמש חדש</h4>
        <br />
        <input className="form-control" type="text" id="myName" placeholder="הכנס שם"/>
        <br />
        <input className="form-control" type="password" id="password" placeholder="הכנס קוד"/>
        <br />
        <input className="form-control" type="tel" id="myPhon" pattern="[0-9]{10}" placeholder=" הכנס טלפון"/>
        <br />
        <button type="button" className="btn btn-outline-dark btn-block" onClick={(e)=>{
            //   add({name:document.getElementById("myName").value,password:document.getElementById("password").value},e)
              saveuser()}
      }>אישור</button>
    
    </div>
}