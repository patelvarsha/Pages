import React from 'react';
import '../RegisterStyle.css';

function UserRegister() {
    return (
        <div>
            <div className="example-box">
                <div className="background-shapes" />
                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col">
                                <div className="card shadow-2-strong card-registration" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration</h3>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="firstName">First Name</label>

                                                        <input type="text" id="firstName" className="form-control form-control-lg" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="lastName">Last Name</label>
                                                        <input type="text" id="lastName" className="form-control form-control-lg" />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="phoneNumber">Phone Number</label>

                                                        <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <h6 className="mb-2 pb-1">Gender: </h6>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" defaultValue="option1" defaultChecked />
                                                        <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" defaultValue="option2" />
                                                        <label className="form-check-label" htmlFor="maleGender">Male</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" defaultValue="option3" />
                                                        <label className="form-check-label" htmlFor="otherGender">Other</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor="emailAddress">Email</label>

                                                        <input type="email" id="emailAddress" className="form-control form-control-lg" />
                                                    </div>
                                                </div>

                                                <div className="col-md-6 mb-4 d-flex align-items-center">
                                                    <div className="form-outline">
                                                        <label htmlFor="password" className="form-label">Password</label>
                                                        <input type="password" className="form-control form-control-lg" id="password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* <label className="form-label select-label">Choose option</label> */}
                                                    <select className="select form-control-lg" style={{ width: "100%" }}>
                                                        <option value={1} selected disabled>Choose option</option>
                                                        <option value={2}>Subject 1</option>
                                                        <option value={3}>Subject 2</option>
                                                        <option value={4}>Subject 3</option>
                                                    </select>

                                                </div>
                                            </div>
                                            <br />

                                            <div className="col d-flex justify-content-start mb-5t">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="checkbox"/>
                                                    <label className="form-check-label text-dark" htmlFor="checkbox">
                                                        I do accept the Terms and Conditions of your site.</label>
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-2">
                                                <input className="btn bgcolor text btn-lg" type="submit" value="Register" />
                                            </div>
                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/" className="text-decoration-none color">Login here</a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default UserRegister
