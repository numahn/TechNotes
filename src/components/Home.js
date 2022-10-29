import React from 'react'

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="logo">
                    <img src="" alt="Tech Notes Logo"/>
                </div>
                <div className="name">
                    TechNotes
                </div>
                <div className="about-us">
                    <p>TechNotes is an online editing software that allows you to take notes and save them anywhere you want!</p>
                    <p>Sign up now to use!</p>
                </div>
                <div className="button-container">
                    <button className="login button">Log In</button>
                    <button className="signup button">Sign Up</button>
                </div>
            </div>
        </>
    )
}
