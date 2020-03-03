export const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const DEL_OBJ_REQUEST = 'DEL_OBJ_REQUEST'
export const DEL_OBJ_SUCCESS = 'DEL_OBJ_SUCCESS'
export const TOGGLE_ADD_MODE = 'TOGGLE_ADD_MODE'
export const BEGIN_EDIT_MODE = 'BEGIN_EDIT_MODE'
export const SVED_OBJ_REQUEST = 'SVED_OBJ_REQUEST'
export const SVED_OBJ_SUCCESS = 'SVED_OBJ_SUCCESS'
export const ADD_OBJ_REQUEST = 'ADD_OBJ_REQUEST'
export const ADD_OBJ_SUCCESS = 'ADD_OBJ_SUCCESS'
export const ADD_FL_REQUEST = 'ADD_FL_REQUEST'
export const ADD_FL_SUCCESS = 'ADD_FL_SUCCESS'

export function loadData() {
  
//var myList = []
//for (let i = 0; i < 3; i++) {
//  // alert(i);
//  let d1 = new Date()
//  myList[i] = ['v']+d1.getHours().toString()+d1.getMinutes().toString()+(d1.getSeconds()+i).toString();
//}

var myList = []    // {a:1, b:2, c:3};
var flNames = [] // ['ВСНК','ВЧНГ','ВСНК','ВЧНГ','ВСНК','ВЧНГ','ВСНК','ВЧНГ']
var myRequest = new Request('/obj');
fetch(myRequest)
  .then(function(response) { return response.json(); })
  .then(function(data) {
    for (var i = 0; i < data.data.length; i++) {
      //var listItem = []
      //listItem[0] = data.data[i].id
      //listItem[1] = data.data[i].NameMS
      //listItem[2] = data.data[i].NameKT
      var listItem = []
      listItem[0]=data.data[i].id
      listItem[1]=data.data[i].NameMS
      listItem[2]=data.data[i].NameKT
      myList[i] = listItem
      var fString = ''
      fString = String(listItem[1])
      flNames.push(fString)
      //console.log(listItem[1])
    }
  })
  .catch(err => console.log(err));
console.log(myList);
//var flNames = [...new Set(myList.map(item => item[1]))]
//var flNames = myList.map(item => item)
const dfl = [...new Set(flNames)]
console.log(flNames);
console.log(dfl);

  return dispatch => {
    dispatch({
      type: GET_DATA_REQUEST,
      payload: 1,
    })

    setTimeout(() => {
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: myList,
      })
    }, 1000)
  }
}

export function toggleMode(mode) {
  return dispatch => {
    dispatch({
      type: TOGGLE_ADD_MODE,
      payload: mode,
    })
  }
}

export function toggleEdit(key) {
  console.log('BEGIN_EDIT =', key)
  return dispatch => {
    dispatch({
      type: BEGIN_EDIT_MODE,
      payload: key,
    })
  }
}

export function savedObj(name, id) {
  console.log('saved?Name='+name+'&id='+id)
  var myRequest = new Request('/saved?Name='+name+'&id='+id);
  fetch(myRequest)
  .catch(err => console.log(err));

  var myList = [] 
  myRequest = new Request('/obj');
fetch(myRequest)
  .then(function(response) { return response.json(); })
  .then(function(data) {
    for (var i = 0; i < data.data.length; i++) {
      var listItem = []
      listItem[0]=data.data[i].id
      listItem[1]=data.data[i].NameMS
      listItem[2]=data.data[i].NameKT
      myList[i] = listItem
    }
  })
  .catch(err => console.log(err));

  return dispatch => {
    dispatch({
      type: SVED_OBJ_REQUEST,
      payload: id,
    })

    setTimeout(() => {
      dispatch({
        type: SVED_OBJ_SUCCESS,
        payload: myList,
      })
    }, 1000)
  }
}

export function deleteObj(id) {
  console.log('id = ',id)
  var myRequest = new Request('/del?id='+id);
  fetch(myRequest)
  //.then(function(response) { return response.json(); })
  .catch(err => console.log(err));

  var myList = [] 
  myRequest = new Request('/obj');
fetch(myRequest)
  .then(function(response) { return response.json(); })
  .then(function(data) {
    for (var i = 0; i < data.data.length; i++) {
      //var listItem = []
      //listItem[0] = data.data[i].id
      //listItem[1] = data.data[i].NameMS
      //listItem[2] = data.data[i].NameKT
      var listItem = []
      listItem[0]=data.data[i].id
      listItem[1]=data.data[i].NameMS
      listItem[2]=data.data[i].NameKT
      myList[i] = listItem
    }
  })
  .catch(err => console.log(err));

  return dispatch => {
    dispatch({
      type: DEL_OBJ_REQUEST,
      payload: id,
    })

    setTimeout(() => {
      dispatch({
        type: DEL_OBJ_SUCCESS,
        payload: myList,
      })
    }, 1000)
  }
}


export function addObj(idOG, objName) {
  console.log('id = ',idOG, 'objName = ', objName)
  var myRequest = new Request('/addobj?Name='+objName+'&parent='+idOG);
  fetch(myRequest)
  //.then(function(response) { return response.json(); })
  .catch(err => console.log(err));

  var myList = [] 
  myRequest = new Request('/obj');
fetch(myRequest)
  .then(function(response) { return response.json(); })
  .then(function(data) {
    for (var i = 0; i < data.data.length; i++) {
      //var listItem = []
      //listItem[0] = data.data[i].id
      //listItem[1] = data.data[i].NameMS
      //listItem[2] = data.data[i].NameKT
      var listItem = []
      listItem[0]=data.data[i].id
      listItem[1]=data.data[i].NameMS
      listItem[2]=data.data[i].NameKT
      myList[i] = listItem
    }
  })
  .catch(err => console.log(err));

  return dispatch => {
    dispatch({
      type: ADD_OBJ_REQUEST,
      payload: objName,
    })

    setTimeout(() => {
      dispatch({
        type: ADD_OBJ_SUCCESS,
        payload: myList,
      })
    }, 1000)
  }
}

export function loadFL() {
  
  var flNames = [] // ['ВСНК','ВЧНГ','ВСНК','ВЧНГ','ВСНК','ВЧНГ','ВСНК','ВЧНГ']
  var myRequest = new Request('/fl');
  fetch(myRequest)
    .then(function(response) { return response.json(); })
    .then(function(data) {
      for (var i = 0; i < data.data.length; i++) {
        var listItem = []
        listItem[0]=data.data[i].id
        listItem[1]=data.data[i].Name
        flNames[i] = listItem
      }
    })
    .catch(err => console.log(err));
  console.log(flNames);
  
    return dispatch => {
      dispatch({
        type: ADD_FL_REQUEST,
        payload: 1,
      })
  
      setTimeout(() => {
        dispatch({
          type: ADD_FL_SUCCESS,
          payload: flNames,
        })
      }, 1000)
    }
  }
  
  