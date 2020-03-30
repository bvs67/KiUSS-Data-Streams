export const GET_HIST_REQUEST = 'GET_HIST_REQUEST';
export const GET_HIST_SUCCESS = 'GET_HIST_SUCCESS';
export const GET_HIST_FAIL = 'GET_HIST_FAIL';
export const TOGGLE_HIST_MODE = 'TOGGLE_HIST_MODE';
export const GET_HCOM_REQUEST = 'GET_HCOM_REQUEST';
export const GET_HCOM_SUCCESS = 'GET_HCOM_SUCCESS';
export const GET_HCOM_FAIL = 'GET_HCOM_FAIL';
export const BEGIN_EDHIST_MODE = 'BEGIN_EDHIST_MODE';
export const CANCEL_EDHIST_MODE = 'CANCEL_EDHIST_MODE';
export const SVED_HIST_REQUEST = 'SVED_HIST_REQUEST';
export const SVED_HIST_SUCCESS = 'SVED_HIST_SUCCESS';
export const SVED_HIST_FAIL = 'SVED_HIST_FAIL';
export const DEL_HIST_REQUEST = 'DEL_HIST_REQUEST';
export const DEL_HIST_SUCCESS = 'DEL_HIST_SUCCESS';
export const DEL_HIST_FAIL = 'DEL_HIST_FAIL';
export const ADD_HIST_REQUEST = 'ADD_HIST_REQUEST';
export const ADD_HIST_SUCCESS = 'ADD_HIST_SUCCESS';
export const ADD_HIST_FAIL = 'ADD_HIST_FAIL';

export function toggleHistMode(mode) {
    console.log(mode)
    return dispatch => {
        dispatch({
            type: TOGGLE_HIST_MODE,
            payload: mode,
        });
    };
}

export function histReload(id) {
    return async dispatch => {
        await dispatch(getHistory(id));
        await dispatch(loadHCOM());
    };
}

export function getHistory(id) {
    var myRequest = new Request('/history?id=' + id);
    // console.log(myRequest)
    return dispatch => {
        dispatch(requestHistory(id));
        return fetch(myRequest)
            .then(response => response.json())
            .then(response => {
                dispatch(requestHistorySuccess(response.data));
            })
            .catch(err => {
                dispatch(requestHistoryFail(err));
            });
    };
}

// Где requestUsers, requestUsersSuccess, requestUsersFail - функции action creators

function requestHistory(id) {
    return {
        type: GET_HIST_REQUEST,
        payload: id,
    };
}

function requestHistorySuccess(history) {
     // var myList = []
     // for (var i = 0; i < history.length; i++) {
     //     var listItem = []
     //     listItem[0]=history[i].id
     //     listItem[1]=history[i].h_beg
     //     listItem[2]=history[i].h_end
     //     listItem[3]=history[i].h_comment
     //     myList[i] = listItem
     // }
    return {
        type: GET_HIST_SUCCESS,
        payload: history,
        // payload: myList,
    };
}

function requestHistoryFail(err) {
    return {
        type: GET_HIST_FAIL,
        payload: err
    };
}

export function loadHCOM() {
    return dispatch => {
        dispatch(requestHCOM());
        return fetch('/hcomment')
            .then(response => response.json())
            .then(response => {
                dispatch(requestHCOMSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestHCOMFail(err));
            });
    };
}

function requestHCOM() {
    return {
        type: GET_HCOM_REQUEST,
    };
}

function requestHCOMSuccess(HCOMData) {
    // var myList = [];
    // for (var i = 0; i < HCOMData.length; i++) {
    //     var listItem = [];
    //     listItem[0] = HCOMData[i].num;
    //     listItem[1] = HCOMData[i].h_comment;
    //     myList[i] = listItem;
    // }
    return {
        type: GET_HCOM_SUCCESS,
        payload: HCOMData,
        // payload: myList,
    };
}

function requestHCOMFail(err) {
    return {
        type: GET_HCOM_FAIL,
        payload: err,
    };
}

export function toggleHistEdit(key) {
    console.log('BEGIN_EDHIST =', key);
    return dispatch => {
        dispatch({
            type: BEGIN_EDHIST_MODE,
            payload: key,
        });
    };
}

export function cancelHistEdit(key) {
    console.log('CANCEL_EDHIST =', key);
    return dispatch => {
        dispatch({
            type: CANCEL_EDHIST_MODE,
            payload: key,
        });
    };
  }

export function savedHist(obj, h_beg, h_end, id) {
    console.log('savedHist?h_beg=' + h_beg + ', h_end=' + h_end + ', id=' + id);
    var myRequest = new Request('/savedHist?h_beg=' + h_beg + '&h_end=' + h_end + '&id=' + id);
    //fetch(myRequest)
    //.catch(err => console.log(err));

    return dispatch => {
        dispatch(requestSvedHist());
        return (
            fetch(myRequest)
                //.then(response => response.json())
                // .then(() => { dispatch(requestSvedObjSuccess()); })
                .then(() => {
                    dispatch(requestSvedHistSuccess());
                    dispatch(getHistory(obj));
                })
                .catch(err => {
                    dispatch(requestSvedHistFail(err));
                })
        );
    };
}

function requestSvedHist() {
    return {
        type: SVED_HIST_REQUEST,
    };
}

function requestSvedHistSuccess() {
    return {
        type: SVED_HIST_SUCCESS,
    };
}

function requestSvedHistFail(err) {
    return {
        type: SVED_HIST_FAIL,
        payload: err,
    };
}

export function deleteHist(obj, id) {
    //console.log('id = ',id)
    var myRequest = new Request('/delHist?id=' + id);
    //fetch(myRequest)
    //.then(function(response) { return response.json(); })
    //.catch(err => console.log(err));

    return dispatch => {
        dispatch(requestDelHist());
        return (
            fetch(myRequest)
                //.then(response => response.json())
                //.then(() => { requestDelObjSuccess()); })
                .then(() => {
                    dispatch(requestDelHistSuccess());
                    dispatch(getHistory(obj));
                })
                .catch(err => {
                    dispatch(requestDelHistFail(err));
                })
        );
    };
}

function requestDelHist() {
    return {
        type: DEL_HIST_REQUEST,
    };
}

function requestDelHistSuccess() {
    return {
        type: DEL_HIST_SUCCESS,
    };
}

function requestDelHistFail(err) {
    return {
        type: DEL_HIST_FAIL,
        payload: err,
    };
}

export function addHist(obj, h_beg, h_com, id_prev) {
    console.log('obj=' + obj + ', h_beg=' + h_beg + ', h_com=' + h_com + ', id_prev=' + id_prev);
    var myRequest = new Request('/addHist?obj=' + obj + '&h_beg=' + h_beg + '&h_com=' + h_com + '&id_prev=' + id_prev);
    //fetch(myRequest)
    //.then(function(response) { return response.json(); })
    //.catch(err => console.log(err));

    return dispatch => {
        dispatch(requestAddHist());
        return (
            fetch(myRequest)
                //.then(response => response.json())
                //.then(response => { dispatch(requestAddObjSuccess(response.data)); })
                .then(() => {
                    dispatch(requestAddHistSuccess());
                    dispatch(getHistory(obj));
                })
                .catch(err => {
                    dispatch(requestAddHistFail(err));
                })
        );
    };
}

function requestAddHist() {
    return {
        type: ADD_HIST_REQUEST,
    };
}

function requestAddHistSuccess() {
    return {
        type: ADD_HIST_SUCCESS,
    };
}

function requestAddHistFail(err) {
    return {
        type: ADD_HIST_FAIL,
        payload: err,
    };
}
