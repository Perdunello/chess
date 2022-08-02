import {combineReducers, createStore} from "redux";
import chessBoardReducer from "./ChessBoardReducer";

const reducers = combineReducers({
    board: chessBoardReducer
})
const store = createStore(reducers)

window.store = store
export default store