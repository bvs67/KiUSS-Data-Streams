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

    const{ Name, id } = req.query
console.log(Name, id)
    const UPDATE_OBJ_QUERY = 'update kd_obj set Name=\''+Name+'\' where id='+id
    connection.query(UPDATE_OBJ_QUERY, (err) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('KDS object edit saved')
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
