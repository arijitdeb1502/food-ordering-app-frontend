import * as actionTypes from './actionTypes';

export const filterStrChange = (text) => {
    console.log("SET_FILTER_TEXT: "+text);
    return {
        type: actionTypes.SET_FILTER_TEXT,
        filterTxt: text
    };
};
