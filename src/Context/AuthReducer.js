

export const reducer = (state, action) =>{
    switch (action.type) {
        case "LOGIN_START":
            return {
                isFetching:true,
                user:null,
                admin: null,
                error:null
            };
        case "LOGIN_SUCCESS":
            return {
                isFetching:false,
                user:action.payload,
                admin: null,
                error:false
            };
        case "LOGIN_FAILURE":
            return {
                isFetching:false,
                user:null,
                admin: null,
                error:action.payload
            }
            
    
        default:
            return state;
    }
}
export const adminReducer = (adminstate, action) =>{
    switch (action.type) {
        case "ADMIN_LOGIN_START":
            return {
                adminisFetching:true,
                admin: null,
                adminerror:null
            };
        case "ADMIN_LOGIN_SUCCESS":
            return {
                adminisFetching:false,
                admin:action.payload,
                adminerror:false
            };
        case "ADMIN_LOGIN_FAILURE":
            return {
                adminisFetching:false,
                admin:null,
                adminerror:action.payload
            }
            
    
        default:
            return adminstate;
    }
}