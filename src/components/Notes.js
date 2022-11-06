import React from 'react'
import logo from "./Notes.jpg";


export default function Notes() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">TechNotes</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/List">Home</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <a class="btn btn-success" href="/" role="button">Log Out</a>
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
            <div class="mb-3">
                <label for="NoteTitle" class="form-label"></label>
                <div className='Note-Title'>
                    <input type="text" class="form-control" id="NoteTitle" placeholder="Note Title" />
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Write Notes Here'></textarea>
            </div>
            <div className='Save-Button'>
                <input class="btn btn-success" type="submit" value="Save" />
            </div>
            <div class="bg-dark text-muted text-center py-3 mt-3">
                © 2022 TechNotes, Inc. All rights reserved.
            </div>
        </>
    )
}
