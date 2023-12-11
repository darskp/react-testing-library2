import { DECRE, INCRE, RESET } from "./constants";

let i = {
    count: 0
}
function reduce(state = i, action) {
    switch (action.type) {
        case INCRE: return ({ ...state, count: action.payload })
        case DECRE: return state.count === 0
        ? { ...state, count: 0 }
        : { ...state, count: action.payload };
        case RESET:return {...state,count:0}
        default: return { ...state }
    }
}
export default reduce;