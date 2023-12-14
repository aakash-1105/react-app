export const add = (value) => {
    return {
        type : "Add",
        payload : parseInt(value)
    }
}
export const sub = (value) => {
    return {
        type : "Sub",
        payload : parseInt(value)
    }
}