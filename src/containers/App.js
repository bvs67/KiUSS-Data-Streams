import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Obj } from '../components/Obj';
import { Users } from '../components/Users';
import {
    loadOBJ,
    saveAndReload,
    deleteObj,
    toggleMode,
    toggleEdit,
    cancelEdit,
    savedObj,
    addObj,
    loadGRCOMP,
} from '../actions/PageActions';
import { getUsers } from '../actions/UsersActions';

class App extends Component {
    render() {
        const {
            obj,
            users,
            getUsersAction,
            loadOBJAction,
            saveAndReloadAction,
            deleteObjAction,
            toggleModeAction,
            toggleEditAction,
            cancelEditAction,
            savedObjAction,
            addObjAction,
            loadGRCOMPAction,
        } = this.props;
        return (
            <div className="app">
                <div id="main-block">
                    <div id="kds-obj">
                        <Obj
                            AddMode={obj.AddMode}
                            EditMode={obj.EditMode}
                            EditKey={obj.EditKey}
                            OBJArray={obj.OBJArray}
                            loadOBJ={loadOBJAction}
                            saveAndReload={saveAndReloadAction}
                            deleteObj={deleteObjAction}
                            toggleMode={toggleModeAction}
                            toggleEdit={toggleEditAction}
                            cancelEdit={cancelEditAction}
                            savedObj={savedObjAction}
                            addObj={addObjAction}
                            isFetching={obj.isFetching}
                            tmp={obj.tmp}
                            GRCOMPArray={obj.GRCOMPArray}
                            loadGRCOMP={loadGRCOMPAction}
                        />
                    </div>
                    <div id="data-block">
                        <Users
                            dataArray={users.dataArray}
                            isFetching={users.isFetching}
                            getUsers={getUsersAction}
                        />
                    </div>
                    <div id="history-block">
                        История использования комплекта
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    store => ({
        obj: store.obj,
        users: store.users,
    }),
    dispatch => {
        return {
            loadOBJAction: () => dispatch(loadOBJ()),
            saveAndReloadAction: () => dispatch(saveAndReload()),
            deleteObjAction: tmp => dispatch(deleteObj(tmp)),
            toggleModeAction: mode => dispatch(toggleMode(mode)),
            toggleEditAction: key => dispatch(toggleEdit(key)),
            cancelEditAction: key => dispatch(cancelEdit(key)),
            savedObjAction: (name, id) => dispatch(savedObj(name, id)),
            addObjAction: (OG, Name) => dispatch(addObj(OG, Name)),
            loadGRCOMPAction: () => dispatch(loadGRCOMP()),
            getUsersAction: () => dispatch(getUsers()),
        };
    },
)(App);
