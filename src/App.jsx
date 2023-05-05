import React, { useState } from 'react';
import Home from './views/Home';
import Navbar from './components/Navbar';
import News from './views/News';
import { Routes, Route } from 'react-router-dom';
import Feed from './views/Feed';
import Login from './views/Login';
import SignUp from './views/SignUp';
import NewsFunction from './views/NewsFunction';
import SinglePost from './views/SinglePost';
import CreatePost from './views/CreatePost';
import UpdatePost from './views/UpdatePost';

export default function App() {
  const [user, setUser] = useState({})

  const logMeIn = (user) => {
    // this.setState({user: user})
    setUser(user)
  };
  const logMeOut = () => {
    // this.setState({user:{}})
    setUser({})
  };
  // create a function that routes somewhere...



  return (
    <div>
      <Navbar user={user} logMeOut={logMeOut} />
      {/* <h1>Hello World</h1> */}
      <Routes>
        <Route path='/' element={<Home user={user} age='9000' />} />
        <Route path='/news' element={<News user={user} />} />
        <Route path='/news2' element={<NewsFunction user={user} />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/login' element={<Login logMeIn={logMeIn} />} />
        <Route path='/signup' element={<SignUp />} />
        
        <Route path='/posts/:postId' element={<SinglePost user={user}/>} />

        <Route path='/posts/create' element={<CreatePost user={user}/>} />
        <Route path='/posts/update/:postId' element={<UpdatePost user={user}/>} />
      </Routes>
    </div>
  )

}
