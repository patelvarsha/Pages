import React from 'react';
import '../MyBG.css';

function UserLogin() {
    return (
        <div>
            <div>
                <div className="header ">
                    <div className="inner-header flex justify-content-center">
                        <div>
                            <h1>Have an account?</h1>
                            <form className="px-md-4 p-4 card">
                                <h3>Log In</h3>
                                <div className="form-outline mb-4">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder='Email address'
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="form2Example2" className="form-control" placeholder='Password' required />
                                </div>
                                <div className="row mb-4">
                                    <div className="col d-flex justify-content-start">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="form2Example31" defaultChecked style={{ backgroundColor: "rgba(0, 172, 193, 1)" }} />
                                            <label className="form-check-label text-dark" htmlFor="form2Example31">Remember me </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href="#!" className='text-decoration-none color'>Forgot password?</a>
                                    </div>
                                </div>
                                <button type="submit" class="btn bgcolor text mb-4">
                                    Sign up
                                </button>

                                <div className="text-center p-2">
                                    <p>Not a member? <a href="/register" className='text-decoration-none color'>Register</a></p>
                                    <p>or sign up with:</p>
                                    <div>
                                        <a href="#" className="fa fa-facebook" />
                                        <a href="#" className="fa fa-twitter" />
                                        <a href="#" className="fa fa-google" />
                                        <a href="#" className="fa fa-linkedin" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <svg className="waves" xmlns="#" xmlnsXlink="#" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g className="parallax">
                                <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(255,255,255,0.7" />
                                <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
                                <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
                                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
                            </g>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserLogin
