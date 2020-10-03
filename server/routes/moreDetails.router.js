const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//route set up to take data sent and 
//perform a query to the DB to return a specific movie
router.post('/', (req, res) => {
console.log('our req.body is', req.body)
  const queryText = `SELECT * FROM "movies" where id = $1`;
  pool.query(queryText, [req.body.id])
      .then( (result) => {
        res.send(result.rows);
      })
      .catch((error) => {
          console.log('we have an error ', error);
          res.sendStatus(500);
      });
});
module.exports = router;