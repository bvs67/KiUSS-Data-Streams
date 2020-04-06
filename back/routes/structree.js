var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const STRUCTURE_QUERY = "select s1.dbid as 'id_RG', s1.nameRu as 'NameRG'\n" +
                        "     , s2.dbid as 'id_DO', s2.nameRu as 'NameDO'\n" +
                        "     , s3.dbid as 'id_MS', s3.nameRu as 'NameMS'\n" +
                        "     , s4.dbid as 'id_KS', s4.nameRu as 'NameKS'\n" +
                        "     , s1.visible as 'vi_RG', s2.visible as 'vi_DO', s3.visible as 'vi_MS', s4.visible  as 'vi_KS'\n"+
                        "  from company_structure s1\n" +
                        "  left outer join company_structure s2\n" +
                        "    on s2.uidParent = s1.dbid\n" +
                        "  left outer join company_structure s3\n" +
                        "    on s3.uidParent = s2.dbid\n" +
                        "  left outer join company_structure s4  \n" +
                        "    on s4.uidParent = s3.dbid\n" +
                        "where s1.uidParent = 'BD8992D3-E33A-4C95-946E-7EBC83065970'\n" +
                        "order by s1.nameRu, s2.nameRu, s3.nameRu, s4.nameRu";

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

    connection.query(STRUCTURE_QUERY, (err, result) => {
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
