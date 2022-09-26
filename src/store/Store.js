import { legacy_createStore as createStore } from "redux";
import { userReducer } from "../Reducer/userReducer";

const Store = createStore(userReducer);
export default Store;
