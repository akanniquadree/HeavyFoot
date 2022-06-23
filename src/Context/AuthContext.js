import { createContext, useReducer} from "react"
import { reducer } from "./AuthReducer"

const INITIAL_STATE = {
     isFetching:false,
     user: null,
     error:false
 }

export const AuthContext = createContext(INITIAL_STATE)


export const UserContext = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    return(
        <AuthContext.Provider value={{isFetching:state.isFetching, user:state.user, error:state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}