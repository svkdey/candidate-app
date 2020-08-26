import { GET_APPLICATIONS, ADD_APPLICATION, ERROR, SET_LOADING, CLEAR_CURRENT } from '../actions/types';
const initialState = {
    applications: [],
    current: null,
    loading: true,
    error: null,
    isFromSubmissionSuccess: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state, loading: true
            }
        case ERROR:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
            }
        case GET_APPLICATIONS:
            console.log(action.payload)
            return {
                ...state,
                applications: action.payload,
                loading: false,
            }
        case ADD_APPLICATION:
            console.log(action.payload)
            if (action.payload.data === 'success') {
                return {
                    ...state,
                    applications: [...state.applications, action.payload.dataSent],
                    loading: false,
                    isFromSubmissionSuccess: true
                }
            } else {
                return {
                    ...state,
                    loading: false
                }
            }


        // case SET_CURRENT:
        //     return {
        //         ...state,
        //         current:action.payload
        //     }

        // case CLEAR_CURRENT:
        //     return {
        //         ...state,
        //         current:null
        //     }

        default:
            return state;
    }
}