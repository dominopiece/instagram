import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Alert } from "antd";
import Axios from "axios";

export default function Signup() {
    const [inputs, setInputs] = useState({ username: "", password: ""});
    const [errors, setErrors] = useState({});
    const [formDisabled, setFormDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault(); 

        setErrors({})
        setLoading(true)

        Axios.post("http://localhost:8000/accounts/signup/", inputs)
        .then(response => {
            console.log("response", response)
            navigate('/accounts/login');
        })
        .catch(error => {
           console.log("error", error);
            if (error.response) {
                console.log("error response", error.response)
                setErrors({
                    username: (error.response.data.username || []).join(" "),
                    password: (error.response.data.password || []).join(" "),
                })
            }
        })
        .finally(() => {
            setLoading=false;
        })
        console.log("onSubmit", inputs)
    }

    // useEffect(() => {
    //     console.log("changed inputs", inputs);
    // }, [inputs])

    useEffect(() => {
        const isEnabled = Object.values(inputs).every(s => s.length > 0);
        setFormDisabled(!isEnabled);
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
        {JSON.stringify(errors)}
        <form onSubmit={onSubmit}>
            <div>
            <input type="text" name="username" onChange={onChange} />
            {errors.username && <Alert type="error" message={errors.username} />}
            </div>
            <div>
            <input type="password" name="password" onChange={onChange}/>
            {errors.password && <Alert type="error" message={errors.password} />}
            </div>
            <div>
            <input type="submit" value="회원가입" disabled={loading || formDisabled} />
            </div>
        </form>
    </div>
    )
}