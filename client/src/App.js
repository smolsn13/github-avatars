import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import AvatarImages from './components/AvatarImages';
import './App.css';

class App extends Component {
  state = {avatars: []}

    componentDidMount() {
      fetch('/avatars')
        .then(res => res.json())
        .then(avatars => this.setState({ avatars }));
    }

    render() {
      return (
        <div className="App">
          <h1>GitHub Avatars</h1>
          {this.state.avatars.map(avatar =>
            <div key={avatar.id}>{avatar.avatar_url}</div>
          )}
        </div>
      );
    }
  }

export default App;
