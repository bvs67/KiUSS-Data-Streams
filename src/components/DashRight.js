import React from 'react';
import PropTypes from 'prop-types';
import './KDStyle.css';

export class DashRight extends React.Component {

    onBtnClick = () => {
        // console.log("CurrentObj1 =", this.props.CurrentObj);
        this.props.histReload(this.props.CurrentObj);
    };

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        // console.log("CurrentObj =", this.props.CurrentObj);
        // console.log("prevProps.CurrentObj =", prevProps.CurrentObj);
        if (this.props.CurrentObj !== prevProps.CurrentObj) {
            this.props.histReload(this.props.CurrentObj);
        }
    }

    renderHistory = () => {
        let lineObj = null;
        // console.log('histArray RH =', this.props.histArray);
        lineObj = this.props.histArray.map(arrLine => {
            return (
                <tr key={arrLine.id}>
                    <td className="tableMain">{arrLine.h_beg}</td>
                    <td className="tableMain">{arrLine.h_end}</td>
                    <td className="tableMain">{arrLine.h_comment}</td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    render() {
        const { histArray, isFetching } = this.props; // вытащили isFetching
        // console.log('histArray H =', histArray);
        // console.log('isFetching', isFetching);
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr className="whiteHeadline">
                            <td colSpan="3">История установки комплекта</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderHistory()}
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

DashRight.propTypes = {
    histArray: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    CurrentObj: PropTypes.number,
};

DashRight.defaultProps = {
    histArray: [], // [[1, 2, 3, 4], [5, 6, 7, 8]],
    isFetching: false,
    CurrentObj: 0,
};
