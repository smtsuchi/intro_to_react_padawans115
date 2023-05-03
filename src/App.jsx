import React, { Component } from 'react';
import Home from './views/Home';
import Navbar from './components/Navbar';
import News from './views/News';
import { Routes, Route } from 'react-router-dom';
import Feed from './views/Feed';




export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: 'sho'
      }
    }
  }

  switchUser = () => {
    if (this.state.user.username === 'sho') {
      this.setState({ user: { username: 'sarah' } })
    }
    else {
      this.setState({ user: { username: 'sho' } })
    }
  }
  // create a function that routes somewhere...


  render() {
    return (
        <div>
          <Navbar user={this.state.user} switchUser={this.switchUser} />
          {/* <h1>Hello World</h1> */}
          <Routes>
            <Route path='/' element={<Home user={this.state.user} age='9000' />} />
            <Route path='/news' element={<News user={this.state.user} />} />
            <Route path='/feed' element={<Feed />} />
          </Routes>
        </div>
    )
  }
}
