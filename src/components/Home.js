import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import logo from "./PostIts.jpg";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [loginSuccess, setLoginSuccess] = useState(false)
    const navigate = useNavigate()

    const LogInInfo = {
        username: user,
        password: password
    }

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(LogInInfo)
    }
    const handleClick = async (e) =>{
        // axios.post("//localhost:3001/login", {
        //     username: user,
        //     password: password
        // })
        // .then(function (response){
        //     console.log(response)
        // })
        // .catch(function(error){
        //     console.log(error)
        // })
        const response = await fetch('http://localhost:3001/login', requestOptions)
        const data = await response.json()
        if(data.success){
            setLoginSuccess(true)
            props.setToken(data.token)
            navigate("/list")
        }
    }


    return (
        <>
            {/* <Helmet>
                <style>{'body { background: white; }'}</style>
            </Helmet> */}
            <div className="home-container">

                <div className="logo-container">
                    <img className='logo' src={logo} alt="..." />
                </div>
                <div className="name">
                    <p>TechNotes</p>
                </div>
                <div className="about-us">
                    <p>TechNotes is an online editing software that allows you to take notes and save them anywhere you want!</p>
                    <p>Sign up now to use!</p>
                </div>
            </div>
            <div className="log-container">
                <div className="d-flex justify-content-center">
                    <div className="p-2 bd-highlight">
                        <div className="container-fluid">
                            <form className="row g-3    ">
                                <div>
                                    <label for="inputEmail2" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="inputEmail2" placeholder="username" onChange={(e) => {setUser(e.target.value)}} required />
                                </div>
                                <div>
                                    <label for="inputPassword2" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword2" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} required />
                                </div>
                                <div className='log-btn'>
                                    <a className="btn btn-success" role="button" type='submit' onClick={(e) => handleClick(e)}>Log In</a>
                                </div>
                                <p>Don't have an account? <a href="/Signup">Sign Up</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-muted text-center py-3 mt-3">
                © 2022 TechNotes, Inc. All rights reserved.
            </div>

        </>
    )
}
