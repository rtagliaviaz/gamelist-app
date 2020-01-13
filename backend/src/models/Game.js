const {Schema, model} = require('mongoose');

const gameSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  status:{
    type: String
  },
  genre: String
});

module.exports = model('Game', gameSchema);