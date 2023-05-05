import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import Post from '../components/Post';

const SinglePost = ({ user }) => {
    const { postId } = useParams()

    const [post, setPost] = useState({})


    const getPostInfo = async () => {
        const url = `http://127.0.0.1:5000/api/posts/${postId}`

        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok'){
            setPost(data.post)
        }
    };

    useEffect(()=>{
        getPostInfo()
        console.log(postId)
    }, [])



    return (
        <div>
            <Post postInfo={post}/>
            {
            user.username === post.author ?
            <>
                <Link to={`/posts/update/${postId}`}>Update</Link>
                <button>Delete</button>
            </>
            :
            <></>
           }

        </div>
        
    )
};
export default SinglePost
