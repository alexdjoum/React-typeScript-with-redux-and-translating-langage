import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import MembersReducer from "./membersReducer";
//import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allUsers: UserReducer,
    members: MembersReducer
    //allProducts: productReducer,


});

export default reducers;