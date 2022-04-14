const initialState = {
    age : 0
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case "AGE_UP":
            return {...state , age : state.age + action.payload}
        case "AGE_DOWN":
            return {...state , age : state.age - action.payload}
        case "RESET_AGE":
            return initialState
        default:
            return state
    }
}

export default reducer