import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router';

export default function List(props) {
  const [notes, setNotes] = useState([{}])
  const navigate = useNavigate();
  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(parseJwt(props.token))
  }

  const getNotes = async () => {
    const response = await fetch("http://localhost:3001/list", requestOptions)
    const data = await response.json()
    setNotes(data.notes)
  }

 useEffect(() => {
    getNotes()
 }, [])

  const handleClick = (e, element) => {
    navigate("/notes", {state: element})
  }



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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/List">Notes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Images">Images</a>
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
          {notes.map((element) => {
            console.log(element)
            return(
              <div className="d-flex flex-start card" onClick={(e) => handleClick(e, element)}>
                <p>{element.title}</p>
              </div>
            )
          })}
        
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
