import { DICREMENT, INCREMENT } from "../constant"

export const countPlushaction = (count) => {
    return {
        type : INCREMENT,
        payload : count
    }
}

export const countMinushaction = (count) => {
    return {
        type : DICREMENT,
        payload : count
    }
}