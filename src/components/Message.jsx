import React from 'react'
import { useMessage } from '../context/MessageContext'

export default function Message({ color, text, index }) {

    
    const { removeMessage } = useMessage()

    return (
        <div className={`alert alert-${color} alert-dismissible fade show`} >
           { text }
            <button type="button" className="btn-close" onClick={()=>{removeMessage(index)}}></button>
        </div>
    )
}
