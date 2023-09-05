
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers";

const reducer = combineReducers({
    userlist:userReducer
})


const initialState = {}

const middleware = [thunk];

const store = createStore(    
    reducer,
    initialState,
    composeWithDevTools(
    applyMiddleware(...middleware)
      
    )
);

export default store;





