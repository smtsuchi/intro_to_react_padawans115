import React, { Component } from 'react'

export default class   extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        };
    }

    showArticles = () => {
        return this.state.articles.map(a => <div>{a.title}</div>)
    };

    getNews = async () => {
        const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4ba2cb57066b49e2b7a8f20f5e0f65c6&pageSize=21');
        const data = await res.json();
        const articles = data.articles
        this.setState({ articles: articles })
    };

    componentDidMount = () => {
        setTimeout(this.getNews, 3000)
        
    }

    render() {
        return (
            <div>
                <h1>News</h1>
                <ul>
                    {this.props.user.username === 'sho'?
                    this.showArticles():
                    'You need to be logged in to see the articles'
                    }
                </ul>
            </div>
        )
    }
}
