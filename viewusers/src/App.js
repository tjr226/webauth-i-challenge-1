import React, { Component } from 'react';
import './App.css';

import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import Users from './components/Users.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/api/users')
    .then(res => {
      this.setState(() => ({ Users: res.data }));
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Users Users={this.state.Users} />
      </div>
    );

  }
}

export default App;
