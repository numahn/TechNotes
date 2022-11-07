import React from 'react'

export default function List() {
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
      <h1 className="Header" >Welcome Back</h1>
      <div className='List-Layout'>
        <div className="d-flex justify-content-between">
          <div className="d-flex p-2">Note Number</div>
          <div className="d-flex p-2">Title</div>
          <div className="d-flex p-2">Date Created</div>
        </div>
      </div>
      <div>
        <div className='Create-Note'>
          <a className="btn btn-success" href="/Notes" role="button">Create Note</a>
        </div>
      </div>

      <div className="bg-dark text-muted text-center py-3 mt-3 fixed-bottom">
        © 2022 TechNotes, Inc. All rights reserved.
      </div>
    </>
  )
}
