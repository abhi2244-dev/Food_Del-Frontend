import React, { useState, useContext } from 'react'
import './Login.css'
import { assets } from '../../Assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

function Login({setshowlogin}) {
    const { url, setToken } = useContext(StoreContext)
    const [curstate, setcurstate] = useState("Login")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (curstate === "Login") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }

        try {
            const response = await axios.post(newUrl, data);
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setshowlogin(false);
                alert(response.data.message);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Authentication error:", error);
            alert("An error occurred during authentication");
        }
    }

    return (
        <div className="Login">
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{curstate}</h2>
                    <img onClick={() => setshowlogin(false)} src={assets.cross_icon} />
                </div>
                <div className="login-popup-inputs">
                    {curstate === "Login" ? <></> : 
                        <input 
                            name='name' 
                            onChange={onChangeHandler} 
                            value={data.name} 
                            type='text' 
                            placeholder='Your name' 
                            required 
                        />
                    }
                    <input 
                        name='email' 
                        onChange={onChangeHandler} 
                        value={data.email} 
                        type='email' 
                        placeholder='Your email' 
                        required 
                    />
                    <input 
                        name='password' 
                        onChange={onChangeHandler} 
                        value={data.password} 
                        type='password' 
                        placeholder='Enter password' 
                        required 
                    />
                </div>
                <button type="submit">{curstate === "Sign-up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p>By continuing, I agree all the terms and conditions</p>
                </div>
                {curstate === "Login" ?
                    <p>Create a new account?<span onClick={() => setcurstate("Sign-up")}>Click here</span></p> :
                    <p>Already have an account?<span onClick={() => setcurstate("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Login