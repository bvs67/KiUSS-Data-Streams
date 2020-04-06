var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const SELECT_ALL_OBJ_QUERY = "select s1.id, s1.Name as 'NameMS'\n" +
                    "               , s2.id, s2.Name as 'NameKT'\n" +
                    "            from `kd_obj` s1\n" +
                    "            left outer join `kd_obj` s2\n" +
                    "              on s2.parent = s1.id\n" +
                    "           where s1.parent = 999999\n" +
                    "             and s2.id is not null\n" +
                    "           order by s1.Name, s2.Name";

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
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
//  res.json([{
//  	id: 1,
//  	username: "samsepi0l"
//  }, {
//  	id: 2,
//  	username: "D0loresH4ze"
//  }]);

    connection.query(SELECT_ALL_OBJ_QUERY, (err, result) => {
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
