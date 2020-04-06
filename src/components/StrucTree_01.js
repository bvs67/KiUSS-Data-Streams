import React from 'react';
//import TreeView from 'react-treeview';
import './react-treeview.css'
// import PropTypes from 'prop-types';
import './KDStyle.css';
// import { History } from '../components/History';

export class StrucTree extends React.Component {

    componentDidMount() {
        this.props.getStrucTree();
    }

    renderStrucTree = () => {
        let lineObj = null;
        let i = 0;
        lineObj = this.props.strucArray.map(arrLine => {
            //if (arrLine.visible === 1) {
            i++;
            return (
                <tr key={i}>
                    <td className="tableMain">{arrLine.id_RG}</td>
                    <td className="tableMain">{arrLine.NameRG}</td>
                    <td className="tableMain">{arrLine.NameDO}</td>
                    <td className="tableMain">{arrLine.NameMS}</td>
                    <td className="tableMain">{arrLine.NameKS}</td>
                </tr>
            );
            //} {this.renderStrucTree()}
        }, this);
    
        return lineObj;
    };

    render2 = () => {
        let strucTree = null;
        let ul_var = "";
        let curLevel = 0;
        let tmpRG="";
        let tmpDO="";
        let tmpMS="";
        let tmpKS="";
        let current_5 = "";
        let current_6 = "";
        let current_7 = "";
        let current_8 = "";
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

//console.log('i =', i);
//console.log('tmpRG =', tmpRG);
//console.log('node.id_RG =', node.id_RG);
    // Первый уровень Регион
    if (!(tmpRG === node.id_RG)) {
        if (curLevel === 0) {
            ul_var = ul_var + " <ul> ";
        } else if (curLevel === 1){
            ul_var = ul_var + " </ul>    </li> ";
        } else if (curLevel === 2){
            ul_var = ul_var + " </li>    </ul>    </li> ";
        } else if (curLevel === 3){
            ul_var = ul_var + " </li>    </ul>    </li> ";
        } else if (curLevel === 4){
            ul_var = ul_var + " </li>    </ul>    </li>    </li>    </ul>    </li> ";
        }

        ul_var =  ul_var + " <li><span><a href={node.id_RG}>"+node.NameRG+"</a></span></li> ";

        curLevel = 1;
        tmpRG = node.id_RG;
//        console.log(tmpRG);
    }
//    console.log('curLevel =', curLevel);
//    console.log('i =', i);
//    console.log('tmpDO =', tmpDO);
//    console.log('node.id_DO =', node.id_DO);
    
    // Второй уровень ДО
    if(!(tmpDO === node.id_DO)) {
        if (curLevel === 1) {
            ul_var = ul_var + " <ul> ";
        } else if (curLevel === 2){
            ul_var = ul_var + " </li> ";
        } else if (curLevel === 3){
            ul_var = ul_var + " </li>    </ul>    </li> ";
        } else if (curLevel === 4){
            ul_var = ul_var + " </li>    </ul>    </li>    </li>    </ul>    </li> ";
        }

        ul_var =  ul_var + " <li><span><a href={node.id_DO}>"+node.NameDO+"</a></span></li> ";

        curLevel = 2;
        tmpDO = node.id_DO;
//        console.log('tmpDO =', tmpDO);
    }
//    console.log('curLevel =', curLevel);
//    console.log('i =', i);
//    console.log('tmpMS =', tmpMS);
//    console.log('node.id_MS =', node.id_MS);
    
    // Третий уровень Месторождение
    if(node.id_MS == null ) {
        current_5 = "-";
        current_6 = "-";
    } else {
        current_5 = node.id_MS;
        current_6 = node.NameMS;
    }
//    console.log('current_5 =', current_5);
//    console.log('current_6 =', current_6);
    
    if((!(tmpMS===current_5)) && (!(current_5==="-"))) {
        if (curLevel === 2) {
            ul_var = ul_var + " <ul> ";
        } else if (curLevel === 3){
            ul_var = ul_var + " </li> ";
        } else if (curLevel === 4){
            ul_var = ul_var + " </li>    </ul>    </li> ";
        }

        ul_var =  ul_var + " <li><span><a href={current_5}>"+current_6+"</a></span></li> ";

        curLevel = 3;
        tmpMS = current_5;
//        console.log('tmpMS =', tmpMS);
    }

    // Четвертый уровень Куст
    if(node.id_KS == null ){
        current_7 = "-";
        current_8 = "-";
    } else {
        current_7 = node.id_KS;
        current_8 = node.NameKS;
    }

//    console.log('current_7 =', current_7);
//    console.log('current_8 =', current_8);

    if((!(tmpKS===current_7)) && (!(current_7==="-"))) {
        if (curLevel === 3){
            ul_var = ul_var + " <ul> ";
        } else if (curLevel === 4){
            ul_var = ul_var + " </li> ";
        }

        ul_var =  ul_var + " <li><span><a href={current_7}>"+current_8+"</a></span></li> ";

        curLevel = 4;
        tmpKS = current_7;
    }
 //   console.log('ul_var=',ul_var);
    // return ( ul_var );
} // END FOR, this); // END WHILE
         );

    if(curLevel === 0) {
        ul_var = ul_var + " </ul> ";
    } else if (curLevel === 1) {
        ul_var = ul_var + " </li>    </ul> ";
    } else if (curLevel === 2){
        ul_var = ul_var + " </li>    </ul>    </li>    </ul> ";
    }

    ul_var = ul_var + " </ul> ";
    
// ---------------------------------------------------------------
//        }, this);
return  ul_var ;    
//        return strucTree;
//        return null;
    }

    render() {

        return (
            <React.Fragment>
                <h4 className="redHeadLine">ПАО НК "Роснефть"</h4>
{this.render2()}
                <table>
                    <thead>
                        <tr className="whiteHeadline">
                            <td className="tableMain">Код</td>
                            <td className="tableMain">РПУ</td>
                            <td className="tableMain">ОГ</td>
                            <td className="tableMain">Месторождение</td>
                            <td className="tableMain">Куст</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.strucArray.map(arrLine => {
                            return (
                                <tr key={arrLine.id_RG+arrLine.id_DO+arrLine.id_MS+arrLine.id_KS}>
                                    <td className="tableMain">{arrLine.id_RG}</td>
                                    <td className="tableMain">{arrLine.NameRG}</td>
                                    <td className="tableMain">{arrLine.NameDO}</td>
                                    <td className="tableMain">{arrLine.NameMS}</td>
                                    <td className="tableMain">{arrLine.NameKS}</td>
                                </tr>
                            )}
                        )}
                    </tbody>
                </table>


            </React.Fragment>
        );
    }
}

