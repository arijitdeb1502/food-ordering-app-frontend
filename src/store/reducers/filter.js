import * as actionTypes from '../actions/actionTypes';

const initialState = {
    filterTxt: ''
};


export const setFilterText=(state,action)=>{

    return updateObject( state, { 
        filterTxt: action.filterTxt
     } );
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_FILTER_TEXT: return setFilterText(state,action)
        default:
            return state;
    }
};

export default reducer;