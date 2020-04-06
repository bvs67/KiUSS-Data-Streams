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

    const{ Name, parent } = req.query
console.log(Name, parent)
    const INSERT_OBJ_QUERY = 'insert into kd_obj (Name, parent) values (\''+Name+'\','+parent+')'
    connection.query(INSERT_OBJ_QUERY, (err) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('KDS object added success')
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
