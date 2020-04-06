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
        let curLevel = 0;
        //let curi = [0, 0, 0, 0];
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
        let data = {
            id:"0",
            Name:"root",
            children: [{id:"142AF1A2-7D9E-489E-A2DD-FFBCD83D4088",
                        Name:"Дальний Восток",
                        children: [{id:"C0C6BD68-1F3F-42C0-8D52-FEDEFA3C981A", Name:"АО \"РН-Шельф-Дальний Восток\""},
                                   {id:"31D2B976-B146-4D42-87CF-222B942AB4B0", Name:"ООО \"Венинефть\""},
                                   {id:"49808CA4-D908-43EC-AB2F-D783F6A5532E", Name:"ООО \"РН-Сахалинморнефтегаз\""},
                                   {id:"CCE1A16A-4A4A-4347-A142-5C2FF1D3C92C", Name:"ООО \"РН-Шельф-Арктика\""}],
                        },
                        {id:"C8491362-C0A8-47AD-A96B-ECF7CF387F91", 
                         Name:"Западная Сибирь",
                         children: [{id:"5F82B9FA-D85A-4D30-8BDC-AA0DEE4BA409", Name:"АО \"Корпорация Югранефть\""},
                                    {id:"E4639815-CB7A-41B0-A8A9-10FFB919BF0C", Name:"АО \"Нижневартовское нефтегазодобывающее предприятие\""},
                                    {id:"21240B24-18D4-40C1-96DC-4C52570AE22D", Name:"АО НК \"Конданефть\""},
                                    {id:"9C7128F7-F188-4665-A8C4-C6F53F98A54F", Name:"АО \"РН-Няганьнефтегаз\""}],
                        },
                        {id:"5", 
                         Name:"КРПУ",
                         children: [{id:"D7477F7A-4A69-4DAC-8C35-6B2D93F6F9FF", 
                                     Name:"ВСНК",
                                     children: [{id:"15C52CD2-C0C7-4CC8-B58E-051B7F53618B", 
                                                 Name:"Юрубчено-Тохомское", 
                                                 children: [{id:"A048EB2E-6E4B-4319-BA16-AC4D84524CA6", Name:"16"},
                                                            {id:"07EB7CE2-7F55-4FF0-81F8-3293CC6BA7C4", Name:"17"},
                                                            {id:"D3617470-280B-4D96-9A2C-6632C03B0C07", Name:"18"},
                                                            {id:"8A70AE57-36E5-4B41-BB6D-F37EC4A3FA83", Name:"19"}],}
                                               ],}
                                   ],}
                    ],     
                }; 
                //console.log(data);
        // [{id_RG:null, NameRG:null,id_DO:null, NameDO:null,id_MS:null, NameMS:null,id_KS:null, NameKS:null}]
        // let node = null;
        // strucTree = this.props.strucArray.map((node, i) => {
        strucTree = this.props.strucArray.map((node, i) => {
        //    console.log('ul_mas =', ul_mas);
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
            let ul = [{id:node.id_RG, Name:node.NameRG}];
            //console.log('ul 10 =', ul, ' curLevel =', curLevel);
            if (curLevel === 0) {
                //if (Array.isArray(ul_mas.children)) {
                //    ul_mas.children.push(ul);
                //} else {
                    ul_mas.children = [{id:node.id_RG, Name:node.NameRG}];
                //}
            //    console.log('ul_mas[0] =', ul_mas);
            //    console.log('curi =', curi);
            } else {
                ul_mas.children.push({id:node.id_RG, Name:node.NameRG});
            }
            if (curLevel === 1){
                //ul_mas.children.push(ul);
                //console.log('ul 11 =', ul, ' curLevel =', curLevel);
            //    console.log('ul_mas[1] =', ul_mas);
            //    console.log('curi =', curi);
            } else if (curLevel === 2){
                //ul_mas[curi[0]][curi[1]] = ul;
            } else if (curLevel === 3){
                //ul_mas[curi[0]][curi[1]][curi[2]] = ul;
            } else if (curLevel === 4){
                //ul_mas[curi[0]][curi[1]][curi[2]][curi[3]] = ul;
            }

            //ul_var =  ul_var + " <li><span><a href={node.id_RG}>"+node.NameRG+"</a></span></li> ";
            //let ul = {id_RG:node.id_RG, NameRG:node.NameRG,id_DO:null, NameDO:null,id_MS:null, NameMS:null,id_KS:null, NameKS:null}
            //ul_mas.push(ul);
            //ul_mas.children.push(ul);
            curLevel = 1;
            //curi[0]++;
            tmpRG = node.id_RG;
        }
    
        // Второй уровень ДО
        if(!(tmpDO === node.id_DO)) {
            let ul = {id:node.id_DO, Name:node.NameDO};
            //console.log('ul 2 =', ul);
            if (curLevel === 1) {
                let mm = ul_mas.children.length-1;
                //console.log('mm =', mm);
                ul_mas.children[mm].children = [ul];
                //console.log('ul 21 =', ul, ' curLevel =', curLevel);
            } else if (curLevel === 2){
                let mm = ul_mas.children.length-1;
                ul_mas.children[mm].children.push(ul);
                //ul_mas[curi[0]][curi[1]] = ul;
                //console.log('ul 22 =', ul);
            } else if (curLevel === 3){
                //console.log('ul 23 =', ul);
                //ul_mas[curi[0]][curi[1]][curi[2]] = ul;
            } else if (curLevel === 4){
                //console.log('ul 24 =', ul);
                //ul_mas[curi[0]][curi[1]][curi[2]][curi[3]] = ul;
            }

            //ul_var =  ul_var + " <li><span><a href={node.id_DO}>"+node.NameDO+"</a></span></li> ";
            //let ul = {id_RG:null, NameRG:null, id_DO:node.id_DO, NameDO:node.NameDO, id_MS:null, NameMS:null, id_KS:null, NameKS:null}
            //ul_mas.push(ul);

            curLevel = 2;
            //curi[1]++;
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
                //ul_mas[curi[0]][curi[1]] = ul;
                let mm = ul_mas.children.length-1;
                //console.log('mm =', mm);
                let mmm = ul_mas.children[mm].children.length-1;
                //console.log('mmm =', mmm);
                ul_mas.children[mm].children[mmm].children = [ul];
                //console.log('ul 32 =', ul);
            } else if (curLevel === 3){
                let mm = ul_mas.children.length-1;
                let mmm = ul_mas.children[mm].children.length-1;
                ul_mas.children[mm].children[mmm].children.push(ul);
                //console.log('ul 33 =', ul);
                //ul_mas[curi[0]][curi[1]][curi[2]] = ul;
            } else if (curLevel === 4){
                let mm = ul_mas.children.length-1;
                let mmm = ul_mas.children[mm].children.length-1;
                ul_mas.children[mm].children[mmm].children.push(ul);
                //console.log('ul 34 =', ul);
                //ul_mas[curi[0]][curi[1]][curi[2]][curi[3]] = ul;
            }

            //ul_var =  ul_var + " <li><span><a href={current_5}>"+current_6+"</a></span></li> ";
            //let ul = {id_RG:null, NameRG:null, id_DO:null, NameDO:null, id_MS:current_5, NameMS:current_6, id_KS:null, NameKS:null}
            //ul_mas.push(ul);

            curLevel = 3;
            //curi[2]++;
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
            } else if (curLevel === 3){
                let m2 = ul_mas.children.length-1;
                //console.log('m2 =', m2);
                let m3 = ul_mas.children[m2].children.length-1;
                //console.log('m3 =', m3);
                let m4 = ul_mas.children[m2].children[m3].children.length-1;
                ul_mas.children[m2].children[m3].children[m4].children = [ul];
                //console.log('ul 42 =', ul);
            } else if (curLevel === 3){
                let m2 = ul_mas.children.length-1;
                //console.log('m2 =', m2);
                let m3 = ul_mas.children[m2].children.length-1;
                //console.log('m3 =', m3);
                let m4 = ul_mas.children[m2].children[m3].children.length-1;
                ul_mas.children[m2].children[m3].children[m4].children.push(ul);
                //console.log('ul 43 =', ul);
            } else if (curLevel === 4){
                let m2 = ul_mas.children.length-1;
                //console.log('m2 =', m2);
                let m3 = ul_mas.children[m2].children.length-1;
                //console.log('m3 =', m3);
                let m4 = ul_mas.children[m2].children[m3].children.length-1;
                ul_mas.children[m2].children[m3].children[m4].children.push(ul);
                //console.log('ul 44 =', ul);
            }

            //ul_var =  ul_var + " <li><span><a href={current_7}>"+current_8+"</a></span></li> ";
            //let ul = {id_RG:null, NameRG:null, id_DO:null, NameDO:null, id_MS:null, NameMS:null, id_KS:current_7, NameKS:current_8}
            //ul_mas.push(ul);

            curLevel = 4;
            //curi[3]++;
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
        //return(ul_mas);
        //ul_var = ul_var + " </ul> ";
        if (!(ul_mas.length===0)) {
        console.log('ul_mas =', ul_mas);
        //console.log('curi =', curi);
        //console.log('ul_mas[0] =', ul_mas[0]);
        //console.log('ul_mas[1] =', ul_mas[1]);
        //console.log('ul_mas[2] =', ul_mas[2]);
        //console.log('ul_mas[2][5] =', ul_mas[2][5]);
        //console.log('ul_mas[2].id =', ul_mas[2].id);
        //console.log('ul_mas[2].Name =', ul_mas[2].Name);
//
//        console.log('isArray(nodes[2]) =', Array.isArray(ul_mas[2]));
        }
        //console.log('ul_mas[3] =', ul_mas[3]);
        //console.log('ul_mas[4] =', ul_mas[4]);
        //console.log('ul_mas[5] =', ul_mas[5]);
        //console.log('ul_mas[6] =', ul_mas[6]);
        //console.log('ul_mas[7] =', ul_mas[7]);
        //console.log('ul_mas[8] =', ul_mas[8]);
        //console.log('ul_mas[9] =', ul_mas[9]);
        //console.log('isArray(nodes[0]) =', Array.isArray(ul_mas[0]));
        //console.log('isArray(nodes[1]) =', Array.isArray(ul_mas[1]));
        //console.log('isArray(nodes[2]) =', Array.isArray(ul_mas[2]));
        //console.log('isArray(nodes[3]) =', Array.isArray(ul_mas[3]));
        //console.log('isArray(nodes[4]) =', Array.isArray(ul_mas[4]));
        //console.log('isArray(nodes[5]) =', Array.isArray(ul_mas[5]));
        //console.log('isArray(nodes[6]) =', Array.isArray(ul_mas[6]));
        //console.log('isArray(nodes[7]) =', Array.isArray(ul_mas[7]));
        //console.log('isArray(nodes[8]) =', Array.isArray(ul_mas[8]));
        //console.log('isArray(nodes[9]) =', Array.isArray(ul_mas[9]));

        const renderTree = nodes => (
            <TreeView key={nodes.id} nodeLabel={nodes.Name} defaultCollapsed={false}>
                {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : null}
            </TreeView>
        );

        if (ul_mas.length===0) {
            return null;
        } else {
            //return ( renderTree(data))
            return ( renderTree(ul_mas))
        }
// ---------------------------------------------------------------
//        ul_mas.map((node, i) => {
//            return (
//                <TreeView key={i} nodeLabel={node.NameRG} defaultCollapsed={false}>
//                    <TreeView key={node.id_DO} nodeLabel={node.NameDO} defaultCollapsed={false}>
//                        <TreeView key={node.id_MS} nodeLabel={node.NameMS} defaultCollapsed={false}>
//                            <TreeView key={node.id_KS} nodeLabel={node.NameKS} defaultCollapsed={false}>
//                            <div className="info">Регион: {node.NameRG}</div>
//                            </TreeView>
//                        </TreeView>
//                    </TreeView>
//                </TreeView>
//            )
//        })
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

