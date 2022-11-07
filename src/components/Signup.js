import React, { useState } from 'react'

export default function Signup() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")

    const signUpInfo = {
        username: user,
        password: password,
        first_name: first_name,
        last_name: last_name
    }

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(signUpInfo)
    }

    const handleClick = async (e) => {
        const response = await fetch('http://localhost:3001/signup', requestOptions)
        const data = await response.json()
    }



    return (
        <>

            <h1 className="Header" >Sign Up</h1>
            <div className="back-btn">
                <a className="btn btn-dark" href="/" role="button">Go Back</a>
            </div>
            <div className="Sign-Up-Container">
                <form className="row g-3">
                    <div className="Sign-Up-Form">
                        <div className="name-form">
                            <div className="col-md-4">
                                <label for="validationDefault01" className="form-label">First name</label>
                                <input type="text" className="form-control" placeholder="John" id="validationDefault01" required />
                            </div>
                            <div className="col-md-4">
                                <label for="validationDefault02" className="form-label">Last name</label>
                                <input type="text" className="form-control" placeholder="Doe" id="validationDefault02" required />
                            </div>
                        </div>
                        <div className="p-2 flex-fill">
                            <label for="validationDefaultUsername" className="form-label">Username</label>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder='JohnDoe@gmail.com' id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="validationDefault03" className="form-label">Password</label>
                            <input type="password" className="form-control" id="validationDefault03" required />
                        </div>
                        <div className="col-md-3">
                            <label for="validationDefault03" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="validationDefault03" required />
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                <label className="form-check-label" for="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-dark mt-3" type="submit" onClick={(e)=>handleClick(e)}>Submit form</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="bg-dark text-muted text-center py-3 mt-3">
                © 2022 TechNotes, Inc. All rights reserved.
            </div>
        </>
    )
}
