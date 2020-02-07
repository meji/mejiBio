import * as ActionTypes from './ActionTypes';
export const Bio = (state = {
    errMess:null,
    isLoading: true,
    bio: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_BIO:
            return{...state, isLoading:false, errMess: null, bio: action.payload}
        case ActionTypes.BIO_LOADING:
            return{...state, isLoading:true, errMess: null, bio: []}
        case ActionTypes.BIO_FAILED:
            return{...state, isLoading:false, errMess: action.payload, bio: []}
        default:
            return state;
    }
}
