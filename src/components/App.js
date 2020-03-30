import React, { Component } from 'react'
import { connect } from 'react-redux';
//import UserContainer from '../containers/UserContainer' // изменили импорт
//import PageContainer from '../containers/PageContainer' // изменили импорт
import { MenuPad } from '../components/MenuPad';
import Contact from '../containers/Contact';
import Admin from '../containers/Admin';
import DashBoard from '../containers/DashBoard';
import { getMenuPoint } from '../actions/MenuActions';

class App extends Component {
    renderContainer = () => {
        let menu_point = null;
        //const MenuPoint = 
        let current_point = this.props.menu.MenuPoint;
        // if (current_point == 3) {
        //    menu_point =  ( <DashBoard /> );
        // } else {
        //    menu_point =  ( <Admin /> );
        // }
        // console.log('current_point =', current_point);
        switch (current_point) {
            case 1:
                menu_point =  ( <Contact /> );
                break;
            case 2:
                menu_point =  ( <DashBoard /> );
                //console.log(menu_point);
                break;
            case 3:
                menu_point =  ( <Admin /> );
                break;
            case 4:
                menu_point =  ( <DashBoard /> );
                break;
            case 5:
                menu_point =  ( <Admin /> );
                break;
            default:
              menu_point =  ( <Admin /> );
        }
        // menu_point =  ( <DashBoard /> );
        return (
            menu_point
        );  
    }

    render() {
        const {
            menu,
            getMenuPointAction,
        } = this.props;
        return (
            <div className="app">
                <MenuPad
                    MenuPoint={menu.MenuPoint}
                    getMenuPoint={getMenuPointAction}
                />
                {this.renderContainer()}
            </div>
        )
    }
}

export default connect(
  store => ({
      menu: store.menu,
  }),
  dispatch => {
      return {
          getMenuPointAction: (id) => dispatch(getMenuPoint(id)),
      };
  },
)(App)
