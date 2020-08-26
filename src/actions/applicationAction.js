import { GET_APPLICATIONS, ADD_APPLICATION, ERROR, SET_LOADING, CLEAR_CURRENT } from './types';
import axios from 'axios';
export const getApplcations = () => {
    return async (dispatch) => {
        setLoading();
        try {

            const res = await axios.get('https://cors-anywhere.herokuapp.com/https://candidate-app-telstra.herokuapp.com/api/get-applications', {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            dispatch({
                type: GET_APPLICATIONS,
                payload: res.data
            })

        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }

    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const clearCurrent = (application) => {
    return {
        type: CLEAR_CURRENT,
    }
}

export const addApplication = (application) => {
    return async (dispatch) => {
        try {
            setLoading();
            const res = await axios.post('https://cors-anywhere.herokuapp.com/https://candidate-app-telstra.herokuapp.com/api/post-applications', application, {
                headers: {
                    'Content-Type': "application/json",
                }
            });
            console.log(res);
            dispatch({
                type: ADD_APPLICATION,
                payload: { ...res, dataSent: application }
            })

        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        }

    }
}
