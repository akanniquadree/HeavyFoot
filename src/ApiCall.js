import axios from "axios"



export const register = async(cred, dispatch) =>{
    try {
        dispatch({type:"LOGIN_START"})
        const {data} = await axios.post("https://ecommerces-api.herokuapp.com/api/v1/public/register", cred)
        if(data){
            window.location.replace("/")
            dispatch({type:"LOGIN_SUCCESS", payload:data.user})
            localStorage.setItem("user", JSON.stringify(data.user))
            localStorage.setItem("token", data.token)
        }
    } catch (error) {
        console.log(error)
        dispatch({type:"LOGIN_FAILURE", payload:error})
    }
}


export const Login = async(cred, dispatch) =>{
    try {
        dispatch({type:"LOGIN_START"})
        const {data} = await axios.post("https://ecommerces-api.herokuapp.com/api/v1/public/login", cred)
        if(data){
            window.location.replace("/")
            dispatch({type:"LOGIN_SUCCESS", payload:data.user})
            localStorage.setItem("user", JSON.stringify(data.user))
            localStorage.setItem("token", data.token)
        }
    } catch (error) {
        console.log(error.response.data.message)
        dispatch({type:"LOGIN_FAILURE", payload:error.response.data.message})
    }
}

export const Admin = async(cred, admindispatch, setMessage) =>{
        admindispatch({type:"ADMIN_LOGIN_START"})
    try {
        
        const {data} = await axios.post("https://ecommerces-api.herokuapp.com/api/v1/boss/login", cred)
        if(data){
            window.location.replace("/admin")
            admindispatch({type:"ADMIN_LOGIN_SUCCESS", payload:data.admin})
            localStorage.setItem("boss", JSON.stringify(data.admin))
            localStorage.setItem("admintoken", data.token)
            setMessage(data.message)
        }
    } catch (error) {
        
        admindispatch({type:"ADMIN_LOGIN_FAILURE", payload:error.response.data.message})
        console.log(error)
    }
}

