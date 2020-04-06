import React from 'react';
//import TreeView from 'react-treeview';
import {TreeView} from '@material-ui/core';

//import './react-treeview.css'
// import PropTypes from 'prop-types';
import './KDStyle.css';
// import { History } from '../components/History';

export class StrucTree extends React.Component {

    componentDidMount() {
        this.props.getStrucTree();
    }

    renderStruc = () => {
        let strucTree = null;
        let tmpRG="";
        let tmpDO="";
        let tmpMS="";
        let tmpKS="";
        let current_5 = "";
        let current_6 = "";
        let current_7 = "";
        let current_8 = "";
        //let ul = null; // [{id_RG:null, NameRG:null,id_DO:null, NameDO:null,id_MS:null, NameMS:null,id_KS:null, NameKS:null}]
        let ul = {id_RG:null, NameRG:null,id_DO:null, NameDO:null,id_MS:null, NameMS:null,id_KS:null, NameKS:null};
        //let ul2 = {id_RG:null, NameRG:null,id_DO:null, NameDO:null,id_MS:null, NameMS:null,id_KS:null, NameKS:null};
        //let ul3 = {id_RG:null, NameRG:null,id_DO:null, NameDO:null,id_MS:null, NameMS:null,id_KS:null, NameKS:null};
        //let ul4 = {id_RG:null, NameRG:null,id_DO:null, NameDO:null,id_MS:null, NameMS:null,id_KS:null, NameKS:null};
        strucTree = this.props.strucArray.map((node, i) => {
            // Первый уровень Регион
            if (!(tmpRG === node.id_RG)) {
                ul = {id_RG:node.id_RG, NameRG:node.NameRG,id_DO:null, NameDO:null,id_MS:null, NameMS:null,id_KS:null, NameKS:null}
                tmpRG = node.id_RG;
                return (
                    <TreeView key={i} nodeLabel={ul.NameRG} defaultCollapsed={false}>
                        <TreeView key={ul.id_DO} nodeLabel={ul.NameDO} defaultCollapsed={false}>
                            <TreeView key={ul.id_MS} nodeLabel={ul.NameMS} defaultCollapsed={false}>
                                <div className="info">Куст: {ul.NameKS} </div>
                            </TreeView>
                        </TreeView>
                    </TreeView>
                );
                }
            // Второй уровень ДО
            if(!(tmpDO === node.id_DO)) {
                ul = {id_RG:null, NameRG:null, id_DO:node.id_DO, NameDO:node.NameDO, id_MS:null, NameMS:null, id_KS:null, NameKS:null}
                tmpDO = node.id_DO;
                return (
                    <TreeView key={i} nodeLabel={ul.NameRG} defaultCollapsed={false}>
                        <div className="info">Куст: {ul.NameDO} </div>
                    </TreeView>
                );
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
                ul = {id_RG:null, NameRG:null, id_DO:null, NameDO:null, id_MS:current_5, NameMS:current_6, id_KS:null, NameKS:null}
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
                ul = {id_RG:null, NameRG:null, id_DO:null, NameDO:null, id_MS:null, NameMS:null, id_KS:current_7, NameKS:current_8}
                tmpKS = current_7;
            }
            return (
                <TreeView key={i} nodeLabel={ul.NameRG} defaultCollapsed={false}>
                    <TreeView key={ul.id_DO} nodeLabel={ul.NameDO} defaultCollapsed={false}>
                        <TreeView key={ul.id_MS} nodeLabel={ul.NameMS} defaultCollapsed={false}>
                            <div className="info">Куст: {ul.NameKS} </div>
                        </TreeView>
                    </TreeView>
                </TreeView>
            );
        }, this);
        return strucTree;
    };

    render() {
        return (
            <React.Fragment>
                <h4 className="redHeadLine">ПАО НК "Роснефть"</h4>
                {this.renderStruc()}
                
            </React.Fragment>
        );
    }
}

