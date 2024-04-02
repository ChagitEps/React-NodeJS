import axios from 'axios'

const url='http://localhost:8688/Recipy/'
//פונקציה שניגשת לשרת לשליפת כל המוצרים
export const GetAllRecipy=()=>{
    return axios.get(`${url}GetAllRecipy`)
}
export const GetByIdRecipy=(id)=>{
    return axios.get(`${url}GetRecipyPass/${id}`)
}
export const AddRecipy=(object)=>{
    return axios.post(`${url}addRecipy`,object)
    }