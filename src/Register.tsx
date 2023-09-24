import React from "react";
const Register = () => {

    return (
        <>
            <div className="bg-body-tertiary">
                <header>
                    <nav className="navbar navbar-expand-lg bg-white">
                        <div className="container">
                            <img src="images/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x_2.png" className="h-25 w-auto"
                                 alt="logo_Yahoo" />
                            <a className="navbar-brand fs-6 my-3 mx-5" href="#">Help</a>
                        </div>
                    </nav>
                </header>

                <main className="text-bg-light">
                    <section>
                        <div className="container">
                            <div className="row d-flex justify-content-center">

                                <div className="col-md-4 bg-white mt-3 border  shadow p-3 mb-5 rounded">
                                    <div className="d-flex justify-content-center">
                                        <img src="images/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x_2.png"
                                             alt="logo_Yahoo" className="" />
                                    </div>

                                    <h1 className="fs-5 fw-bold text-center mt-5">Create an account</h1>
                                    {/*<p className="fw-normal text-center">Sign in using your Yahoo account</p>*/}
                                    <div className="input-group mb-3 border-start-0 border-top-0">
                                        <span
                                            className="input-group-text bg-white"
                                            id="inputGroup-sizing-sm"
                                        >
                                            <i className="fa-solid fa-person"></i>
                                        </span>
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control borderDisappear border-start-0"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control borderDisappear"
                                                id="floatingPassword"
                                                placeholder="Password"
                                            />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span
                                            className="input-group-text bg-white"
                                            id="inputGroup-sizing-sm"
                                        >
                                            <i className="fa-solid fa-envelope"></i>
                                        </span>
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control borderDisappear"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <span
                                            className="input-group-text bg-white"
                                            id="inputGroup-sizing-sm"
                                        >
                                            <i className="fa-solid fa-lock"></i>
                                        </span>
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control borderDisappear"
                                                id="floatingInput"
                                                placeholder="Enter your password"
                                            />
                                            <label htmlFor="floatingInput">Password</label>
                                        </div>
                                    </div>


                                        <button type="submit" className="btn btn-primary text-center w-100 mt-4">Next
                                        </button>

                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input float-start"
                                                   id="exampleCheck1" />
                                            <label className="form-check-label float-start" htmlFor="exampleCheck1">
                                                <p style={{color: "rgb(36, 36, 198)"}}>Stay signed in</p>
                                            </label>
                                            <p><a
                                                className="link-offset-2 link-underline link-underline-opacity-0 float-end"
                                                href="#">Forgotten username ?</a></p>
                                        </div>
                                        <button type="button" className="btn btn-white border text-center w-100 mt-4">Create
                                            an
                                            account
                                        </button>
                                        <p className="text-center my-3">Or,continue with</p>
                                        <button type="button" className="btn btn-white border text-center w-100 mb-3"><i
                                            className="fa-brands fa-google"></i> Create an account
                                        </button>
                                </div>
                            </div>
                        </div>

                    </section>
                </main>

                <footer className="bg-white fs-6 text-center">
                    Term|Privacy
                </footer>
            </div>
        </>

    );
}
export default Register;