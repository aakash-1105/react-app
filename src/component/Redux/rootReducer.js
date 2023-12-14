import { combineReducers } from "redux";
import reducer from "./AgeReducer/AgeReducer";
import moneyReducer from "./MoneyReducer/MoneyReducer";
import calReducer from "./CalculatorRedux/calReducer";

export const rootReducer = combineReducers({
    yourAge : reducer,
    yourMoney : moneyReducer,
    calculator : calReducer
})