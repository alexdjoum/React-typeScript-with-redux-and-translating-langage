import React from "react";
const Login = () => {

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

                            <div className="col-md-9 mt-5">
                                <p className="mt-5 fw-bold fs-4 ms-5 mb-5">Yahoo makes it easy to enjoy what matters
                                    most in Your
                                    world</p>
                                <p className="fs-4 ms-5 mt-5">Best-in-class Yahoo Mail breaking local, national and
                                    global news,
                                    finance, sport, music, films and more. You get more out of the web, You get more out
                                    of life
                                </p>
                            </div>

                            <div className="col-md-4 bg-white mt-3 border border-0 shadow p-3 mb-5 rounded">
                                <div className="d-flex justify-content-center">
                                    <img src="images/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x_2.png"
                                         alt="logo_Yahoo" className="" />
                                </div>

                                <h1 className="fs-5 fw-bold text-center mt-5">Sign in</h1>
                                <p className="fw-normal text-center">Sign in using your Yahoo account</p>

                                <form>
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                    </label>
                                    <div className="input-group mb-3 border-none border-start-0 border-top-0">
                                        <span className="input-group-text bg-white"><i
                                            className="fa-solid fa-envelope"></i></span>
                                        <div className="form-floating">
                                            <input type="text"
                                                   className="form-control borderDisappear border-top-0 border-start-0 border-end-0"
                                                   id="floatingInputGroup1" placeholder="Username" />
                                                <label htmlFor="floatingInputGroup1">Username</label>
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
                                </form>

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
export default Login;