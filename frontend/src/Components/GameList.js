import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class GameList extends Component {

  state = {
    games: []
  }

  async componentDidMount(){
    this.getGames()
  }

  getGames = async () => {
    const res = await axios.get('http://localhost:4000/api/games')
    console.log(res)
    this.setState({
      games: res.data.games
    })
  }

  deleteGame = async id => {
    await axios.delete('http://localhost:4000/api/games/'+ id)
    this.getGames()
  }


  render() {
    return (
      <div className="row">
        {this.state.games.map(game => 
          <div className="col-md-4 p-2" key={game._id}>
            <div className="card">
              <div className="card-header bg-dark text-light">
                <h5>{game.title}</h5>
              </div>
              <div className="card-body">
                <p>{game.genre}</p>
                <p>{game.status}</p>
              </div>
              <div className="card-footer bg-dark text-light d-flex justify-content-between">
                <button 
                  className="btn btn-danger"
                  onClick={() => this.deleteGame(game._id)}>
                  Delete
                </button>
                <Link 
                  className="btn btn-secondary"
                  to={'/edit/' + game._id}>
                  Edit
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
