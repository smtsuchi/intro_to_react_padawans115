import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; 
import Modal from '../components/Modal';
import Post from '../components/Post';

const SinglePost = ({ user }) => {
    const { postId } = useParams()
    const navigate = useNavigate()

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

    const deletePost = async () => {
        const url = `http://127.0.0.1:5000/api/posts/delete/${postId}`
        const options = {
            method: 'DELETE',
            headers: {Authorization: `Bearer ${user.apitoken}`}
        }
        const res = await fetch(url, options)
        const data = await res.json()
        if (data.status === 'ok'){
            // redirect
            console.log(data)
            navigate('/feed')
        }
    }



    return (
        <div>
            <Post postInfo={post}/>
            {
            user.username === post.author ?
            <>
                <Link to={`/posts/update/${postId}`} className='btn btn-primary'>Update</Link>
                <Modal
                    modalName='deleteButton'
                    color='danger'
                    modalTitle='This action cannot be undone.'
                    modalBody='Are you sure you want to delete this post?'
                    modalActionText='Delete'
                    modalAction={deletePost} >
                        delete
                </Modal>
            
            </>
            :
            <></>
           }

        </div>
        
    )
};
export default SinglePost
