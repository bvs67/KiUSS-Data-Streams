import React from 'react';
import PropTypes from 'prop-types';
import './KDStyle.css';

export class ShipDet extends React.Component {

    onBtnClick = () => {
        // console.log("CurrentComp1 =", this.props.CurrentComp);
        this.props.getShipDet(this.props.Ship);
    };

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        // console.log("CurrentComp =", this.props.CurrentComp);
        // console.log("prevProps.CurrentComp =", prevProps.CurrentComp);
        if (this.props.Ship !== prevProps.Ship) {
            this.props.getShipDet(this.props.Ship);
        }
    }

    _onClick = (e) => {
        // e.preventDefault();
        console.log('По ссылке кликнули =', e);
        //console.log('CurrentRow =', this.props.Node);
        // this.props.setNode(e);
    };

    renderShipDet = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.props.shipdetArray.map(arrLine => {
            return (
                <tr key={arrLine.id}>
                    <td className="whiteLine">{arrLine.sh_code}</td>
                    <td className="whiteLine">{arrLine.sh_name}</td>
                    <td className="whiteLine">{arrLine.sh_type}</td>
                    <td className="whiteLine">{arrLine.sh_quant}</td>
                    <td className="whiteLine">{arrLine.sh_weight}</td>
                </tr>
            );
        }, this);
        return lineObj;
    };




    render() {
        const { shipdetArray, isFetching } = this.props; // вытащили isFetching
        //console.log('compArray R =', compArray);
        // console.log('isFetching', isFetching);
        return (
            <React.Fragment>
                <h4 className="redHeadLine">Состав комплекта УМБ</h4>
                <table>
                    <tbody>
                        <tr key="1" className="whiteHeadline">
                            <td>№ п/п</td>
                            <td>Наименование</td>
                            <td>Габариты (см)</td>
                            <td>Кол-во (шт)</td>
                            <td>вес (кг)</td>
                        </tr>
                        {this.renderShipDet()}
                    </tbody>
                </table>

                <button className="buttons" onClick={this.onBtnClick}>
                    Load Data
                </button>

                {isFetching ? (
                    <p>Загрузка...</p>
                ) : (
                    <p>Загружено {shipdetArray.length} строк.</p>
                )}
            </React.Fragment>
        );
    }
}

ShipDet.propTypes = {
    shipdetArray: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    CurrentShip: PropTypes.number,
};

ShipDet.defaultProps = {
    shipdetArray: [],
    // [{id: 3,
    //    sh_name: "HP ProLiant",
    //    sh_quant: "ML110 G5",
    //    sh_weight: "Dual CPU E2160",
    //    sh_serial: "4",
    //    sh_inventory: "3,5\"_250*2",
    //    Dept_id: "4354473C-325D-4BE3-B416-BECA810ACB8D",
    //    }],     
    isFetching: false,
    CurrentShip: 0,
};
