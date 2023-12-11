import { DECRE, INCRE, RESET } from "./constants"

const increment = (count) => {
    return {
        type: INCRE,
        payload: count+1
    }
}
const decrement = (count) => {
    return {
        type: DECRE,
        payload: count-1
    }
}
const reset = (count) => {
    return {
        type: RESET,
        payload: count
    }
}
export { increment,decrement,reset };