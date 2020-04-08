export const SET_CURRENT_ID = 'SET_CURRENT_ID';
export const SET_CURNODE_ID = 'SET_CURNODE_ID';

export function setCurrentId(id) {
    //console.log('BEGIN_EDIT =', key);
    return dispatch => {
        dispatch({
            type: SET_CURRENT_ID,
            payload: id,
        });
    };
}

export function setCurNodeId(id) {
    //console.log('BEGIN_EDIT =', key);
    return dispatch => {
        dispatch({
            type: SET_CURNODE_ID,
            payload: id,
        });
    };
}
