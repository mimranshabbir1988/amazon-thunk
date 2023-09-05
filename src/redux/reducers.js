
//creating reducer for user data

import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS } from "./type"

// const initialState = {
//     users: []
// }

export const userReducer = (state = {users:[]}, action) =>{


    switch(action.type){
        
        case GET_USER_REQUEST:
            return {loading: true, users:[]}
        
        case GET_USER_SUCCESS:
            console.log("data in reducers _____ ", action.payload)
            return {loading: false, users: action.payload}

        case GET_USER_FAIL:
            return {loading: false, error: action.payload}
        
        default: 
            return state;
        
    }
}