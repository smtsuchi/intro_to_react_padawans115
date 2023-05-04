import React, { Component } from 'react';
import Home from './views/Home';
import Navbar from './components/Navbar';
import News from './views/News';
import { Routes, Route } from 'react-router-dom';
import Feed from './views/Feed';
import Login from './views/Login';
import SignUp from './views/SignUp';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  logMeIn = (user) => {
    this.setState({user: user})
  };
  logMeOut =  () => {
    this.setState({user:{}})
  };
  // create a function that routes somewhere...


  render() {
    return (
        <div>
          <Navbar user={this.state.user} logMeOut = {this.logMeOut}/>
          {/* <h1>Hello World</h1> */}
          <Routes>
            <Route path='/' element={<Home user={this.state.user} age='9000' />} />
            <Route path='/news' element={<News user={this.state.user} />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/login' element={<Login logMeIn = {this.logMeIn} />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </div>
    )
  }
}
