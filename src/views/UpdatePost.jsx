import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

export default function UpdatePost({ user }) {
    const { postId } = useParams()
    const [post, setPost] = useState({})
    const [redirect, setRedirect] = useState(false)


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
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const caption = e.target.caption.value;
        const imgUrl = e.target.imgUrl.value;

        const body = {
            title,
            caption,
            img_url: imgUrl
        }
        const url = `http://127.0.0.1:5000/api/posts/update/${postId}`
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${user.apitoken}`
            },
            body: JSON.stringify(body)
        }

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok'){
            // redirect to that specific 
            setRedirect(true)
        }

    };

  return redirect?<Navigate to={`/posts/${postId}`} />:
  (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='title' defaultValue={post.title}/>
            <input type="text" name='caption' placeholder='caption' defaultValue={post.caption}/>
            <input type="text" name='imgUrl' placeholder='imgUrl' defaultValue={post.img_url}/>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}
