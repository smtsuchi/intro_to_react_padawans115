import React, { Component } from 'react'
import Post from '../components/Post';

export default class Feed extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }
    showPosts = () => {
        return this.state.posts.map(p => <Post key={p.id} postInfo={p}/>)
    };


    getPosts = async () => {
        const res = await fetch(`https://finstagram-padawans115.onrender.com/api/posts`);
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok'){
            this.setState({posts: data.posts})
        }
    };

    componentDidMount = () => {
        // get posts from API req
        // update the state with the posts we received
        // triggering a re-render
        this.getPosts()
    };


    render() {
        return (
            <div>
                <h1>All Posts</h1>
                { this.showPosts() }
            </div>
        )
    }
}
