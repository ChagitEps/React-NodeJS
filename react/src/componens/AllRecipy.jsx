import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { GetByIdRecipy } from "../axios/recipyAxios"

export const AllRecipy = () => {
    const [recepy, setrecepy] = useState({ingrediens:[]})
    const params = useParams()

    useEffect(() => {
        async function loud() {
            const recepy = await GetByIdRecipy(params.id)
            setrecepy(recepy.data[0])
        }
        loud()
    }, [])
    
    return <>
    
        <h1>{recepy.name}</h1>
      <img src={`http://localhost:8688/pic/${recepy.img}`} height={350} width={300}></img>
      
       <label>:העוגה היא</label><p>{recepy.type}</p>
      <label>:דרגת קושי</label> <p>{recepy.level}</p>
      <label>: זמן הכנה</label> <p>{recepy.time}</p>
       {/* <p>:המתכון הודות ל</p> 
       <p>{recepy.code}</p>  */}

       {/* לא עובד הצגת המוצרים */}
       <div className="container">
    <table className="table">
         <thead>
             <th>שם</th>
             <th>כמות</th>
          </thead>
          <tbody>
        <p>{recepy.ingrediens.map((x,i)=>(
             <tr key={i}>
                 <td>{x.name}</td>
                 <td>{x.amout}</td>
             </tr>
         ))}</p>  
               </tbody>
     </table>
   </div>
    </>

}