import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Signup() {
    const [inputs, setInputs] = useState({});

    const onSubmit = (e) => {
        e.preventDefault(); 

        Axios.post("http://localhost:8000/accounts/signup/", inputs)
        .then(response => {
            console.log("response", response)
        })
        .catch(error => {
           console.log("error", error) 
        })
        console.log("onSubmit", inputs)
    }

    useEffect(() => {
        console.log("changed inputs", inputs);
    }, [inputs])

    const onChange = e => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" name="username" onChange={onChange} />
            <input type="password" name="password" onChange={onChange}/>
            <input type="submit" value="회원가입" />
        </form>
    </div>
    )
}