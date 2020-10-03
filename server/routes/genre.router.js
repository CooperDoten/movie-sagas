const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:title', (req, res) => {
  //GET a specific genre for a specific movie
  //based on req.params.title sent from function* fetchGenreSaga
  //index.js line 45
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
router.get('/', (req, res) => {
  // GET all genres
  //associated Saga function
  //function* fetchGenresSaga index.js line 60
  console.log('in our genres get')
  const queryText = `SELECT * FROM "genres" ORDER BY name ASC`;
  pool.query(queryText)
      .then( (result) => {
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log(`Error on query ${error}`);
          res.sendStatus(500);
      });
})

module.exports = router;