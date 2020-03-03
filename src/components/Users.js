import React from 'react';
import PropTypes from 'prop-types';
import './KDStyle.css';

export class Users extends React.Component {

    onBtnClick = () => {
        this.props.getUsers();
    };

    componentDidMount() {
        this.props.getUsers();
    }

    renderUsers = () => {
        let lineObj = null;
        lineObj = this.props.dataArray.map(arrLine => {
            return (
                <tr key={arrLine[0]}>
                    <td className="tableMain">{arrLine[1]}</td>
                    <td className="tableMain">{arrLine[2]}</td>
                    <td className="tableMain">{arrLine[3]}</td>
                    <td className="tableMain">{arrLine[4]}</td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    render() {
        const { dataArray, isFetching } = this.props; // вытащили isFetching
        // console.log('dataArray', dataArray);
        // console.log('isFetching', isFetching);
        return (
            <React.Fragment>
                <h4 className="redHeadLine">Пользователи</h4>

                <table>
                    <thead>
                        <tr className="whiteHeadline">
                            <td className="tableMain">Подразделение</td>
                            <td className="tableMain">Пользователь</td>
                            <td className="tableMain">Телефон</td>
                            <td className="tableMain">Почта</td>
                        </tr>
                    </thead>
                    <tbody>{this.renderUsers()}</tbody>
                </table>

                <button className="buttons" onClick={this.onBtnClick}>
                    Load Data
                </button>

                {isFetching ? (
                    <p>Загрузка...</p>
                ) : (
                    <p>Загружено {dataArray.length} пользователей.</p>
                )}
            </React.Fragment>
        );
    }
}

Users.propTypes = {
    dataArray: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
};

Users.defaultProps = {
    dataArray: [1, 2, 3, 4, 5],
    isFetching: false,
};
