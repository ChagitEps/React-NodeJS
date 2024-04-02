import { BrowserRouter } from "react-router-dom"
import { Routing } from "./routing"
import { Link } from "react-router-dom"
import { useContext } from "react"
import users from "../useContetext"

export const Menu=()=>{
const c=useContext(users).cuser

    return <nav className="navbar navbar-inverse">
    <div className="container-fluid">
    <div className="navbar-header">
      <div className="navbar-brand" >Delishes</div>
    </div>
        <ul className="nav navbar-nav">
            
          <li className="dropdown">
            <Link to="Register">הרשמה</Link>
          </li>
          <li className="dropdown">
            <Link to="login">התחברות</Link>
          </li>
          <li className="dropdown">
            <Link to="home">דף הבית</Link>
          </li>
          {c.name&&<li className="dropdown">
            <Link to="AddRecipe">הוספת מתכון </Link>
          </li>}
        {c.name=="מנהל" &&<li className="dropdown">
          <Link to="show"> רשימת משתמשים </Link>
        </li>}
        </ul>
      </div>
   
  </nav>
  
 
}