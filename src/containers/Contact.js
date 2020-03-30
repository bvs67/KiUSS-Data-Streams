import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StrucTree } from '../components/StrucTree';
import { Users } from '../components/Users';
// import { Obj } from '../components/Obj';
// import { loadOBJ, } from '../actions/PageActions';
import { getStrucTree } from '../actions/StrucActions';
import { getUsers } from '../actions/UsersActions';
import { getUser } from '../actions/UsersActions';
import { setNode } from '../actions/StrucActions';

export class Contact extends Component {
    render() {
        const {
            structree,
            getStrucTreeAction,
            setNodeAction,
            users,
            getUsersAction,
            getUserAction,
        } = this.props;
        return (
                <div id="main-block">
                    <div id="kds-obj">
                        <StrucTree
                            strucArray={structree.strucArray}
                            isFetching={structree.isFetching}
                            getStrucTree={getStrucTreeAction}
                            CurrentNode={structree.CurrentNode}
                            setNode={setNodeAction}
                        />
                    </div>
                    <div id="data-block">
                        <Users
                            dataArray={users.dataArray}
                            userArray={users.userArray}
                            isFetching={users.isFetching}
                            getUsers={getUsersAction}
                            getUser={getUserAction}
                            Node={structree.CurrentNode}
                        />
                    </div>
                    <div id="history-block">
                        Дополнительная информация
                    </div>
                </div>
        );
    }
}

export default connect(
    store => ({
        structree: store.structree,
        users: store.users,
    }),
    dispatch => {
        return {
            getStrucTreeAction: () => dispatch(getStrucTree()),
            getUsersAction: () => dispatch(getUsers()),
            getUserAction: (id) => dispatch(getUser(id)),
            setNodeAction: (node) => dispatch(setNode(node))
        };
    },
)(Contact);
