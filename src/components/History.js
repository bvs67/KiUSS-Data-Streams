import React from 'react';
import PropTypes from 'prop-types';
import './KDStyle.css';

export class History extends React.Component {

    onBtnClick = () => {
        this.props.histReload(this.props.CurrentObj);
    };

    //componentDidMount() {
    //    this.props.histReload(this.props.CurrentObj);
    //}

    //componentWillReceiveProps(nextProps) {
    //    console.log('componentWillReceiveProps', nextProps)
    //    //const { OBJArray } = this.props;
    //    //if (!OBJArray.length && nextProps.OBJArray.length) {
    //         //this.props.setHistory(nextProps.OBJArray[0].id);
    //    //}
    // }

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        // console.log('componentDidUpdate =', this.props.CurrentObj)
        // const { OBJArray } = this.props;
        // console.log(OBJArray);
        // console.log(this.props);
        if (this.props.CurrentObj !== prevProps.CurrentObj) {
          // this.fetchData(this.props.userID);
          // this.props.getHistory(this.props.CurrentObj);
          this.props.histReload(this.props.CurrentObj);
        }
    }

    _onChange = e => {
        this.hcomSelect = e.target.value;
        // console.log(e.target.value)
        // console.log('_onChange =', this.objSelect)
    };

    onAddHistClick = () => {
        console.log('onAddHistClick', this.props.AddHistMode);
        if (this.props.AddHistMode) {
            this.props.toggleHistMode(false);
            console.log('-1-AddHistMode=', this.props.AddHistMode);
        } else {
            this.props.toggleHistMode(true);
            console.log('-2-AddHistMode=', this.props.AddHistMode);
        }
    };

    onEditClick = key => {
        this.props.toggleHistEdit(key);
        //}
        console.log('Edit key = ',key)
        //console.log('Edit mode = ',this.props.EditMode)
        // this.props.deleteObj(key)
    };

    onEdSvClick = key => {
        console.log('onSvEdHistClick =', key);
        var s1 = this.h_beg1.value
        if (s1==="") s1 = 'null'
        var s2 = this.h_beg2.value
        if (s2==="") s2 = 'null'
        this.props.savedHist(this.props.CurrentObj, s1, s2, key);
    };

    onEdCancel = key => {
      console.log('onEdHistCancel =', key);
      this.props.cancelHistEdit(key);
    };

    onDelClick = key => {
        console.log('Del key = ', key);
        this.props.deleteHist(this.props.CurrentObj, key);
    };

    onSaveClick = () => {
        // console.log('onSaveClick', this.objSelect.value, ' ', this.objInput.value)
        // console.log('this.h_begInput.value =', this.h_begInput.value);
        // console.log('this.hcomSelect =', this.hcomSelect);
        // console.log('this.props.histArray.length =', this.props.histArray.length);
        let hmax = this.props.histArray.length;
        // console.log('hmax =', hmax);
        let id_prev = 0;
        // ( hmax === 0) ? ( id_prev = 0 ) : ( id_prev = this.props.histArray[hmax-1][0] );
        ( hmax === 0) ? ( id_prev = 0 ) : ( id_prev = this.props.histArray[hmax-1].id );
        this.props.addHist(this.props.CurrentObj, this.h_begInput.value, this.hcomSelect, id_prev);
        //this.fieldInput.value = ''
        //this.objInput.value = '';
    };

    renderHistory = () => {
        let lineObj = null;
        lineObj = this.props.histArray.map(arrLine => {
            let td_Edit1, td_Edit2, td_Buttons;
            var edit_key = Number(arrLine.id);
            var s1 = String(arrLine.h_beg)
            var s2 = String(arrLine.h_end)
            //console.log(s1)
            //console.log(s1.substring(6,10))
            //console.log(s1.substring(3,5))
            //console.log(s1.substring(0,2))
            s1 = s1.substring(6,10)+'-'+s1.substring(3,5)+'-'+s1.substring(0,2)
            s2 = s2.substring(6,10)+'-'+s2.substring(3,5)+'-'+s2.substring(0,2)
            // console.log(s2)
            if (this.props.EditHistMode && this.props.EditHistKey === edit_key) {
                td_Edit1 = (
                    <td>
                    <input className="whiteDataLine120"
                            type="date"
                            defaultValue={s1}
                            ref={input => {
                                this.h_beg1 = input;
                            }}
                        />
                    </td>
                );
                td_Edit2 = (
                    <td>
                    <input className="whiteDataLine120"
                            type="date"
                            defaultValue={s2}
                            ref={input => {
                                this.h_beg2 = input;
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
                td_Edit1 = <td className="tableMain">{arrLine.h_beg}</td>
                td_Edit2 = <td className="tableMain">{arrLine.h_end}</td>
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
            return (
                <tr key={arrLine.id}>
                    {td_Edit1}
                    {td_Edit2}
                    <td colSpan="2" className="tableMain">{arrLine.h_comment}</td>
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

    renderHistInput = () => {
        this.hcomSelect = React.createRef();
        this.hcomSelect = 'Склад ЮР-5';
        if (!this.props.AddHistMode) {
            return null;
        }
        return (
            <tr>
                <td colSpan="2" >
                <input className="whiteDataLine"
                        type="date"
                        ref={input => {
                            this.h_begInput = input;
                        }}
                    />
                </td>
                <td className="tableMain">
                    <select onChange={this._onChange} defaultValue="Склад ЮР-5">
                        {this.props.HCOMArray.map(arrLine => {
                            return (
                                <option key={arrLine.num} value={arrLine.h_comment}>
                                    {arrLine.h_comment}
                                </option>
                            );
                        })}
                    </select>
                </td>
                <td className="btn" colSpan="2" align="center">
                    <button onClick={this.onSaveClick.bind(this)}>
                        Save
                    </button>
                </td>
            </tr>
        );
        //}, this);
        //return lineFL
    };

    render() {
        const { histArray, isFetching } = this.props; // вытащили isFetching
        // console.log('dataArray', dataArray);
        // console.log('isFetching', isFetching);
        return (
            <React.Fragment>
                <button className="buttons" onClick={this.onAddHistClick}>
                    {' '}
                    Add Hist{' '}
                </button>
                <table>
                    <thead>
                        <tr className="whiteHeadline">
                            <td colSpan="6">История установки комплекта</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderHistory()}
                        {this.renderHistInput()}
                    </tbody>
                </table>

                <button className="buttons" onClick={this.onBtnClick}>
                    Load Data
                </button>

                {isFetching ? (
                    <p>Загрузка...</p>
                ) : (
                    <p>Загружено {histArray.length} строк.</p>
                )}
            </React.Fragment>
        );
    }
}

History.propTypes = {
    histArray: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    AddHistMode: PropTypes.bool.isRequired,
    HCOMArray: PropTypes.array,
    EditHistMode: PropTypes.bool,
    EditHistKey: PropTypes.number,
    CurrentObj: PropTypes.number,
};

History.defaultProps = {
    histArray: [], // [[1, 2, 3, 4], [5, 6, 7, 8]],
    isFetching: false,
    AddHistMode: false,
    HCOMArray: [1],
    EditHistMode: false,
    EditHistKey: 0,
    CurrentObj: 0,
};
