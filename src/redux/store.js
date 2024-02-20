import { createStore } from "redux";
import rootReducers from "./action/reducers";
const store=createStore(rootReducers);
export default store;