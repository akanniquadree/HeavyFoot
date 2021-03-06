import axios from "axios"
import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "./Context/AuthAction"



export const register = async(cred, dispatch) =>{
    try {
        dispatch({type:LOGIN_START})
        const {data} = await axios.post("https://ecommerces-api.herokuapp.com/api/register", cred)
        if(data){
            window.location.replace("/")
            dispatch({type:LOGIN_SUCCESS, payload:data.user})
            localStorage.setItem("user", JSON.stringify(data.user))
            localStorage.setItem("token", JSON.stringify(data.token))
        }
    } catch (error) {
        console.log(error)
        dispatch({type:LOGIN_FAILURE, payload:error})
    }
}


export const Login = async(cred, dispatch) =>{
    try {
        dispatch({type:LOGIN_START})
        const {data} = await axios.post("https://ecommerces-api.herokuapp.com/api/login", cred)
        if(data){
            // window.location.replace("/")
            dispatch({type:LOGIN_SUCCESS, payload:data.user})
            localStorage.setItem("user", JSON.stringify(data.user))
            localStorage.setItem("token", JSON.stringify(data.token))
        }
    } catch (error) {
        console.log(error.response.data.message)
        dispatch({type:LOGIN_FAILURE, payload:error.response.data.message})
    }
}

