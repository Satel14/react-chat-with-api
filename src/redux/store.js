import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "../redux/reducers/dialogReducer";
import thunkMiddleWare from 'redux-thunk';
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import storage from 'redux-persist/lib/storage' 
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
  }

const reducers = combineReducers({
    dialogs: dialogsReducer,
    users: usersReducer,
    auth: authReducer
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store  = createStore(persistedReducer, applyMiddleware(thunkMiddleWare));
export const persist = persistStore(store)