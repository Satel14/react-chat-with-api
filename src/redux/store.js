import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "../redux/reducers/dialogReducer";
import thunkMiddleWare from 'redux-thunk';
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";




const reducers = combineReducers({
    dialogs: dialogsReducer,
    users: usersReducer,
    auth: authReducer
});

export const store  = createStore(reducers, applyMiddleware(thunkMiddleWare));