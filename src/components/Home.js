import React from 'react'
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        <>
            <Helmet>
                <style>{'body { background: white; }'}</style>
            </Helmet>
            <div className="home-container">
                <div className="logo">
                    <img src="/src/components/Images/Notes.jpg" alt="..." />
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
                <div class="d-flex justify-content-center">
                    <div class="p-2 bd-highlight">
                        <div class="container-fluid">
                            <form class="row g-3    ">
                                <div>
                                    <label for="inputEmail2" class="visually-hidden">Email</label>
                                    <input type="text" readonly class="form-control" id="inputEmail2" placeholder="email@example.com" />
                                </div>
                                <div>
                                    <label for="inputPassword2" class="visually-hidden">Password</label>
                                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
                                </div>
                                <div>
                                    <a href="Signup.js">Log In</a>
                                    <p>Don't have an account? <a href="Signup.js">Sign Up</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-dark text-muted text-center py-3 mt-3 fixed-bottom">
                © 2022 TechNotes, Inc. All rights reserved.
            </div>

        </>
    )
}
