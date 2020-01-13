const gamesCtrl = {};
const Game = require('../models/Game');


//get games
gamesCtrl.getGames = async (req, res) => {
  const games = await Game.find();
  res.json({games})
}; 

//post game
gamesCtrl.createGame = async (req, res) => {
  const { title, genre, status } = req.body
  const newGame = new Game({
    title,
    genre,
    status
  })
  await newGame.save();
  res.json('Game Saved')
};

//get game by id
gamesCtrl.getGame = async (req, res) => {
  const game = await Game.findById(req.params.id);
  console.log(game)
  res.json({game})
};

//edit
gamesCtrl.editGame = async (req, res) => {
  const { title, genre, status } = req.body;
  await Game.findOneAndUpdate({_id: req.params.id}, {
    title,
    genre,
    status
  });
  res.json('game Updated')
}

//delete
gamesCtrl.deleteGame = async (req, res) => {
  await Game.findByIdAndDelete(req.params.id);
  res.json('Game Deleted')
}; 

module.exports = gamesCtrl;