import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DashLeft } from '../components/DashLeft';
import { DashRight } from '../components/DashRight';
import { DashCenter } from '../components/DashCenter';
import {
    loadOBJ,
    setHistory,
} from '../actions/ObjActions';
import { 
    histReload,
} from '../actions/HistoryActions';
import { 
    compReload,
} from '../actions/CompActions';
export class DashBoard extends Component {
    render() {
        const {
            dashleft,
            loadOBJAction,
            setHistoryAction,
            dashright,
            histReloadAction,
            dashcenter,
            compReloadAction,
        } = this.props;
        return (
                <div id="main-block">
                    <div id="kds-obj">
                        <DashLeft 
                            OBJArray={dashleft.OBJArray}
                            loadOBJ={loadOBJAction}
                            isFetching={dashleft.isFetching}
                            setHistory={setHistoryAction}
                            CurrentRow={dashleft.CurrentRow}
                        />
                    </div>
                    <div id="data-block">
                        <DashCenter
                            compArray={dashcenter.compArray}
                            isFetching={dashcenter.isFetching}
                            compReload={compReloadAction}
                            CurrentComp={dashleft.CurrentRow}
                        />
                    </div>
                    <div id="history-block">
                        <DashRight
                            histArray={dashright.histArray}
                            isFetching={dashright.isFetching}
                            histReload={histReloadAction}
                            CurrentObj={dashleft.CurrentRow}
                        />
                    </div>
                </div>
        );
    }
}

export default connect(
    store => ({
        dashleft: store.dashleft,
        dashright: store.dashright,
        dashcenter: store.dashcenter,
    }),
    dispatch => {
        return {
            loadOBJAction: () => dispatch(loadOBJ()),
            setHistoryAction: key => dispatch(setHistory(key)),
            histReloadAction: key => dispatch(histReload(key)),
            compReloadAction: key => dispatch(compReload(key)),
        };
    },
)(DashBoard);
