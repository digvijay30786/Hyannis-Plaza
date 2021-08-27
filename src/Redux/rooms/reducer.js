import {
    GET_ROOMS_REQUEST,
    GET_ROOMS_SUCCESS,
    GET_ROOMS_FAILURE,
    SET_ISOPEN
} from "./actionTypes"

const initState ={
    rooms: [],
    isLoading:false,
    isError: false,
    isOpen: false
};

const roomsReducer = (state = initState, {type,payload})=>{
    
    switch(type){
        case GET_ROOMS_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            };
        case GET_ROOMS_SUCCESS:
            return {
                ...state,
                rooms:payload,
                isLoading:false
            }
        case GET_ROOMS_FAILURE:
            return {
                ...state,
                isError:true
            }
        case SET_ISOPEN:
            return {
                ...state,
                isOpen: payload
            }
        default:
            return state;
    }
};

export {roomsReducer};