import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk"


let reducers = combineReducers({
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));


window.store55 = store

export default store