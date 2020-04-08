import React from 'react';
import PropTypes from 'prop-types';
import './KDStyle.css';

export class DashCenter extends React.Component {

    onBtnClick = () => {
        // console.log("CurrentComp1 =", this.props.CurrentComp);
        this.props.compReload(this.props.CurrentComp);
    };

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        // console.log("CurrentComp =", this.props.CurrentComp);
        // console.log("prevProps.CurrentComp =", prevProps.CurrentComp);
        if (this.props.CurrentComp !== prevProps.CurrentComp) {
            this.props.compReload(this.props.CurrentComp);
        }
    }

    _onClick = (e) => {
        // e.preventDefault();
        console.log('По ссылке кликнули =', e);
        //console.log('CurrentRow =', this.props.Node);
        // this.props.setNode(e);
        this.props.setCurNodeId(e);
        this.props.getMenuPoint(1);
    };

    renderComp1 = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.props.compArray.map(arrLine => {
            if(arrLine.qnum==="1")
            return (
                <tr key={arrLine.id}>
                    <td className="whiteLine">{arrLine.sh_name}</td>
                    <td className="whiteLine">{arrLine.sh_quant}</td>
                    <td className="whiteLine">{arrLine.sh_weight}</td>
                    <td className="whiteLine">{arrLine.sh_serial}</td>
                    <td className="whiteLine">{arrLine.sh_inventory}</td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    renderComp2 = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.props.compArray.map(arrLine => {
            if(arrLine.qnum==="2")
            return (
                <tr key={arrLine.id}>
                    <td className="whiteLine">{arrLine.sh_name}</td>
                    <td className="whiteLine">{arrLine.sh_quant}</td>
                    <td className="whiteLine">{arrLine.sh_weight}</td>
                    <td className="whiteLine">{arrLine.sh_serial}</td>
                    <td className="whiteLine">{arrLine.sh_inventory}</td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    renderComp3 = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.props.compArray.map(arrLine => {
            if(arrLine.qnum==="3")
            return (
                <tr key={arrLine.id}>
                    <td className="whiteLine">{arrLine.sh_name}</td>
                    <td className="whiteLine">{arrLine.sh_quant}</td>
                    <td className="whiteLine">{arrLine.sh_weight}</td>
                    <td className="whiteLine">{arrLine.sh_serial}</td>
                    <td className="whiteLine">{arrLine.sh_inventory}</td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    renderComp4 = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.props.compArray.map(arrLine => {
            if(arrLine.qnum==="4")
            return (
                <tr key={arrLine.id}>
                    <td className="greyLine">{arrLine.sh_name}</td>
                    <td className="greyLine">{arrLine.sh_quant}</td>
                    <td className="greyLine">{arrLine.sh_weight}</td>
                    <td className="greyLine">{arrLine.sh_serial}</td>
                    <td className="greyLine">{arrLine.sh_inventory}</td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    renderComp5 = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.props.compArray.map(arrLine => {
            if(arrLine.qnum==="5")
            return (
                <tr key={arrLine.id}>
                    <td className="whiteLine">{arrLine.sh_name}</td>
                    <td className="whiteLine">{arrLine.sh_quant}</td>
                    <td className="whiteLine">{arrLine.sh_weight}</td>
                    <td className="whiteLine">{arrLine.sh_serial}</td>
                    <td className="whiteLine">{arrLine.sh_inventory}</td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    renderComp6 = () => {
        let lineObj = null;
        //console.log('compArray RC =', this.props.compArray);
        lineObj = this.props.compArray.map(arrLine => {
            if(arrLine.qnum==="6")
            return (
                <tr key={arrLine.id}>
                    <td className="greyLine">{arrLine.sh_name}</td>
                    <td className="greyLine">{<a href="#" onClick={this._onClick.bind(this, arrLine.Dept_id)}>{arrLine.sh_quant}</a>}</td>
                    <td className="greyLine">{arrLine.sh_weight}</td>
                    <td className="greyLine">{arrLine.sh_serial}</td>
                    <td className="greyLine">{arrLine.sh_inventory}</td>
                </tr>
            );
        }, this);
        return lineObj;
    };

    render() {
        const { compArray, isFetching } = this.props; // вытащили isFetching
        //console.log('compArray R =', compArray);
        // console.log('isFetching', isFetching);
        return (
            <React.Fragment>
                <h4 className="redHeadLine">Состав комплекта УМБ</h4>
                <table>
                    <tbody>
                        <tr key="1" className="whiteHeadline">
                            <td>Server</td>
                            <td>Model</td>
                            <td>Proc</td>
                            <td>RAM(Gb)</td>
                            <td>HDD(Gb)</td>
                        </tr>
                        {this.renderComp1()}
                        <tr key="2" className="whiteline">
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr key="3" className="whiteHeadline">
                            <td>Server Инв.№</td>
                            <td>Server S/N</td>
                            <td>МЭ Инв.№</td>
                            <td>МЭ MAC</td>
                            <td>МЭ S/N</td>
                        </tr>
                        {this.renderComp2()}
                        <tr key="4" className="whiteline">
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr key="5" className="whiteHeadline">
                            <td>Тип объекта</td>
                            <td>Ip-адрес</td>
                            <td>Маска подсети</td>
                            <td>Шлюз</td>
                            <td> </td>
                        </tr>
                        {this.renderComp3()}
                        {this.renderComp4()}
                        {this.renderComp5()}
                        {this.renderComp6()}
                        </tbody>
                </table>

                <button className="buttons" onClick={this.onBtnClick}>
                    Load Data
                </button>

                {isFetching ? (
                    <p>Загрузка...</p>
                ) : (
                    <p>Загружено {compArray.length} строк.</p>
                )}
            </React.Fragment>
        );
    }
}

DashCenter.propTypes = {
    compArray: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    CurrentComp: PropTypes.number,
};

DashCenter.defaultProps = {
    compArray: [],
    // [{id: 3,
    //    sh_name: "HP ProLiant",
    //    sh_quant: "ML110 G5",
    //    sh_weight: "Dual CPU E2160",
    //    sh_serial: "4",
    //    sh_inventory: "3,5\"_250*2",
    //    Dept_id: "4354473C-325D-4BE3-B416-BECA810ACB8D",
    //    }],     
    isFetching: false,
    CurrentComp: 0,
};
