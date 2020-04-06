import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Obj } from '../components/Obj';
import {
    loadOBJ,
} from '../actions/PageActions';

 export class Admin extends Component {
    render() {
        const {
            obj,
            loadOBJAction,
        } = this.props;
        return (
                <div id="main-block">
                    <div id="kds-obj">
                        Список комплектов УМБ
                        <Obj 
                            OBJArray={obj.OBJArray}
                            loadOBJ={loadOBJAction}
                            isFetching={obj.isFetching}
                        />
                    </div>
                    <div id="data-block">
Список пользователей
                    </div>
                    <div id="history-block">
История установки комплекта
                    </div>
                </div>
        );
    }
}

export default connect(
    store => ({
        obj: store.obj,
    }),
    dispatch => {
        return {
            loadOBJAction: () => dispatch(loadOBJ()),
        };
    },
)(Admin);
