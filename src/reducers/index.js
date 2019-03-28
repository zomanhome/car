import { combineReducers } from "redux";

import cars from "./cars";
import info from "./info";

export default combineReducers({
  cars,
  info
});
