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
    console.log(id)
    const DELETE_HIST_QUERY = 'delete from kd_obj_history where id =\''+id+'\''
    connection.query(DELETE_HIST_QUERY, (err) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('KDS hist record deleted success')
        }
    })

//    connection.query(SELECT_ALL_USER_QUERY, (err, result) => {
//        if(err) {
//            return res.send(err)
//        } else {
//            return res.json({
//                data: result
//            })
//        }
//    })

});

// connection.end();

module.exports = router;
