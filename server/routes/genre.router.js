const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:title', (req, res) => {
  // Add query to get all genres
console.log('our req.params on genre', req.params)
const title = req.params.title;
  const joinQueryText = ` SELECT * FROM "movies_genres"
  JOIN "movies" ON "movies"."id" = "movies_genres"."movies_id"
  JOIN "genres" ON "movies_genres"."genres_id" = "genres"."id"
 WHERE "movies"."title" = $1;`;
 pool.query(joinQueryText, [title])
 .then( (result) => {
  res.send(result.rows);
 })
  .catch( (error) => {
    console.log('got an error in genre.router', error);
    res.sendStatus(500);
});
});

module.exports = router;