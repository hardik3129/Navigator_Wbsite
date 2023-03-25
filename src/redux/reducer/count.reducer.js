import { DICREMENT, INCREMENT } from '../constant'

const initialstate = {
    count : 0
}

const countreducer = (state = initialstate, action) => {

    if (action.type === INCREMENT) {
        return { ...state, count : action.payload + 1}
    }
    if (action.type === DICREMENT) {
        return { ...state, count : action.payload - 1}
    }
    return state
}

export default countreducer
