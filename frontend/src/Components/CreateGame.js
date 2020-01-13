import React, { Component } from 'react';
import axios from 'axios';

export default class CreateGame extends Component {

  state = {
    title: '',
    genre: '',
    status: 'Playing',
    editing: false,
    _id: ''
  }

  async componentDidMount(){
    if (this.props.match.params.id) {
      const res = await axios.get('http://localhost:4000/api/games/' + this.props.match.params.id)
      console.log(res);
      this.setState({
        title: res.data.game.title,
        genre: res.data.game.genre,
        status: res.data.game.status,
        editing: true,
        _id: this.props.match.params.id
      })
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(e.target.name, e.target.value)
  }

  onSubmit = async e => {
    e.preventDefault();
    const newGame = {
      title: this.state.title,
      genre: this.state.genre,
      status: this.state.status
    }
    if (this.state.editing) {
      await axios.put('http://localhost:4000/api/games/' + this.state._id, newGame)
    } else {
      await axios.post('http://localhost:4000/api/games', newGame)
    }
    window.location.href = '/';
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">

          {this.state.editing
            ? <h3>Edit</h3> 
            : <h3>Create a Game</h3>
          }
                   

          {/* GAME TITLE */}
          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              name="title"
              placeholder="Title"
              onChange={this.onChange}
              value={this.state.title}
              required/>
          </div>

          {/* GAME GENRE */}
          <div className="form-group">
            <input 
              type="text" 
              className="form-control"
              name="genre"
              placeholder="Genre"
              onChange={this.onChange}
              value={this.state.genre}
              required/>
          </div>

          {/* GAME STATUS */}
          <div className="form-group">
            <select 
              className="form-control"
              name="status"
              onChange={this.onChange}
              value={this.state.status}
              >
                <option>Playing</option>
                <option>Finished</option>
                <option>Want to Play</option>
            </select>
          </div>

          <form onSubmit={this.onSubmit}>
            <button 
              className="btn btn-primary"
              >
              Save Game
            </button>
          </form>
        </div>
      </div>
    )
  }
}
