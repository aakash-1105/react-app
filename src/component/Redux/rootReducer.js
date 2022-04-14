import { combineReducers } from "redux";
import reducer from "./AgeReducer/AgeReducer";
import moneyReducer from "./MoneyReducer/MoneyReducer";

export const rootReducer = combineReducers({
    yourAge : reducer,
    yourMoney : moneyReducer
})