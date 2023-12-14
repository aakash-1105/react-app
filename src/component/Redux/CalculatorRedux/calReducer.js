const initialState = {
    calculatedDate : 0
}

const calReducer = (state=initialState , action) =>{
    switch(action.type){
        case "Add":
            return {...state , calculatedDate : state.calculatedDate + action.payload}
        case "Sub":
            return {...state , calculatedDate : state.calculatedDate - action.payload}
        default:
            return state
    }
}
export default calReducer