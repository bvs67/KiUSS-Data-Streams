export const GET_SDET_REQUEST = 'GET_SDET_REQUEST';
export const GET_SDET_SUCCESS = 'GET_SDET_SUCCESS';
export const GET_SDET_FAIL = 'GET_SDET_FAIL';

export function getShipDet(id) {
    var myRequest = new Request('/ship_det?id=' + id);
    // console.log(myRequest)
    return dispatch => {
        dispatch(requestShipDet(id));
        return fetch(myRequest)
            .then(response => response.json())
            .then(response => {
                dispatch(requestShipDetSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestShipDetFail(err));
            });
    };
}

function requestShipDet(id) {
    return {
        type: GET_SDET_REQUEST,
        payload: id,
    };
}

function requestShipDetSuccess(sdet) {
    return {
        type: GET_SDET_SUCCESS,
        payload: sdet,
    };
}

function requestShipDetFail(err) {
    return {
        type: GET_SDET_FAIL,
        payload: err
    };
}