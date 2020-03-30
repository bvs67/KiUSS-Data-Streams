import React from 'react';
import PropTypes from 'prop-types';
import './KDStyle.css';
// import { History } from '../components/History';

export class DashLeft extends React.Component {

    componentDidMount() {
        this.props.saveAndReload();
        //console.log('CurrentRow =', this.props.CurrentRow);
        //this.props.setHistory(this.props.CurrentRow);
        //var id = this.props.OBJArray[0][0];
        //console.log(id);
        //this.props.setHistory(id);
        //this.props.loadData();
        //this.props.loadFL();
    }

    onBtnClick = () => {
        this.props.saveAndReload();
        //console.log('CurrentRow =', this.props.CurrentRow);
        //this.props.setHistory(this.props.CurrentRow);
        //var id = this.props.OBJArray[0][0];
        //console.log(id);
        //this.props.loadData();
        //this.props.loadFL();
    };

    onAddClick = () => {
        console.log('onAddClick');
        if (this.props.AddMode) {
            this.props.toggleMode(false);
            console.log('-1-AddMode=', this.props.AddMode);
        } else {
            this.props.toggleMode(true);
            console.log('-2-AddMode=', this.props.AddMode);
        }
    };

    onSaveClick = () => {
        // console.log('onSaveClick', this.objSelect.value, ' ', this.objInput.value)
        console.log('onSaveClick 1 =', this.objInput.value);
        console.log('onSaveClick 2 =', this.objSelect);
        this.props.addObj(this.objSelect, this.objInput.value);
        //this.fieldInput.value = ''
        this.objInput.value = '';
    };

    _onChange = e => {
        this.objSelect = e.target.value;
        // console.log(e.target.value)
        // console.log('_onChange =', this.objSelect)
    };

    _showCurrent = key => {
        console.log('_showCurrent =', key)
        this.props.setHistory(key)
    }

    onEditClick = key => {
        //if (this.props.EditMode) {
        //  this.props.toggleEdit(false,0)
        //} else {
        this.props.toggleEdit(key);
        //}
        //console.log('Edit key = ',key)
        //console.log('Edit mode = ',this.props.EditMode)
        // this.props.deleteObj(key)
    };

    onEdSvClick = key => {
        console.log('onSvEdClick =', this.editInput.value);
        this.props.savedObj(this.editInput.value, key);
    };

    onEdCancel = key => {
      console.log('onEdCancel =', this.editInput.value);
      this.props.cancelEdit(key);
    };

    onDelClick = key => {
        console.log('Del key = ', key);
        this.props.deleteObj(key);
    };

    renderInput = () => {
        this.objSelect = React.createRef();
        this.objSelect = '12';
        if (!this.props.AddMode) {
            return null;
        }
        //let lineFL = null
        //lineFL = this.props.flArray.map(arrLine => {
        //var arrLine = []
        //arrLine = f0
        return (
            <tr>
                <td className="tableMain">
                    <select onChange={this._onChange} defaultValue="12">
                        {this.props.GRCOMPArray.map(arrLine => {
                            return (
                                <option key={arrLine.id} value={arrLine.id}>
                                    {arrLine.Name}
                                </option>
                            );
                        })}
                    </select>
                </td>
                <td className="tableMain">
                    <input
                        type="text"
                        ref={input => {
                            this.objInput = input;
                        }}
                    />
                </td>
                <td className="btn" colSpan="2" align="center">
                    <button onClick={this.onSaveClick.bind(this)}>
                        __ Save __
                    </button>
                </td>
            </tr>
        );
        //}, this);
        //return lineFL
    };

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
            if (this.props.EditMode && this.props.EditKey === edit_key) {
                td_Edit = (
                    <td className="tableMain">
                        <input
                            type="text"
                            defaultValue={arrLine.NameKT}
                            ref={input => {
                                this.editInput = input;
                            }}
                        />
                    </td>
                );
                td_Buttons = (
                    <td>
                        <button
                            onClick={this.onEdSvClick.bind(this, arrLine.id)}
                        >
                            Save
                        </button>
                        <button
                            onClick={this.onEdCancel.bind(this, arrLine.id)}
                        >
                            Cancel
                        </button>
                    </td>
                );
            } else {
                td_Edit = <td className={CurrentRowClass}>{arrLine.NameKT}</td>;
                td_Buttons = (
                    <td>
                        <button
                            onClick={this.onEditClick.bind(this, arrLine.id)}
                        >
                            Edit
                        </button>
                    </td>
                );
            }
            // console.log('this.props.EditMode =', this.props.EditMode);
            // console.log('this.props.EditKey =', this.props.EditKey);
            //var arrLine = []
            //arrLine = f0
            return (
                <tr key={arrLine.id} onClick={this._showCurrent.bind(this, arrLine.id)}>
                    <td className={CurrentRowClass}>{arrLine.NameMS}</td>
                    {td_Edit}
                    {td_Buttons}
                    <td>
                        <button
                            onClick={this.onDelClick.bind(this, arrLine.id)}
                        >
                            Del
                        </button>
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

                <button className="buttons" onClick={this.onAddClick}>
                    {' '}
                    Add Obj{' '}
                </button>
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
                        {this.renderInput()}
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

Obj.propTypes = {
  AddMode: PropTypes.bool,
  EditMode: PropTypes.bool,
  OBJArray: PropTypes.array,
  loadOBJ: PropTypes.func.isRequired,
  deleteObj: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  EditKey: PropTypes.number,
  GRCOMPArray: PropTypes.array,
  CurrentRow: PropTypes.number,
};

Obj.defaultProps = {
  AddMode: false,
  EditMode: false,
  OBJArray: [],
  isFetching: false,
  EditKey: 0,
  GRCOMPArray: [1],
  CurrentRow: 0,
};