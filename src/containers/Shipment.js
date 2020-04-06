import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShipLeft } from '../components/ShipLeft';
import { getShipTree } from '../actions/ShipActions';
import { setShip } from '../actions/ShipActions';
import { ShipDet } from '../components/ShipDet';
import { getShipDet } from '../actions/ShipDetActions';

export class Shipment extends Component {
    render() {
        const {
            ship,
            getShipTreeAction,
            setShipAction,
            shipdet,
            getShipDetAction,
        } = this.props;
        return (
                <div id="main-block">
                    <div id="kds-obj">
                        <ShipLeft
                            shipArray={ship.shipArray}
                            isFetching={ship.isFetching}
                            getShipTree={getShipTreeAction}
                            CurrentShip={ship.CurrentShip}
                            setShip={setShipAction}
                        />
                    </div>
                    <div id="data-block">
                        Состав комплекта поставки
                        <ShipDet
                            shipdetArray={shipdet.shipdetArray}
                            isFetching={shipdet.isFetching}
                            getShipDet={getShipDetAction}
                            Ship={ship.CurrentShip}
                        />
                    </div>
                    <div id="history-block">
                        Дополнительная информация
                    </div>
                </div>
        );
    }
}

export default connect(
    store => ({
        ship: store.ship,
        shipdet: store.shipdet,
    }),
    dispatch => {
        return {
            getShipTreeAction: () => dispatch(getShipTree()),
            setShipAction: (node) => dispatch(setShip(node)),
            getShipDetAction: (ship) => dispatch(getShipDet(ship)),
        };
    },
)(Shipment);
