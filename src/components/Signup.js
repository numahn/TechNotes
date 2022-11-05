import React from 'react'

export default function Signup() {
    return (
        <>

            <h1 className= "Header" >Sign Up</h1>
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
                        <div className="col-md-3">
                            <label for="validationDefault05" className="form-label">Date of Birth</label>
                            <div className='Date-of-Birth'>
                                <select className="form-select" id="validationDefault05" required >
                                    <option selected>Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <input type="text" className="form-control" placeholder='Date' required />
                                <input type="text" className="form-control" placeholder='Year' required />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label for="validationDefaultUsername" className="form-label">Username</label>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder='JohnDoe@gmail.com' id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label for="validationDefault03" className="form-label">Password</label>
                            <input type="text" className="form-control" id="validationDefault03" required />
                        </div>
                        <div className="col-md-3">
                            <label for="validationDefault03" className="form-label">Confirm Password</label>
                            <input type="text" className="form-control" id="validationDefault03" required />
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
                            <button className="btn btn-dark mt-3" type="submit">Submit form</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
