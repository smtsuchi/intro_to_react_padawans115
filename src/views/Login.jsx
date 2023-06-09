import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import { useMessage, useQueryParams } from '../context/MessageContext';
const BACK_END_URL = process.env.REACT_APP_BACK_END_URL
export default function Login({ logMeIn, user }) {
    const navigate = useNavigate()
    const { addMessage } = useMessage()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        const rememberMe = e.target.rememberMe.checked;


        const url = BACK_END_URL+ '/api/login';
        const options = {
            method: "POST",
            headers: {
                Authorization: `Basic ${btoa(username + ":" + password)}`
            }
        };

        const res = await fetch(url, options);
        const data = await res.json();
        if (data.status === 'ok') {
            const myUserInfo = data.data
            console.log(data)
            logMeIn(myUserInfo, rememberMe)
            navigate('/feed')
        }
        addMessage(data.message, data.status==='ok'?'success':'danger')
        

    }

    const params = useQueryParams()
    console.log(params)
    

    return user.apitoken ? <Navigate to='/feed' /> : (
        <div className='col-4 border p-4'>
            <h1>Log In</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name='username' />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" name="rememberMe" id='rememberMe'/>
                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p>Don't have an account? <Link className='text-decoration-none' to='/signup'>Sign Up Here</Link></p>
        </div>
    )
}
