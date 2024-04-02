import axios from "axios"


const url='http://localhost:8688/User/'

export const getAllUsers=()=>{
    return axios.get(`${url}GetAllUsers`)
     
    } 

export const Adduser=async(object)=>{
    const d=await axios.post(`${url}`,object)
    return d
    }