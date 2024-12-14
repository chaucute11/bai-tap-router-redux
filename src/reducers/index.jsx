import { combineReducers } from "redux";
import { cartReducer } from "../reducers/cartReducer";
export const allReducers = combineReducers({
  cartReducer,
}
)