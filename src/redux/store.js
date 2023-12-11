import { createStore } from "redux";
import reduce from "./reducer";
let store=createStore(reduce);
export default store;

