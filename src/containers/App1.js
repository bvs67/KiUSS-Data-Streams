import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { MenuPad } from '../components/MenuPad';
import { Admin } from '../containers/Admin';

class App extends Component {
    render() {
        return (
            <div className="app">
                <MenuPad></MenuPad>
                <Admin />
            </div>
        );
    }
}

export default (App);
