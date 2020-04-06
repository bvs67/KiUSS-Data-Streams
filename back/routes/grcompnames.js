var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const SELECT_FLNAMES_QUERY = "SELECT id, Name\n" +
                             "  FROM `kds`.`kd_obj`\n" +
                             " WHERE parent = 999999\n" +
                             " ORDER BY Name";

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

    connection.query(SELECT_FLNAMES_QUERY, (err, result) => {
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
