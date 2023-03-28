import axios from "axios";
import { GETAPI } from "../constant"

export const apigetaction = () => {
    return ( async (dispatch) => {

        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/items`)
        console.log(response.data);
        return dispatch({
            type : GETAPI,
            payload : response.data,
        })
    })
}