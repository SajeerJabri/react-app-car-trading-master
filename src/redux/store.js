import { createStore, applyMiddleware } from "redux";
import Redcuer from "./Reducer";
import thunk from "redux-thunk";

const store = createStore(Redcuer, applyMiddleware(thunk));

export default store;
