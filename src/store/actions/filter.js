import * as actionTypes from './actionTypes';

export const filterStrChange = (text) => {
    return {
        type: actionTypes.SET_FILTER_TEXT,
        filterTxt: text
    };
};
