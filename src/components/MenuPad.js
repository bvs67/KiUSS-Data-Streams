import React from 'react';
import PropTypes from 'prop-types';
import './KDStyle.css';

export class MenuPad extends React.Component {

    onContactClick = () => {
        console.log('onContactClick');
        this.props.getMenuPoint(1);
    };
    onShipmentClick = () => {
        console.log('onShipmentClick');
        this.props.getMenuPoint(2);
    };
    onDashboardClick = () => {
        console.log('onDashboardClick');
        this.props.getMenuPoint(3);
    };
    onReportClick = () => {
        console.log('onReportClick');
        this.props.getMenuPoint(4);
    };
    onAdminClick = () => {
        console.log('onAdminClick');
        this.props.getMenuPoint(5);
    };

    render() {
        return (
            <table className='mainMenu'>
                <tbody>
                    <tr key = '1'>
                        <td className='greenHL120' onClick={this.onContactClick.bind(this)}>Контакты</td>
                        <td className='greenHL90' onClick={this.onShipmentClick.bind(this)}>Склад</td>
                        <td className='greenHL170' onClick={this.onDashboardClick.bind(this)}>Комплекты УМБ</td>
                        <td className='greenHL120' onClick={this.onReportClick.bind(this)}>Отчеты</td>
                        <td className='greenHL90' onClick={this.onAdminClick.bind(this)}>Админ</td>
                        <td className='greenHeadLine'></td>
                    </tr>
               </tbody>
            </table>
        );
    }
}

MenuPad.propTypes = {
    MenuPoint: PropTypes.number,
};

MenuPad.defaultProps = {
    MenuPoint: 1,
};    