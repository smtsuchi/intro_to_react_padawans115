import React, { Component } from 'react'
import Article from '../components/Article';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            inputText: ''
        };
    }

    showArticles = () => {
        return this.state.articles.map((a, index) => <Article key={index} articleInfo={a} />)
    };

    getNews = async (term='bitcoin') => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${term}&apiKey=4ba2cb57066b49e2b7a8f20f5e0f65c6&pageSize=21`);
        const data = await res.json();
        const articles = data.articles
        this.setState({ articles: articles })
    };

    componentDidMount = () => {
        setTimeout(this.getNews, 3000)
        
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const term = e.target.input1.value;
        this.getNews(term)
    }

    handleChange = (e) => {
        this.setState({inputText: e.target.value})
    }


    render() {
        return (
            <div>
                <h1>News</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='uncontrolled' name='input1'/>
                    <button type='submit'>Search</button>
                </form>

                <form>
                    <input type="text" placeholder='controlled' value={this.state.inputText} onChange={this.handleChange}/>
                    <button type='submit'>Search</button>
                </form>

                <div className='row'>
                    {this.props.user.username === 'sho'?
                    this.showArticles():
                    'You need to be logged in to see the articles'
                    }
                </div>
            </div>
        )
    }
}
