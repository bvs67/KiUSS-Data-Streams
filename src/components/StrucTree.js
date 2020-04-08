import React from 'react';
import TreeView from 'react-treeview';
import './react-treeview.css'
import PropTypes from 'prop-types';
//import './KDStyle.css';
// import { History } from '../components/History';

export class StrucTree extends React.Component {
    
    componentDidMount() {
        // this.props.getStrucTree();
        let node = this.props.CurNodeId;
        console.log("this.props.CurNodeId =", node);
        this.props.getStrucDash(node);
    }

    _onClick = (e) => {
        // e.preventDefault();
        // console.log('По ссылке кликнули =', e);
        this.props.setNode(e);
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

    render2 = () => {
        //let strucTree = null;
        let curLevel = 0;
        let tmpRG="";
        let tmpDO="";
        let tmpMS="";
        let tmpKS="";
        let current_5 = "";
        let current_6 = "";
        let current_7 = "";
        let current_8 = "";
        let ul_mas = {
            id:"0",
            Name:"root",};
        // strucTree = this.props.strucArray.map((node) => {
        this.props.strucArray.forEach((node) => {
        // Первый уровень Регион
        if (!(tmpRG === node.id_RG)) {
            // let ul = [{id:node.id_RG, Name:node.NameRG}];
            if (curLevel === 0) {
                ul_mas.children = [{id:node.id_RG, Name:node.NameRG}];
            } else {
                ul_mas.children.push({id:node.id_RG, Name:node.NameRG});
            }
            if (curLevel === 1){
                //console.log('ul 11 =', ul, ' curLevel =', curLevel);
            } else if (curLevel === 2){
                //ul_mas[curi[0]][curi[1]] = ul;
            } else if (curLevel === 3){
                //ul_mas[curi[0]][curi[1]][curi[2]] = ul;
            } else if (curLevel === 4){
                //ul_mas[curi[0]][curi[1]][curi[2]][curi[3]] = ul;
            }

            curLevel = 1;
            tmpRG = node.id_RG;
        }
    
        // Второй уровень ДО
        if(!(tmpDO === node.id_DO)) {
            let ul = {id:node.id_DO, Name:node.NameDO};
            if (curLevel === 1) {
                let mm = ul_mas.children.length-1;
                ul_mas.children[mm].children = [ul];
            } else if (curLevel === 2){
                let mm = ul_mas.children.length-1;
                ul_mas.children[mm].children.push(ul);
            } else if (curLevel === 3){
                //console.log('ul 23 =', ul);
            } else if (curLevel === 4){
                //console.log('ul 24 =', ul);
            }

            curLevel = 2;
            tmpDO = node.id_DO;
        }
    
        // Третий уровень Месторождение
        if(node.id_MS == null ) {
            current_5 = "-";
            current_6 = "-";
        } else {
            current_5 = node.id_MS;
            current_6 = node.NameMS;
        }
    
        if((!(tmpMS===current_5)) && (!(current_5==="-"))) {
            let ul = {id:node.id_MS, Name:current_6};
            if (curLevel === 1) {
                //console.log('ul 31 =', ul);
            } else if (curLevel === 2) {
                let mm = ul_mas.children.length-1;
                let mmm = ul_mas.children[mm].children.length-1;
                ul_mas.children[mm].children[mmm].children = [ul];
            } else if (curLevel === 3){
                let mm = ul_mas.children.length-1;
                let mmm = ul_mas.children[mm].children.length-1;
                ul_mas.children[mm].children[mmm].children.push(ul);
            } else if (curLevel === 4){
                let mm = ul_mas.children.length-1;
                let mmm = ul_mas.children[mm].children.length-1;
                ul_mas.children[mm].children[mmm].children.push(ul);
            }

            curLevel = 3;
            tmpMS = current_5;
        }

        // Четвертый уровень Куст
        if(node.id_KS == null ){
            current_7 = "-";
            current_8 = "-";
        } else {
            current_7 = node.id_KS;
            current_8 = node.NameKS;
        }

        if((!(tmpKS===current_7)) && (!(current_7==="-"))) {
            let ul = {id:node.id_KS, Name:current_8};
            if (curLevel === 1){
                //console.log('ul 41 =', ul);
            } else if (curLevel === 2){
                //console.log('ul 42 =', ul);
            } else if (curLevel === 3){
                let m2 = ul_mas.children.length-1;
                let m3 = ul_mas.children[m2].children.length-1;
                let m4 = ul_mas.children[m2].children[m3].children.length-1;
                ul_mas.children[m2].children[m3].children[m4].children = [ul];
            } else if (curLevel === 4){
                let m2 = ul_mas.children.length-1;
                let m3 = ul_mas.children[m2].children.length-1;
                let m4 = ul_mas.children[m2].children[m3].children.length-1;
                ul_mas.children[m2].children[m3].children[m4].children.push(ul);
            }

            curLevel = 4;
            tmpKS = current_7;
            }
        }); // END strucArray.forEach

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
                {this.render2()}
            </React.Fragment>
        );
    }
}

StrucTree.propTypes = {
    strucArray: PropTypes.array,
    CurrentNode: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    CurNodeId: PropTypes.string,
};

StrucTree.defaultProps = {
    strucArray: [],
    CurrentNode: "0",
    isFetching: false, // изначально статус загрузки - ложь
    CurNodeId: "0",
};
