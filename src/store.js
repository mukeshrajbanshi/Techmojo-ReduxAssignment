import {combineReducers} from "redux"
import {createStore} from "redux"
import {Reducers} from "./reducersComponent/Reducers"
const rootReducer = combineReducers({
   shop: Reducers,
});


const store=createStore(rootReducer)
export default store

