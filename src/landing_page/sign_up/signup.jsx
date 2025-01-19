import React from 'react';
import { Link } from 'react-router-dom'

function signup() {
    return ( 
        <div className="container">
            <div className="row" style={{display:'flex', justifyContent:'space-between'}}>
                <div className="col-5">
                    <br />
                    <h1>Sign Up</h1>
                    <br />
                <form class="row g-3 needs-validation" noValidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Name</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="Full Name" required />
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Email-ID</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="mail@email.org" required />
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Username</label>
                    <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    <div class="invalid-feedback">
                        Please choose a username.
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Create Password</label>
                    <input type="password" class="form-control" id="validationCustom03" required />
                    <div class="invalid-feedback">
                    Create a Password
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label class="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">SignUp</button>
                </div>
                </form>
                <br />
                <br />
                </div>
                <div className="col-5">
                    <br />
                    <h1>Sign in</h1>
                    <br />
                    <form action="#" noValidate>
                    <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Username</label>
                    <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    <div class="invalid-feedback">
                        Enter your username.
                    </div>
                    </div>
                </div>
                <br />
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Password</label>
                    <input type="password" class="form-control" id="validationCustom03" required />
                    <div class="invalid-feedback">
                    Password required
                    </div>
                </div>
                <br />
                <br />
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Sign in</button>
                </div>
                    </form>
                </div>
            </div>
            <div class="alert alert-danger" role="alert">
                <h3>Alert !!</h3>
                The Sign up and Sign in route are required to redirect to another server i.e. Dashboard but currently requires some changes in MongoDB files for user record so these are not working right Now! 
                <br />
                <br />
                You can directly see Dasboard clone by visiting <Link to='/dasboard'>Link</Link>
            </div>
        </div>
     );
}

export default signup;