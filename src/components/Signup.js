import React from 'react'

export default function Signup() {
    return (
        <>

            <h1 className= "Header" >Sign Up</h1>
            <div className="Sign-Up-Container">
                <form class="row g-3">
                    <div className="Sign-Up-Form">
                        <div className="name-form">
                            <div class="col-md-4">
                                <label for="validationDefault01" class="form-label">First name</label>
                                <input type="text" class="form-control" placeholder="John" id="validationDefault01" required />
                            </div>
                            <div class="col-md-4">
                                <label for="validationDefault02" class="form-label">Last name</label>
                                <input type="text" class="form-control" placeholder="Doe" id="validationDefault02" required />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="validationDefaultUsername" class="form-label">Username</label>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder='JohnDoe@gmail.com' id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label for="validationDefault03" class="form-label">Password</label>
                            <input type="text" class="form-control" id="validationDefault03" required />
                        </div>
                        <div class="col-md-3">
                            <label for="validationDefault03" class="form-label">Confirm Password</label>
                            <input type="text" class="form-control" id="validationDefault03" required />
                        </div>
                        <div class="col-md-3">
                            <label for="validationDefault05" class="form-label">D.O.B</label>
                            <div className='Date-of-Birth'>
                                <select class="form-select" id="validationDefault05" required >
                                    <option selected>Choose...</option>
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
                                <input type="text" class="form-control" placeholder='Date' required />
                                <input type="text" class="form-control" placeholder='Year' required />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                <label class="form-check-label" for="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-dark mt-3" type="submit">Submit form</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
