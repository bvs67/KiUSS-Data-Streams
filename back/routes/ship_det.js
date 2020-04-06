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
    const SHIP_DET_QUERY = "SELECT id, sh_code, sh_name, sh_type, sh_quant, sh_weight\n" +
                           "  FROM kds.kd_shipment_detail\n" +
                           "WHERE shipment='"+id+"'";

    connection.query(SHIP_DET_QUERY, (err, result) => {
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

