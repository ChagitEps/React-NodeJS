import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./Login"
import { Register } from "./Register"
import { AddRecipe } from "./AddRecipe"
import { ShowUser } from "./Show"
import { AllRecipy } from "./AllRecipy"

export const Routing=()=>{
    return <Routes>
             <Route path="/" element={<Home></Home>}></Route>
        <Route path="AddRecipe" element={<AddRecipe></AddRecipe>}></Route>
         <Route path="Register" element={<Register></Register>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="show" element={<ShowUser></ShowUser>}></Route>
        <Route path="allrecipy/:id" element={<AllRecipy></AllRecipy>}></Route>

    </Routes>
} 