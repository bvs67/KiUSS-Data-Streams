import React from 'react';
import PropTypes from 'prop-types';
import './KDStyle.css';
// import { History } from '../components/History';

export class Obj extends React.Component {

    componentDidMount() {
        this.props.loadOBJ();
    }

    renderObj = () => {
        let lineObj = null;
        let CurrentRowClass = "whiteLine";
        lineObj = this.props.OBJArray.map(arrLine => {
            let td_Edit, td_Buttons;
            CurrentRowClass = "whiteLine"
                td_Edit = <td className={CurrentRowClass}>{arrLine.NameKT}</td>;
                td_Buttons = (
                    <td>
                    </td>
                );
            return (
                <tr key={arrLine.id} >
                    <td className={CurrentRowClass}>{arrLine.NameMS}</td>
                    {td_Edit}
                    {td_Buttons}
                    <td>
                        
                    </td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    render() {
        const { OBJArray, isFetching } = this.props; // вытащили isFetching
        // console.log('dataArray', dataArray);
        // console.log('isFetching', isFetching);
        return (
            <React.Fragment>
                <h4 className="redHeadLine">Комплекты УМБ</h4>

                <table>
                    <thead>
                        <tr className="whiteHeadline">
                            <td className="tableMain">ОГ</td>
                            <td className="tableMain">Комплекты</td>
                            <td colSpan="2" className="tableMain">
                                Действие
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderObj()}
                    </tbody>
                </table>

                {isFetching ? (
                    <p>Загрузка...</p>
                ) : (
                    <p>Загружено {OBJArray.length} объектов.</p>
                )}
            </React.Fragment>
        );
    }
}

Obj.propTypes = {
  OBJArray: PropTypes.array,
  loadOBJ: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

Obj.defaultProps = {
  OBJArray: [],
  isFetching: false,
};