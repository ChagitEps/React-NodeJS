import { useContext, useEffect, useState } from "react"
import users from "../useContetext"
import { getAllUsers } from "../axios/userAxios"

export const ShowUser=()=>{
    const [list,setlist]=useState(useContext(users).alllist) 
    useEffect(()=>{
        async function l(){
            const res=await getAllUsers()
            setlist(res.data)
        }
        l()
    },[])

   return <div className="container">
    <table className="table">
         <thead>
             <th>שם</th>
             <th>קוד</th>
          </thead>
          <tbody>
         {list.map((x,i)=>(
             <tr key={i}>
                 <td>{x.nameUser}</td>
                 <td>{x.password}</td>
                 
             </tr>
         ))}
         </tbody>
     </table>
   </div>
}