import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Users } from '../components/Users';
//import { Obj } from '../components/Obj';
// import { loadOBJ, } from '../actions/PageActions';
import { getUsers } from '../actions/UsersActions';

 export class DashBoard extends Component {
    render() {
        const {
//            obj,
//            loadOBJAction,
            users,
            getUsersAction,
        } = this.props;
        return (
                <div id="main-block">
                    <div id="kds-obj">
                        Список комплектов УМБ
                    </div>
                    <div id="data-block">
                        Список пользователей
                        <Users
                            dataArray={users.dataArray}
                            isFetching={users.isFetching}
                            getUsers={getUsersAction}
                        />
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
        users: store.users,
    }),
    dispatch => {
        return {
            getUsersAction: () => dispatch(getUsers()),
        };
    },
)(DashBoard);
