import axios from "axios"
import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS } from "./type"

// user actions
export const useractions = () => async(dispatch)=>{

           
        dispatch({type: GET_USER_REQUEST})
    
        let result = await axios.get("http://localhost:5000/api/v1/auth/users")
        dispatch({type: GET_USER_SUCCESS, payload: result.data})
        console.log("action data ", data)
        
           
        dispatch({type: GET_USER_FAIL, payload: error.data})
        
    }
    
  