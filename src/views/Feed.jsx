import React, { Component } from 'react'
import Post from '../components/Post';
import { Link } from 'react-router-dom';
import { getPosts } from '../apiHelperFuncs/igCalls';


export default class Feed extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    showPosts = () => {
        return this.state.posts.map(p => <Link key={p.id} to={`/posts/${p.id}`}><Post postInfo={p} /></Link>)
    };


    getPosts = async () => {
        const data = await getPosts()
        if (data.status === 'ok') {
            this.setState({ posts: data.posts })
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
            <>
                <h1>All Posts</h1>
                <Link to='/posts/create' className='btn btn-success'>+</Link>
                <div className='row'>
                    {this.showPosts()}
                </div>
            </>
        )
    }
}
