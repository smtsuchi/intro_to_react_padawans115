import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost({ user }) {

    const redirect = useNavigate();

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
        const url = 'http://127.0.0.1:5000/api/posts/create'
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
            // redirect to that specific post
            redirect(`/posts/${data.post.id}`)
        }

    };


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='title'/>
            <input type="text" name='caption' placeholder='caption'/>
            <input type="text" name='imgUrl' placeholder='imgUrl'/>
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}
