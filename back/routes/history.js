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
    // console.log(id)
    const GET_OBJ_HISTORY = 'SELECT id, DATE_FORMAT(h_begin, \"%d.%m.%Y\") "h_beg", DATE_FORMAT(h_end, \"%d.%m.%Y\") "h_end", h_comment\n' +
                            '  FROM kd_obj_history\n' +
                            ' WHERE obj=\''+id+'\'\n'+
                            ' ORDER BY h_begin'

//    const GET_OBJ_HISTORY = 'SELECT h_begin, h_end, h_comment\n' +
//                            '  FROM kd_obj_history\n' +
//                            ' WHERE obj='+id+'\n'
//    console.log(GET_OBJ_HISTORY)
    connection.query(GET_OBJ_HISTORY, (err, result) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: result
            })
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
