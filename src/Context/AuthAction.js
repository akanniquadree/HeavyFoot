
export const LOGIN_START = (userCredentials) =>({
    type: LOGIN_START
})
export const LOGIN_SUCCESS = (user) =>({
    type: LOGIN_START,
    payload:user
})
export const LOGIN_FAILURE = (error) =>({
    type: LOGIN_START,
    payload:error
})