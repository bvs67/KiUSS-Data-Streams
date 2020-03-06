import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Obj } from '../components/Obj';
import { Users } from '../components/Users';
import { History } from '../components/History';
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
    setHistory,
} from '../actions/PageActions';
import { getUsers } from '../actions/UsersActions';
import { 
    histReload,
    toggleHistMode,
    toggleHistEdit,
    savedHist,
    cancelHistEdit,
    deleteHist,
    addHist,
 } from '../actions/HistoryActions';

class App extends Component {
    render() {
        const {
            obj,
            users,
            getUsersAction,
            setHistoryAction,
            loadOBJAction,
            saveAndReloadAction,
            deleteObjAction,
            toggleModeAction,
            toggleEditAction,
            cancelEditAction,
            savedObjAction,
            addObjAction,
            loadGRCOMPAction,
            history,
            histReloadAction,
            toggleHistModeAction,
            toggleHistEditAction,
            savedHistAction,
            cancelHistEditAction,
            deleteHistAction,
            addHistAction,
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
                            setHistory={setHistoryAction}
                            CurrentRow={obj.CurrentRow}
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
                         <History
                            histArray={history.histArray}
                            isFetching={history.isFetching}
                            histReload={histReloadAction}
                            toggleHistMode={toggleHistModeAction}
                            AddHistMode={history.AddHistMode}
                            HCOMArray={history.HCOMArray}
                            toggleHistEdit={toggleHistEditAction}
                            EditHistMode={history.EditHistMode}
                            EditHistKey={history.EditHistKey}
                            savedHist={savedHistAction}
                            cancelHistEdit={cancelHistEditAction}
                            deleteHist={deleteHistAction}
                            addHist={addHistAction}
                            CurrentObj={history.CurrentObj}
                         />
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
        history: store.history,
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
            histReloadAction: key => dispatch(histReload(key)),
            setHistoryAction: key => dispatch(setHistory(key)),
            toggleHistModeAction: mode => dispatch(toggleHistMode(mode)),
            toggleHistEditAction: key => dispatch(toggleHistEdit(key)),
            savedHistAction: (obj, h_beg, h_end, key) => dispatch(savedHist(obj, h_beg, h_end, key)),
            cancelHistEditAction: key => dispatch(cancelHistEdit(key)),
            deleteHistAction: (obj, key) => dispatch(deleteHist(obj, key)),
            addHistAction: (obj, h_beg, h_com, id_prev) => dispatch(addHist(obj, h_beg, h_com, id_prev)),
        };
    },
)(App);
