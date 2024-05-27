import React, { useState } from 'react'
import { useEffect, useRef } from 'react'

const CustomForm = () => {
    const inputFocusRef = useRef(null)
    const isPasswordMatched = useRef(false)
    const [formData, setFormData] = useState({ username: "", password: "", confpassword:"" })

    function hendelForm(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
        if(formData.username.length<4){
            document.getElementById("username").style.border = "1px solid red";
            document.getElementById("mintext").style.color = "red";
        }else{
            document.getElementById("username").style.border = "1px solid gray";
            document.getElementById("mintext").style.color = "gray";
        }

        if(formData.password == formData.confpassword){
            isPasswordMatched.current = true;
        }else{
            isPasswordMatched.current = false;
        }
    }

    function formSubmit(e){
        e.preventDefault()
        if(formData.password == formData.confpassword){
            console.log("Match");
            console.log("Successfully submited")
        }
        else{
            console.log("Password Not Match")
            console.log("Con't submit")
        }
    }

    useEffect(() => {
        inputFocusRef.current.focus()
    }, [])
    return (
        <form style={{border:"1px solid gray", padding:"28px", borderRadius:"8px"}} onSubmit={formSubmit}>
            <label htmlFor="username">
                <input type="text" ref={inputFocusRef} placeholder='Username' id='username' name='username' value={formData.username} onChange={hendelForm} />
                <br /><span id="mintext" style={{ fontSize: "13px" }}>min 5 char</span>
            </label>
            <br />
            <br/>
            <label htmlFor="password">New password<br />
                <input type="password" name="password" value={formData.password} id="password" placeholder='Password' onChange={hendelForm}/>
            </label>
            <br />
            <br/>
            <label htmlFor="confpassword">Confirm password<br />
                <input type="confpassword" name="confpassword" value={formData.confpassword} id="confpassword" placeholder='Confirm Password' onChange={hendelForm}/>
            </label>
            <br/>
            <br/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default CustomForm
