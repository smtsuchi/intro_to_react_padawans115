import React, { useState, useEffect } from 'react'

export default function Area() {

    const [ type, setType ] = useState('posts')
    const [data, setData] = useState([])
    const [user, setUser] = useState({
        username: '',
        email: '',
        images: []
    })

    // useEffect(()=>{
    //     let subscribed = true;

    //     const get = async () => {
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         const data = await res.json();
    //         if (subscribed){
    //             console.log(`got ${type} data`)
    //             setData(data)
    //         }
    //     }
        
    //     get(type)



    //     return ()=>{console.log('effect either re-runs or component is unmounting') ;subscribed = false}

    // },[type])

    useEffect(()=>{
        let subscribed = true;
        
        fetch(`https://jsonplaceholder.typicode.com/${type}`).then( (res)=>{

            return res.json();


        }).then((data)=>{
            if (subscribed){
                console.log(`got ${type} data`)
                setData(data)
            }

        })



        return ()=>{console.log('effect either re-runs or component is unmounting') ;subscribed = false}

    },[type])

    // useEffect(()=>{
    //     const controller = new AbortController();
    //     const signal = controller.signal

        
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`, {signal})
    //     .then(res=>res.json())
    //     .then(data=>{
    //             console.log(`got ${type} data`)
    //             setData(data)
    //     })
    //     .catch(err => {
    //         if ( err.name === "AbortError" ){
    //             console.log('cancelled')
    //         }
    //     })



    //     return ()=>{
    //         controller.abort()
    //     }

    // },[type])
    const logMeIn = () => {
        setUser({
            username:'shoha',
            email: 'sho@sho.com',
            images: [
                'https://xsgames.co/randomusers/assets/images/favicon.png',
                'https://thumbs.dreamstime.com/b/wide-banner-long-tiles-random-colored-blue-bricks-abstract-color-scales-d-illustration-217861947.jpg'
            ]
        })
    }

    useEffect(()=>{console.log('name change')}, [user.username])

    const toggleName = () => {
        setUser(prev => ({...prev, username:prev.username==='shoha'?'sarah':'shoha'}))
    }
    const toggleEmail = () => {
        setUser(prev => ({...prev, email:prev.email==='sho@sho.com'?'sar@sar.com':'sho@sho.com'}))
    }

    return (
        <div>
            <h1>
                { type }
            </h1>
            <button onClick = {()=>setType('posts')} >Posts</button>
            <button onClick = {()=>setType('comments')} >Comments</button>
            <button onClick = {()=>setType('albums')} >Albums</button>
            {/* {
                data.map(obj => <p key={obj.id}>{obj.id}</p>)
            } */}


            <div>
                <h1>
                    {user.username}
                </h1>
                <h1>
                    {user.email}
                </h1>
                <img src = {user.images[0]}/>
            </div>

            <button onClick={logMeIn}>Log In</button>
            <button onClick={toggleName}>Toggle Name</button>
            <button onClick={toggleEmail}>Toggle Email</button>

        </div>
    )
}
