import React, { useState, useEffect } from 'react'

export default function Window() {
    const [width, setWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize)




        return ()=>{window.removeEventListener('resize', handleResize)}
    }, [])
  return (
    <div>{width}</div>
  )
}
