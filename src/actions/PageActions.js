export const GET_OBJ_REQUEST = 'GET_OBJ_REQUEST';
export const GET_OBJ_SUCCESS = 'GET_OBJ_SUCCESS';
export const GET_OBJ_FAIL = 'GET_OBJ_FAIL';

export function loadOBJ() {
    return dispatch => {
        dispatch(requestObj());
        return fetch('/obj')
            .then(response => response.json())
            .then(response => {
                dispatch(requestObjSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestObjFail(err));
            });
    };
}

function requestObj() {
    return {
        type: GET_OBJ_REQUEST,
    };
}

function requestObjSuccess(objData) {
    // var myList = [];
    // for (var i = 0; i < objData.length; i++) {
    //     var listItem = [];
    //     listItem[0] = objData[i].id;
    //     listItem[1] = objData[i].NameMS;
    //     listItem[2] = objData[i].NameKT;
    //     myList[i] = listItem;
    // }
    // var id = myList[0][0];
    return {
        type: GET_OBJ_SUCCESS,
        payload: objData,
        // payload: myList,
        // curload: id,
    };
}

function requestObjFail(err) {
    return {
        type: GET_OBJ_FAIL,
        payload: err,
    };
}

