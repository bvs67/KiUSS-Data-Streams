var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Huawei_998',
    database: 'kds'
})

connection.connect(err => {
    if(err) {
        return err;
    }
})

/* GET users listing. */
router.get('/', function(req, res, next) {

    const{ id } = req.query
    const COMP_QUERY = "SELECT '1' as 'qnum',kd.id, kd.sh_name, kd.sh_quant, kd.sh_weight, kd.sh_serial, kd.sh_inventory, ke.Dept_id\n" +
                       "            FROM kds.kd_obj_detail kd, kds.employee ke, kds.kd_obj ko\n" +
                       "           WHERE kd.obj=ko.id\n" +
                       "             AND SUBSTR(ke.HComment,-3)=ko.Name\n"+
                       "             AND kd.obj='"+id+"'\n"+
                       "             AND kd.sh_type=\"server\""+
                       " UNION ALL\n"+
                       "SELECT '2' as 'qnum',kd.id, kd.sh_name, kd.sh_quant, kd.sh_weight, kd.sh_serial, kd.sh_inventory, ke.Dept_id\n" +
                       "            FROM kds.kd_obj_detail kd, kds.employee ke, kds.kd_obj ko\n" +
                       "           WHERE kd.obj=ko.id\n" +
                       "             AND SUBSTR(ke.HComment,-3)=ko.Name\n"+
                       "             AND kd.obj='"+id+"'\n"+
                       "             AND kd.sh_type=\"invemtory\""+
                       " UNION ALL\n"+
                       "SELECT '3' as 'qnum',kd.id, kd.sh_name, kd.sh_quant, kd.sh_weight, kd.sh_serial, kd.sh_inventory, ke.Dept_id\n" +
                       "            FROM kds.kd_obj_detail kd, kds.employee ke, kds.kd_obj ko\n" +
                       "           WHERE kd.obj=ko.id\n" +
                       "             AND SUBSTR(ke.HComment,-3)=ko.Name\n"+
                       "             AND kd.obj='"+id+"'\n"+
                       "             AND kd.sh_type=\"Сервер УМБ\""+
                       " UNION ALL\n"+
                       "SELECT '4' as 'qnum',kd.id, kd.sh_name, kd.sh_quant, kd.sh_weight, kd.sh_serial, kd.sh_inventory, ke.Dept_id\n" +
                       "            FROM kds.kd_obj_detail kd, kds.employee ke, kds.kd_obj ko\n" +
                       "           WHERE kd.obj=ko.id\n" +
                       "             AND SUBSTR(ke.HComment,-3)=ko.Name\n"+
                       "             AND kd.obj='"+id+"'\n"+
                       "             AND kd.sh_type=\"АРМ Супер\""+
                       " UNION ALL\n"+
                       "SELECT '5' as 'qnum',kd.id, kd.sh_name, kd.sh_quant, kd.sh_weight, kd.sh_serial, kd.sh_inventory, ke.Dept_id\n" +
                       "            FROM kds.kd_obj_detail kd, kds.employee ke, kds.kd_obj ko\n" +
                       "           WHERE kd.obj=ko.id\n" +
                       "             AND SUBSTR(ke.HComment,-3)=ko.Name\n"+
                       "             AND kd.obj='"+id+"'\n"+
                       "             AND kd.sh_type=\"МЭ\""+
                       " UNION ALL\n"+
                       "SELECT '6' as 'qnum',kd.id, kd.sh_name, kd.sh_quant, kd.sh_weight, kd.sh_serial, kd.sh_inventory, ke.Dept_id\n" +
                       "            FROM kds.kd_obj_detail kd, kds.employee ke, kds.kd_obj ko\n" +
                       "           WHERE kd.obj=ko.id\n" +
                       "             AND SUBSTR(ke.HComment,-3)=ko.Name\n"+
                       "             AND kd.obj='"+id+"'\n"+
                       "             AND kd.sh_type=\"Место установки\"";

    connection.query(COMP_QUERY, (err, result) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: result
            })
        }
    })

});

// connection.end();

module.exports = router;

