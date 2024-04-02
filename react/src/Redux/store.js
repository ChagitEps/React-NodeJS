import { createStore } from 'redux' 
import produce from 'immer' 
//הסטיט הגלובלי שיהיה מוכר בכל הקומפוננטות 
const Mystate = { 
    //רשימה 
 listRecipy:[],
// curentUser:{name:"עוד לא התחברת",password:""}
//   listUser:[]
} 
const reducer = produce( 
 (state, action) => { 
 switch (action.type) { 
   
    case  'ADD-RECIPY-TO-LIST':
    {
 
      state.listRecipy.push(action.payload)
   break;}
    case 'FILL-ALL-RECIPY':{
  
      state.listRecipy=action.payload
 
      break;}
 } 
 }, Mystate) 

const store = createStore( reducer); 
 //יצירת מחסן הנתונים
window.store = store; 
export default store; 