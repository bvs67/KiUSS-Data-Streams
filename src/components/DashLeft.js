import React from 'react';
import PropTypes from 'prop-types';
import './KDStyle.css';

export class DashLeft extends React.Component {

    componentDidMount() {
        // this.props.loadOBJ();
        let id = this.props.CurrentId;
        console.log("this.props.CurrentId =", id)
        this.props.loadDASH(id);
    }

    onBtnClick = () => {
        this.props.loadOBJ();
    };

    _onChange = e => {
        this.objSelect = e.target.value;
        // console.log(e.target.value)
        // console.log('_onChange =', this.objSelect)
    };

    _showCurrent = key => {
        // console.log('_showCurrent =', key)
        this.props.setHistory(key)
    }

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        console.log("DashLeft CurrentRow =", this.props.CurrentRow);
        // console.log("prevProps.CurrentComp =", prevProps.CurrentComp);
        if (this.props.CurrentRow !== prevProps.CurrentRow) {
            this.props.setHistory(this.props.CurrentRow);
        }
    }

    renderObj = () => {
        let lineObj = null;
        let CurrentRowClass = "whiteLine";
        lineObj = this.props.OBJArray.map(arrLine => {
            let td_Edit, td_Buttons;
            var edit_key = Number(arrLine.id);
            if (this.props.CurrentRow === edit_key) { 
                //console.log(edit_key);
                //console.log(this.props.CurrentRow);
                CurrentRowClass = "greyLine" 
            } else {
                CurrentRowClass = "whiteLine"
            }
                td_Edit = <td className={CurrentRowClass}>{arrLine.NameKT}</td>;
                td_Buttons = null;
            return (
                <tr key={arrLine.id} onClick={this._showCurrent.bind(this, arrLine.id)}>
                    <td className={CurrentRowClass}>{arrLine.NameMS}</td>
                    {td_Edit}
                    {td_Buttons}
                    <td> </td>
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
                <button className="buttons" onClick={this.onBtnClick}>
                    Load Data
                </button>

                {isFetching ? (
                    <p>Загрузка...</p>
                ) : (
                    <p>Загружено {OBJArray.length} объектов.</p>
                )}
            </React.Fragment>
        );
    }
}

DashLeft.propTypes = {
  OBJArray: PropTypes.array,
  loadOBJ: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  CurrentRow: PropTypes.number,
  CurrentId: PropTypes.number,
};

DashLeft.defaultProps = {
  OBJArray: [],
  isFetching: false,
  CurrentRow: 0,
  CurrentId: 0,
};