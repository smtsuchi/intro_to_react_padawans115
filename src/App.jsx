import React, { Component } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import News from './News'





export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user:{
        username: 'sho' 
      }
    }
  }

  switchUser = () => {
    if (this.state.user.username === 'sho'){
      this.setState({user: {username:'sarah'}})
    }
    else {
      this.setState({user: {username:'sho'}})
    }
  }
  

  render() {
    return (
      <div>
        <Navbar user={this.state.user} switchUser={this.switchUser}/>
        {/* <h1>Hello World</h1> */}
        <Home user={this.state.user} age='9000'/>
        <News user={this.state.user}/>



      
      </div>
    )
  }
}
