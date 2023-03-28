import { GETAPI } from "../constant"

const initialstate = {
    apidata : []
}

const apigetreducer = (state = initialstate, action) => {

    if (action.type === GETAPI) {
        console.log(action);
        return { ...state, apidata : action.payload }
    }
    
  return state
}

export default apigetreducer