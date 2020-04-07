export const GET_DASH_REQUEST = 'GET_DASH_REQUEST';
export const GET_DASH_SUCCESS = 'GET_DASH_SUCCESS';
export const GET_DASH_FAIL = 'GET_DASH_FAIL';

export function loadDASH(id) {
    return dispatch => {
        dispatch(requestDASH());
        return fetch('/obj')
            .then(response => response.json())
            .then(response => {
                dispatch(requestDASHSuccess(response.data, id));
            })
            .catch(err => {
                dispatch(requestDASHFail(err));
            });
    };
}

function requestDASH() {
    return {
        type: GET_DASH_REQUEST,
    };
}

function requestDASHSuccess(objData, id) {
    let myList = {mas: objData, row:id};
    // for (var i = 0; i < objData.length; i++) {
    //     var listItem = [];
    //     listItem[0] = objData[i].id;
    //     listItem[1] = objData[i].NameMS;
    //     listItem[2] = objData[i].NameKT;
    //     myList[i] = listItem;
    // }
    // var id = myList[0][0];
    return {
        type: GET_DASH_SUCCESS,
        payload: myList,
        // payload: myList,
        // curload: id,
    };
}

function requestDASHFail(err) {
    return {
        type: GET_DASH_FAIL,
        payload: err,
    };
}

