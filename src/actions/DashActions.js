export const GET_DASH_REQUEST = 'GET_DASH_REQUEST';
export const GET_DASH_SUCCESS = 'GET_DASH_SUCCESS';
export const GET_DASH_FAIL = 'GET_DASH_FAIL';

export const GET_SDASH_REQUEST = 'GET_SDASH_REQUEST';
export const GET_SDASH_SUCCESS = 'GET_SDASH_SUCCESS';
export const GET_SDASH_FAIL = 'GET_SDASH_FAIL';

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

export function getStrucDash(node) {
    return dispatch => {
        dispatch(requestStrucDash());
        return fetch('/structree')
            .then(response => response.json())
            .then(response => {
                dispatch(requestStrucDashSuccess(response.data, node));
            })
            .catch(err => {
                dispatch(requestStrucDashFail(err));
            });
    };
}

function requestStrucDash() {
    return {
        type: GET_SDASH_REQUEST,
    };
}

function requestStrucDashSuccess(structree, node) {
    let myList = {mas: structree, row: node};
    return {
        type: GET_SDASH_SUCCESS,
        payload: myList,
    };
}

function requestStrucDashFail(err) {
    return {
        type: GET_SDASH_FAIL,
        payload: err
    };
}

