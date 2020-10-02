const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {

console.log('our req.body is', req.body)
  const queryText = `SELECT * FROM "movies" where id = $1`;
  pool.query(queryText, [req.body.id])
      .then( (result) => {
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log(`Error on query ${error}`);
          res.sendStatus(500);
      });
});


module.exports = router;