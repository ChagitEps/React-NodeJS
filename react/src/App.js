import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './componens/routing';
import { Menu } from './componens/menu';
import { Providers } from './useContetext';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { getAllUsers } from './axios/userAxios';

function App() {
  const[list,setlist]=useState([
    // {name:"chagit",password:"8688"},
    // {name:"ariel",password:"5432"},
    // {name:"shira",password:"7001"},
    // {name:"yair",password:"9876"},
    // {name:"gital",password:"8765"},
    // {name:"michal",password:"4567"},
    // {name:"tamar",password:"6789"},
    // {name:"chagit",password:"4321"},
 ])
 useEffect(()=>{
  async function l(){
      const res=await getAllUsers()
      setlist(res.data)
  }
  l()
},[])
 const [cuser,setcuser]=useState({})
 const add=(person,e)=>{
  // e.preventdefult()
  setlist(x=>x.concat(person))
 }
 const transfer={
  alllist:list,
  onAdd:add,
  cuser:cuser,
  setcuser:(val)=>{setcuser(val)},
  setlist:(list)=>{setlist(list)}
 }
  return ( <div className="App">
       <Provider store={store}>
      <Providers value={transfer}>
      <BrowserRouter>
      <Menu></Menu>
      <Routing></Routing>
      </BrowserRouter>
      </Providers>
      </Provider>
    </div>
  );
}

export default App;
