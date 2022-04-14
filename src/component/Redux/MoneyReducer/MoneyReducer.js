const initialState = {
    money : 0
}

const moneyReducer = (state = initialState , action) => {
    switch(action.type){
        case "ADD_MONEY":
            return {...state , money : state.money + action.payload}
        case "REMOVE_MONEY":
            return {...state , money : state.money - action.payload}
        case "RESET_MONEY":
            return initialState
        default : 
            return state
    }
}

export default moneyReducer