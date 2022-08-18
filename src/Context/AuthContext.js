import { createContext, useReducer} from "react"
import { adminReducer, reducer } from "./AuthReducer"

const INITIAL_STATE = {
     isFetching:false,
     user: null,
     error:false,
 }
const ADMIN_INITIAL_STATE = {
     adminisFetching:false,
     admin:null,
     adminerror:false,
 }

export const AuthContext = createContext(INITIAL_STATE)


export const UserContext = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const [adminstate, admindispatch] = useReducer(adminReducer, ADMIN_INITIAL_STATE)
    return(
        <AuthContext.Provider value={{
            isFetching:state.isFetching,
            adminisFetching:adminstate.adminisFetching,
             user:state.user,
             admin:adminstate.admin, 
             adminerror:adminstate.adminerror, 
             error:state.error, 
             admindispatch,
             dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}