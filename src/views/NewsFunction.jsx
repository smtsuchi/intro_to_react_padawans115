import React, { useState, useEffect } from 'react'
import Article from '../components/Article';

const NewsFunction = ({ user }) => {
    // TWO STATE VARIABLE FROM BEFORE
    // inputText which tracked the search form :String
    // articles which held an array of article objects :Array
    useEffect(()=>{
        console.log('mount is happening')
        getNews()
    }, [])
    // useState returns an array with 2 things: Index 0 contains the state object, while index 1 contains the updateFunction
    // useState(initialState)
    const [usernameField, setUsernameField] = useState(()=>{console.log('state is forming') ;return ''})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPasswordField, setConfirmPasswordField] = useState('')

    
    const [articles, setArticles] = useState([])

    // syntax of useEffect
    // useEffect returns Nothing
    // useEffect(callbackFunc, array)
    // useEffect takes in a callback function and an array of dependecies.. meaning
    // whenever something in the array changes, the function will be run.
    // useEffect(()=>{}, [])

    // to mimick a mount, you must leave the array EMPTY.     
    

    const showArticles = () => {
        return articles.map((a, index) => <Article key={index} articleInfo={a} />)
    };

    const getNews = async (term='bitcoin') => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${term}&apiKey=4ba2cb57066b49e2b7a8f20f5e0f65c6&pageSize=21`);
        const data = await res.json();
        const newArticles = data.articles
        if (newArticles){
            setArticles(newArticles)
        }
        // setUsernameField('')
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getNews(usernameField)
    };

    const handleChange = (e, func) => {
        func(e.target.value)
    };


    return (
        <div>
            {console.log('i am rendering')}
            <h1>News</h1>
           
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' value={usernameField} onChange={(e) => handleChange(e, setUsernameField)}/>
                <input type="text" placeholder='email' value={email} onChange={(e)=>{handleChange(e, setEmail)}}/>
                <input type="text" placeholder='password' value={password} onChange={(e)=>{handleChange(e, setPassword)}}/>
                <input type="text" placeholder='confirm password' value={confirmPasswordField} onChange={(e)=>{handleChange(e, setConfirmPasswordField)}}/>
                <button type='submit'>Search</button>
            </form>

            <div className='row'>
                {showArticles()}
            </div>
        </div>
    )
};
export default NewsFunction;
