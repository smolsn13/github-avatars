import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
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
          <h1 className='text-center'>Check out these GitHub avatars!</h1>
          <div className=".d-sm-flex p-2">
            {this.state.avatars.map(avatar =>
              <img key={avatar.id} src={avatar.owner.avatar_url} alt=''/>)}
          </div>
        </div>
      );
    }
  }

export default App;
