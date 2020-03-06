import { getHistory } from './HistoryActions';

export const GET_OBJ_REQUEST = 'GET_OBJ_REQUEST';
export const GET_OBJ_SUCCESS = 'GET_OBJ_SUCCESS';
export const GET_OBJ_FAIL = 'GET_OBJ_FAIL';
export const DEL_OBJ_REQUEST = 'DEL_OBJ_REQUEST';
export const DEL_OBJ_SUCCESS = 'DEL_OBJ_SUCCESS';
export const DEL_OBJ_FAIL = 'DEL_OBJ_FAIL';
export const TOGGLE_ADD_MODE = 'TOGGLE_ADD_MODE';
export const BEGIN_EDIT_MODE = 'BEGIN_EDIT_MODE';
export const CANCEL_EDIT_MODE = 'CANCEL_EDIT_MODE';
export const SVED_OBJ_REQUEST = 'SVED_OBJ_REQUEST';
export const SVED_OBJ_SUCCESS = 'SVED_OBJ_SUCCESS';
export const SVED_OBJ_FAIL = 'SVED_OBJ_FAIL';
export const ADD_OBJ_REQUEST = 'ADD_OBJ_REQUEST';
export const ADD_OBJ_SUCCESS = 'ADD_OBJ_SUCCESS';
export const ADD_OBJ_FAIL = 'ADD_OBJ_FAIL';
export const GET_GRCOMP_REQUEST = 'GET_GRCOMP_REQUEST';
export const GET_GRCOMP_SUCCESS = 'GET_GRCOMP_SUCCESS';
export const GET_GRCOMP_FAIL = 'GET_GRCOMP_FAIL';
export const SET_CURRENT_ROW = 'SET_CURRENT_ROW';

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

export function saveAndReload() {
    return async dispatch => {
        await dispatch(loadOBJ());
        await dispatch(loadGRCOMP());
        // var id = this.props.OBJArray[0][0];
        // console.log(id);
        // this.props.setHistory(id);
    };
}

export function setHistory(id) {
    return async dispatch => {
        await dispatch(setCurrentRow(id));
        await dispatch(getHistory(id));
    };
}

function requestObj() {
    return {
        type: GET_OBJ_REQUEST,
    };
}

function requestObjSuccess(objData) {
    var myList = [];
    for (var i = 0; i < objData.length; i++) {
        var listItem = [];
        listItem[0] = objData[i].id;
        listItem[1] = objData[i].NameMS;
        listItem[2] = objData[i].NameKT;
        myList[i] = listItem;
    }
    // var id = myList[0][0];
    return {
        type: GET_OBJ_SUCCESS,
        payload: myList,
        // curload: id,
    };
}

function requestObjFail(err) {
    return {
        type: GET_OBJ_FAIL,
        payload: err,
    };
}

export function toggleMode(mode) {
    return dispatch => {
        dispatch({
            type: TOGGLE_ADD_MODE,
            payload: mode,
        });
    };
}

export function toggleEdit(key) {
    console.log('BEGIN_EDIT =', key);
    return dispatch => {
        dispatch({
            type: BEGIN_EDIT_MODE,
            payload: key,
        });
    };
}

export function setCurrentRow(key) {
    //console.log('BEGIN_EDIT =', key);
    return dispatch => {
        dispatch({
            type: SET_CURRENT_ROW,
            payload: key,
        });
    };
}

export function cancelEdit(key) {
  console.log('CANCEL_EDIT =', key);
  return dispatch => {
      dispatch({
          type: CANCEL_EDIT_MODE,
          payload: key,
      });
  };
}

export function savedObj(name, id) {
    console.log('saved?Name=' + name + '&id=' + id);
    var myRequest = new Request('/saved?Name=' + name + '&id=' + id);
    //fetch(myRequest)
    //.catch(err => console.log(err));

    return dispatch => {
        dispatch(requestSvedObj());
        return (
            fetch(myRequest)
                //.then(response => response.json())
                // .then(() => { dispatch(requestSvedObjSuccess()); })
                .then(() => {
                    dispatch(requestSvedObjSuccess());
                    dispatch(loadOBJ());
                })
                .catch(err => {
                    dispatch(requestSvedObjFail(err));
                })
        );
    };
}

function requestSvedObj() {
    return {
        type: SVED_OBJ_REQUEST,
    };
}

function requestSvedObjSuccess() {
    return {
        type: SVED_OBJ_SUCCESS,
    };
}

function requestSvedObjFail(err) {
    return {
        type: SVED_OBJ_FAIL,
        payload: err,
    };
}

export function deleteObj(id) {
    //console.log('id = ',id)
    var myRequest = new Request('/del?id=' + id);
    //fetch(myRequest)
    //.then(function(response) { return response.json(); })
    //.catch(err => console.log(err));

    return dispatch => {
        dispatch(requestDelObj());
        return (
            fetch(myRequest)
                //.then(response => response.json())
                //.then(() => { requestDelObjSuccess()); })
                .then(() => {
                    dispatch(requestDelObjSuccess());
                    dispatch(loadOBJ());
                })
                .catch(err => {
                    dispatch(requestDelObjFail(err));
                })
        );
    };
}

function requestDelObj() {
    return {
        type: DEL_OBJ_REQUEST,
    };
}

function requestDelObjSuccess() {
    return {
        type: DEL_OBJ_SUCCESS,
    };
}

function requestDelObjFail(err) {
    return {
        type: DEL_OBJ_FAIL,
        payload: err,
    };
}

export function addObj(idOG, objName) {
    console.log('id = ', idOG, 'objName = ', objName);
    var myRequest = new Request('/addobj?Name=' + objName + '&parent=' + idOG);
    //fetch(myRequest)
    //.then(function(response) { return response.json(); })
    //.catch(err => console.log(err));

    return dispatch => {
        dispatch(requestAddObj());
        return (
            fetch(myRequest)
                //.then(response => response.json())
                //.then(response => { dispatch(requestAddObjSuccess(response.data)); })
                .then(() => {
                    dispatch(requestAddObjSuccess());
                    dispatch(loadOBJ());
                })
                .catch(err => {
                    dispatch(requestAddObjFail(err));
                })
        );
    };
}

function requestAddObj() {
    return {
        type: ADD_OBJ_REQUEST,
    };
}

function requestAddObjSuccess() {
    return {
        type: ADD_OBJ_SUCCESS,
    };
}

function requestAddObjFail(err) {
    return {
        type: ADD_OBJ_FAIL,
        payload: err,
    };
}

export function loadGRCOMP() {
    return dispatch => {
        dispatch(requestGRCOMP());
        return fetch('/grcomp')
            .then(response => response.json())
            .then(response => {
                dispatch(requestGRCOMPSuccess(response.data));
            })
            .catch(err => {
                dispatch(requestGRCOMPFail(err));
            });
    };
}

function requestGRCOMP() {
    return {
        type: GET_GRCOMP_REQUEST,
    };
}

function requestGRCOMPSuccess(GRCOMPData) {
    var myList = [];
    for (var i = 0; i < GRCOMPData.length; i++) {
        var listItem = [];
        listItem[0] = GRCOMPData[i].id;
        listItem[1] = GRCOMPData[i].Name;
        myList[i] = listItem;
    }
    return {
        type: GET_GRCOMP_SUCCESS,
        payload: myList,
    };
}

function requestGRCOMPFail(err) {
    return {
        type: GET_GRCOMP_FAIL,
        payload: err,
    };
}
