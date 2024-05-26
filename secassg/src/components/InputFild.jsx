import React from 'react'
import { useRef, useEffect } from 'react'

const InputFild = () => {
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[])


  return (
    <div>
        <input ref={inputRef} placeholder='Search here...'/>
      
    </div>
  )
}

export default InputFild
