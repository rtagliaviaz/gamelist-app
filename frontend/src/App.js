import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//components
import CreateGame from './Components/CreateGame';
import GameList from './Components/GameList';
import Navigation from './Components/Navigation'

function App() {
  return (
    <Router>
      <Navigation/>

      <div className="container p-4">
        <Route path="/" exact component={GameList} />
        <Route path="/create" component={CreateGame} />
        <Route path="/edit/:id" component={CreateGame} />
      </div>
    </Router>
  );
}

export default App;
