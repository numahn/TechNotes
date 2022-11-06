import React from 'react'

export default function List() {
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
      <h1 className="Header" >Welcome Back</h1>
      <div className='List-Layout'>
        <div class="d-flex justify-content-between">
          <div class="d-flex p-2">Note Number</div>
          <div class="d-flex p-2">Title</div>
          <div class="d-flex p-2">Date Created</div>
        </div>
      </div>
      <div>
        <div className='Create-Note'>
          <a class="btn btn-success" href="/Notes" role="button">Create Note</a>
        </div>
      </div>

      <div class="bg-dark text-muted text-center py-3 mt-3 fixed-bottom">
        © 2022 TechNotes, Inc. All rights reserved.
      </div>
    </>
  )
}
