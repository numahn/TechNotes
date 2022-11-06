import React from 'react'
import { Helmet } from 'react-helmet';
import logo from "./PostIts.jpg";

export default function Home() {
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
                                    <label for="inputEmail2" className="form-label">Email</label>
                                    <input type="text" readonly className="form-control" id="inputEmail2" placeholder="email@example.com" required />
                                </div>
                                <div>
                                    <label for="inputPassword2" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword2" placeholder="Password" required />
                                </div>
                                <div className='log-btn'>
                                    <a class="btn btn-success" href="/List" role="button" type='submit'>Log In</a>
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
