export const addMoney = () => {
    return {
        type : "ADD_MONEY",
        payload : 1000
    }
}

export const removeMoney = () => {
    return{
        type : "REMOVE_MONEY",
        payload : 1000
    }
}

export const resetMoney = () => {
    return{
        type : "RESET_MONEY",
    }
}