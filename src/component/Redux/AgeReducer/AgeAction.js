import axios from "axios"

export const ageUp = () => {
    return {
        type : "AGE_UP",
        payload : 1
    }
}

export const ageDown = () => {
    return {
        type : "AGE_DOWN",
        payload : 1
    }
}


export const resetAge = () => {
    return async(dispatch) => {
        await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch({
            type : "RESET_AGE"
        })
    }
}