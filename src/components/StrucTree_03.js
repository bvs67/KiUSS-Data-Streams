import React from 'react';
import TreeView from 'react-treeview';
import './react-treeview.css'
// import PropTypes from 'prop-types';
//import './KDStyle.css';
// import { History } from '../components/History';

export class StrucTree extends React.Component {

    componentDidMount() {
        this.props.getStrucTree();
    }

    render2 = () => {
        let strucTree = null;
        //let ul_var = "";
        //let curLevel = 0;
        let tmpRG="";
        let tmpDO="";
        let tmpMS="";
        let tmpKS="";
        let current_5 = "";
        let current_6 = "";
        let current_7 = "";
        let current_8 = "";
        let ul_mas = []; // [{id_RG:null, NameRG:null,id_DO:null, NameDO:null,id_MS:null, NameMS:null,id_KS:null, NameKS:null}]
        // let node = null;
        // strucTree = this.props.strucArray.map((node, i) => {
        strucTree = this.props.strucArray.map((node) => {
        //const { strucArray } = this.props;
        //console.log('strucArray.length =', strucArray.length);
//        for (let i=0; i < this.props.strucArray.length; i++ ) {
//            node = this.props.strucArray[i];
            // console.log(node);
            // Отсекаем невидимые строки
//    let s9=node.vi_RG;
//    if (s9==null) { s9 = "1"; }
//    let s10=node.vi_DO;
//    if (s10==null) { s10 = "1"; }
//    let s11=node.vi_MS;
//    if (s11==null) { s11 = "1"; }
//    let s12=node.vi_KS;
//    if (s12==null) { s12 = "1"; }
//    if ((s9=="0") || (s10=="0") || (s11=="0") || (s12=="0")) {
//        continue;
//    }

        // Первый уровень Регион
        if (!(tmpRG === node.id_RG)) {
            //if (curLevel === 0) {
            //    ul_var = ul_var + " <ul> ";
            //} else if (curLevel === 1){
            //    ul_var = ul_var + " </ul>    </li> ";
            //} else if (curLevel === 2){
            //    ul_var = ul_var + " </li>    </ul>    </li> ";
            //} else if (curLevel === 3){
            //    ul_var = ul_var + " </li>    </ul>    </li> ";
            //} else if (curLevel === 4){
            //    ul_var = ul_var + " </li>    </ul>    </li>    </li>    </ul>    </li> ";
            //}

            //ul_var =  ul_var + " <li><span><a href={node.id_RG}>"+node.NameRG+"</a></span></li> ";
            let ul = {id_RG:node.id_RG, NameRG:node.NameRG,id_DO:null, NameDO:null,id_MS:null, NameMS:null,id_KS:null, NameKS:null}
            ul_mas.push(ul);

            //curLevel = 1;
            tmpRG = node.id_RG;
        }
    
        // Второй уровень ДО
        if(!(tmpDO === node.id_DO)) {
            //if (curLevel === 1) {
            //    ul_var = ul_var + " <ul> ";
            //} else if (curLevel === 2){
            //    ul_var = ul_var + " </li> ";
            //} else if (curLevel === 3){
            //    ul_var = ul_var + " </li>    </ul>    </li> ";
            //} else if (curLevel === 4){
            //    ul_var = ul_var + " </li>    </ul>    </li>    </li>    </ul>    </li> ";
            //}

            //ul_var =  ul_var + " <li><span><a href={node.id_DO}>"+node.NameDO+"</a></span></li> ";
            let ul = {id_RG:null, NameRG:null, id_DO:node.id_DO, NameDO:node.NameDO, id_MS:null, NameMS:null, id_KS:null, NameKS:null}
            ul_mas.push(ul);

            //curLevel = 2;
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
            //if (curLevel === 2) {
            //    ul_var = ul_var + " <ul> ";
            //} else if (curLevel === 3){
            //    ul_var = ul_var + " </li> ";
            //} else if (curLevel === 4){
            //    ul_var = ul_var + " </li>    </ul>    </li> ";
            //}

            //ul_var =  ul_var + " <li><span><a href={current_5}>"+current_6+"</a></span></li> ";
            let ul = {id_RG:null, NameRG:null, id_DO:null, NameDO:null, id_MS:current_5, NameMS:current_6, id_KS:null, NameKS:null}
            ul_mas.push(ul);

            //curLevel = 3;
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
            //if (curLevel === 3){
            //    ul_var = ul_var + " <ul> ";
            //} else if (curLevel === 4){
            //    ul_var = ul_var + " </li> ";
            //}

            //ul_var =  ul_var + " <li><span><a href={current_7}>"+current_8+"</a></span></li> ";
            let ul = {id_RG:null, NameRG:null, id_DO:null, NameDO:null, id_MS:null, NameMS:null, id_KS:current_7, NameKS:current_8}
            ul_mas.push(ul);

            //curLevel = 4;
            tmpKS = current_7;
            }
        }); // END FOR, this); // END WHILE

        //if(curLevel === 0) {
        //    ul_var = ul_var + " </ul> ";
        //} else if (curLevel === 1) {
        //    ul_var = ul_var + " </li>    </ul> ";
        //} else if (curLevel === 2){
        //    ul_var = ul_var + " </li>    </ul>    </li>    </ul> ";
        //}

        //ul_var = ul_var + " </ul> ";
        console.log('ul_mas =', ul_mas);
// ---------------------------------------------------------------
        ul_mas.map((node, i) => {
            return (
                <TreeView key={i} nodeLabel={node.NameRG} defaultCollapsed={false}>
                    <TreeView key={node.id_DO} nodeLabel={node.NameDO} defaultCollapsed={false}>
                        <TreeView key={node.id_MS} nodeLabel={node.NameMS} defaultCollapsed={false}>
                            <TreeView key={node.id_KS} nodeLabel={node.NameKS} defaultCollapsed={false}>
                            <div className="info">Регион: {node.NameRG}</div>
                            </TreeView>
                        </TreeView>
                    </TreeView>
                </TreeView>
            )
        })
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

