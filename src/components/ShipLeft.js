import React from 'react';
import TreeView from 'react-treeview';
import './react-treeview.css'
import PropTypes from 'prop-types';
//import './KDStyle.css';
// import { History } from '../components/History';

export class ShipLeft extends React.Component {
    
    componentDidMount() {
        this.props.getShipTree();
    }

    _onClick = (e) => {
        // e.preventDefault();
        // console.log('По ссылке кликнули =', e);
        this.props.setShip(e);
    };

//    componentDidUpdate(prevProps) {
//        if (this.props.strucArray !== prevProps.strucArray) {
//            // this.fetchData(this.props.userID);
//            // this.props.getHistory(this.props.CurrentObj);
//     //       this.props.histReload(this.props.CurrentObj);
//       //   }
//        this.props.getStrucTree();
//    }
//    }

    renderShip = () => {
        //let strucTree = null;
        let curLevel = 0;
        let ul_mas = {
            id:"0",
            Name:"root",};
        // strucTree = this.props.strucArray.map((node) => {
        this.props.shipArray.forEach((node) => {
            // let ul = [{id:node.id_RG, Name:node.NameRG}];
            // let s1 = String(node.sdate)
            // console.log(s1);
            if (curLevel === 0) {
                ul_mas.children = [{id:node.id, Name:node.sdate+" "+node.sfield}];
            } else {
                ul_mas.children.push({id:node.id, Name:node.sdate+" "+node.sfield});
            }
            curLevel = 1;
        }); // END shipArray.forEach

        const renderTree = nodes => (
            <TreeView key={nodes.id} nodeLabel={<a href="#" onClick={this._onClick.bind(this, nodes.id)}>{nodes.Name}</a>} defaultCollapsed={false}>
                {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : null}
            </TreeView>
        );
        // console.log(ul_mas);
        if (ul_mas.length===0) {
            return null;
        } else {
            //return ( renderTree(data))
            return ( renderTree(ul_mas))
        }
    }

    render() {
        return (
            <React.Fragment>
                <h4 className="redHeadLine">ПАО НК "Роснефть"</h4>
                {this.renderShip()}
            </React.Fragment>
        );
    }
}

ShipLeft.propTypes = {
    shipArray: PropTypes.array,
    CurrentShip: PropTypes.number,
    isFetching: PropTypes.bool.isRequired,
};

ShipLeft.defaultProps = {
    shipArray: [],
    CurrentShip: 0,
    isFetching: false, // изначально статус загрузки - ложь
};
