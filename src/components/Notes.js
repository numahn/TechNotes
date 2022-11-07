import React from 'react'
import { useLocation } from 'react-router';
import logo from "./Notes.jpg";


export default function Notes(props) {
    const {state} = useLocation()
    console.log(state)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">TechNotes</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/List">Home</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <a className="btn btn-success" href="/" role="button">Log Out</a>
                        </form>
                    </div>
                </div>
            </nav>
            {<div className="notes-container">
                <img className='logo' src={logo} alt="..." />
            </div> }
            <div className='Notes-Title'>
                <h1 className="Header" >Notes</h1>
            </div>
            <div className="mb-3">
                <label for="NoteTitle" className="form-label"></label>
                <div className='Note-Title'>
                    <input type="text" className="form-control" id="NoteTitle" placeholder="Note Title" value={state.title}/>
                </div>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Write Notes Here' value={state.content}></textarea>
            </div>
            <div className='Save-Button'>
                <input className="btn btn-success" type="submit" value="Save" />
            </div>
            <div className="bg-dark text-muted text-center py-3 mt-3">
                © 2022 TechNotes, Inc. All rights reserved.
            </div>
        </>
    )
}
