export const GET_COMP_REQUEST = 'GET_COMP_REQUEST';
export const GET_COMP_SUCCESS = 'GET_COMP_SUCCESS';
export const GET_COMP_FAIL = 'GET_COMP_FAIL';
export const SET_CURRENT_COMP = 'SET_CURRENT_COMP';

export function compReload(id) {
    return async dispatch => {
        await dispatch(getComplect(id));
        // await dispatch(loadHCOM());
    };
}

export function getComplect(id) {
    var myRequest = new Request('/comp1?id=' + id);
    // console.log(myRequest)
    return dispatch => {
        dispatch(requestComp(id));
        return fetch(myRequest)
            .then(response => response.json())
            .then(response => {
                dispatch(requestCompSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestCompFail(err));
            });
    };
}
    
function requestComp(id) {
    return {
        type: GET_COMP_REQUEST,
        payload: id,
    };
}
    
function requestCompSuccess(comp) {
    return {
        type: GET_COMP_SUCCESS,
        payload: comp,
    };
}
    
function requestCompFail(err) {
    return {
        type: GET_COMP_FAIL,
        payload: err
    };
}
    
export function setComplect(comp) {
    return async dispatch => {
        await dispatch(setCurrentComp(comp));
        // await dispatch(getHistory(id));
    };
}

export function setCurrentComp(comp) {
    return dispatch => {
        dispatch({
            type: SET_CURRENT_COMP,
            payload: comp,
        });
    };
}