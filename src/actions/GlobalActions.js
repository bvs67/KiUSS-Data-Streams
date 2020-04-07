export const SET_CURRENT_ID = 'SET_CURRENT_ID';

export function setCurrentId(id) {
    //console.log('BEGIN_EDIT =', key);
    return dispatch => {
        dispatch({
            type: SET_CURRENT_ID,
            payload: id,
        });
    };
}

