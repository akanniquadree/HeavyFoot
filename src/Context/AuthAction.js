
export const LOGIN_START = (userCredentials) =>({
    type: "LOGIN_START"
})
export const LOGIN_SUCCESS = (user) =>({
    type: "LOGIN_SUCCESS",
    payload:user
})
export const LOGIN_FAILURE = (error) =>({
    type: "LOGIN_FAILURE",
    payload:error
})

export const ADMIN_LOGIN_START =(userCredentials)=> ({
    type:"ADMIN_LOGIN_START"
})
export const ADMIN_LOGIN_SUCCESS =(admin)=> ({
    type:"ADMIN_LOGIN_SUCCESS",
    payload:admin
})
export const ADMIN_LOGIN_FAILURE =(adminerror)=> ({
    type:"ADMIN_LOGIN_FAILURE",
    payload:adminerror
})