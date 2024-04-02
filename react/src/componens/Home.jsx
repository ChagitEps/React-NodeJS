import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetAllRecipy } from "../axios/recipyAxios"
import { FillAllrecipy } from "../Redux/action"
import {useNavigate} from 'react-router-dom'

export const Home=()=>{

    const [arr,setarr]=useState(useSelector(i=>i.listRecipy))     
    let d=useDispatch() 
    const navigate=useNavigate()
    useEffect(()=>{
async function loud(){
if(arr.length==0)
{
  let res=await GetAllRecipy()
  setarr(res.data)
  d(FillAllrecipy(res.data))
}
}
loud()
   },[]) 
   
 return  <div className=" d-flex justify-content-center bg-secondary mb-3">
 
 {
   arr.map(o=><div className="card img-fluid shadow p-4 mb-4 bg-white" width={400} >
     <img className="card-img-bottom" src={`http://localhost:8688/pic/${o.img}` }  height={200} width={200}></img>  
 <div className="card-img-overlay">
   <h4 className="card-title">{o.name}</h4>
    <button onClick={()=>{navigate(`../allrecipy/${o._id}`)}}>פרטים נוספים</button>
  <br></br><br></br><br></br> </div></div>)
 }
 </div>


 


// <div>
//     <h2>רשימת מתכונים</h2>
//    <table className="table table-dark table-hover">
//     <thead>
//       <tr>
//         <th>שם המתכון</th>
//         <th>תמונה</th>
//       </tr>
//     </thead>
//     <tbody>
//   {
//   arr.map(o=><tr>
//     <td>{o.name}</td>
//     <td><img src={`http://localhost:8688/pic/${o.img}`} height={50} width={40}></img></td>
//     <td><button onClick={()=>{navigate(`../allrecipy/${o._id}`)}}>פרטים נוספים</button></td>
//   </tr>)
//   }
//     </tbody>
//   </table>

// </div>

}