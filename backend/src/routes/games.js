const {Router}= require('express');
const {getGames, createGame, getGame, deleteGame, editGame} = require('../controllers/gamesController');

//initialize
const router = Router();

//routes
router.route('/')
  .get(getGames)
  .post(createGame)

router.route('/:id')
  .get(getGame)
  .put(editGame)
  .delete(deleteGame)

module.exports = router;