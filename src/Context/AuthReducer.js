import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "./AuthAction";


export const reducer = (state, action) =>{
    switch (action.type) {
        case LOGIN_START:
            return {
                isFetching:true,
                user:null,
                error:null
            };
        case LOGIN_SUCCESS:
            return {
                isFetching:false,
                user:action.payload,
                error:false
            };
        case LOGIN_FAILURE:
            return {
                isFetching:false,
                user:null,
                error:action.payload
            }
            
    
        default:
            return state;
    }
}