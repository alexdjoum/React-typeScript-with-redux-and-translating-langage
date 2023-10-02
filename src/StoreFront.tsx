import React from "react";
const StoreFront = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row gx-0 gy-3 pb-4 main1">
                    <div className="col-12 order-last order-lg-first col-lg-3 mx-0" style={{backgroundColor: "rgb(70, 9, 139)"}}>
                        <div className=" sidebar_logo d-flex">
                            <div className="logo1">
                                <p className="text-center h-100"><i className="bi bi-person-fill" style={{fontSize: "xxx-large"}}></i></p>
                            </div>
                            <div className="ms-lg-4 pt-lg-3 ms-3 ms-md-4 pt-3 sidebar_head">
                                <p className="mb-0">STUDENT</p>
                                <p className="mt-0">SPACE</p>
                            </div>
                        </div>
                        <div className="w-100 sidebar_nav">
                            <ul className="nav nav-tabs flex-column">
                                <li className="nav-item fs-6 fw-normal">
                                    <a className="nav-link" aria-current="page" href="#"><i className="bi bi-layers"></i> JOIN THE NEXT SESSION</a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li className="nav-item fw-normal fs-6">
                                    <a className="nav-link" href="#"><i className="bi bi-bar-chart"></i> MY SESSIONS</a>
                                </li>
                                <li className="nav-item fw-normal fs-6">
                                    <a className="nav-link active" href="#"><i className="bi bi-arrow-left-right"></i> MY TRANSACTIONS</a>
                                </li>
                                <li className="nav-item fw-normal fs-6">
                                    <a className="nav-link" href="#"><i className="bi bi-person-fill"></i> PERSONNAL INFORMATIONS</a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li className="nav-item fw-normal fs-6">
                                    <a className="nav-link " href="#"><i className="bi bi-lock"></i> PASSWORD&SECURITY</a>
                                </li>
                                <li><hr className="dropdown-divider fw-normal fs-6" /></li>
                                <li className="nav-item fw-normal fs-6">
                                    <a className="nav-link " href="#"><i className="bi bi-bricks"></i> PAYMENT METHOD</a>
                                </li>
                                <li><hr className="dropdown-divider " /></li>
                                <li className="nav-item fw-normal fs-6">
                                    <a className="nav-link" href="#"><i className="bi bi-currency-dollar"></i> MAKE A PAYMENT</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-9 mx-0 bg-dark-subtle">
                        <header>
                            <nav className="navbar navbar-expand-md fixed-top navbar_head navbar-light" style={{backgroundColor: "rgb(80, 128, 8)"}}>
                                <div className="w-100 d-flex flex-row bd-highlight justify-content-between">
                                    <div className="pt-3 ps-2  bd-highlight">
                                        <p>
                                            <a className="navbar-brand " href="#"><i className="bi bi-border-width me-2"></i>Home</a>
                                        </p>
                                    </div>

                                    <div className="btn-group pt-0 bd-highlight">
                                        <button type="button" className="btn "><i className="bi bi-person-circle me-2"></i>KING</button>
                                        <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </header>
                        <div className="bd-main mt-4">
                            <div className="container">
                                <div className="row text-center">
                                    <h2>All yours sessions</h2>
                                </div>
                                <div className="row mt-2">
                                    <div className="rounded bg-light d-flex flex-column flex-md-row justify-content-md-between align-items-stretch bd-highlight session pe-0">
                                        <div className="bd-highlight flex1">
                                            <div className="logo1">
                                                <p className="text-center"><i className="bi bi-emoji-sunglasses-fill" style={{fontSize: "xx-large"}}></i></p>
                                            </div>
                                            <div className="ms-md-0">
                                                <p><span className="fw-bold">December test session</span><br/><span className="fw-lighter">Registered</span> Access to courses</p>
                                            </div>
                                        </div>

                                        <div className="bd-highlight">
                                            <div className="logo1">
                                                <p className="text-center"><i className="bi bi-calendar3" style={{fontSize: "xx-large"}}></i></p>
                                            </div>
                                            <div className="ms-md-3">
                                                <p><span className="fw-bold">START ON</span><br/>10/05/2023</p>
                                            </div>
                                        </div>
                                        <div className="bd-highlight">
                                            <div className="logo1">
                                                <p className="text-center"><i className="bi bi-clock" style={{fontSize: "xx-large"}}></i></p>
                                            </div>
                                            <div className="ms-md-3">
                                                <p><span className="fw-bold">END ON</span><br/>10/05/2023</p>
                                            </div>
                                        </div>
                                        <div className="bd-highlight bg-success  rounded-end justify-content-center align-items-center details">
                                            <p className="mb-0" style={{color: "aliceblue"}}><span className="fw-bold align-middle ">View</span><br/>DETAILS</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-2 pb-4 ">
                                    <div className="rounded bg-light d-flex flex-column flex-md-row justify-content-md-between align-items-stretch bd-highlight session pe-0">
                                        <div className="bd-highlight flex1">
                                            <div className="logo1">
                                                <p className="text-center"><i className="bi bi-emoji-sunglasses-fill" style={{fontSize: "xx-large"}}></i></p>
                                            </div>
                                            <div className="ms-md-0">
                                                <p><span className="fw-bold">December test session</span><br/><span className="fw-lighter">Registered</span> Access to courses</p>
                                            </div>
                                        </div>

                                        <div className="bd-highlight">
                                            <div className="logo1">
                                                <p className="text-center"><i className="bi bi-calendar3" style={{fontSize: "xx-large"}}></i></p>
                                            </div>
                                            <div className="ms-md-3">
                                                <p><span className="fw-bold">START ON</span><br/>10/05/2023</p>
                                            </div>
                                        </div>
                                        <div className="bd-highlight">
                                            <div className="logo1">
                                                <p className="text-center"><i className="bi bi-clock" style={{fontSize: "xx-large"}}></i></p>
                                            </div>
                                            <div className="ms-md-3">
                                                <p><span className="fw-bold">END ON</span><br/>10/05/2023</p>
                                            </div>
                                        </div>
                                        <div className="bd-highlight rounded-end justify-content-center align-items-center details" style={{backgroundColor: "rgb(5, 5, 44)"}}>
                                            <p className="mb-0" style={{color: "aliceblue"}}><span className="fw-bold align-middle ">View</span><br/>DETAILS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer >
                    <div className=" pt-2 mt-1 text-light"
                         style={{backgroundColor: "rgb(70, 9, 139)",
                             width: "98%",
                             marginLeft: "auto",
                             marginRight: "auto"
                         }}>
                        <div className="row gx-0">
                            <div className="col-12 col-md-4 ps-5">
                                <p className="text-primary fw-bold"><span className="text-bg-primary text-light">U</span>train</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit.  Aspernatur autem doloremque sint doloribus quibusdam.
                                </p>
                            </div>
                            <div className="col-12 col-md-3 offset-md-1 ">
                                <p className="text-start text-secondary ps-3 fw-bold">CONTACT</p>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link text-start" aria-current="page" href="#"><i className="bi bi-telephone-fill"></i> ##########</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-start" href="#"><i className="bi bi-whatsapp"></i> ##########</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2">
                                <p className="text-start ps-3 fw-bold">LINKS</p>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link text-start" aria-current="page" href="#"> HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-start" href="#"> CONTACT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-start" href="#"> SUPPORT</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2">
                                <p className="text-start text-secondary ps-3 fw-bold">LINKS</p>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link text-start" aria-current="page" href="#"> FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-start" href="#"> Feedback</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-start" href="#"> Testimonial</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="dropdown-divider" />
                        <div className="d-flex flex-column flex-md-row bd-highlight text-start  justify-content-between px-5">
                            <div className="p-2 bd-highlight">all rights reserved</div>
                            <div className="p-2 bd-highlight">terms of use</div>
                            <div className="p-2 bd-highlight">privacy policy</div>
                            <div className="p-2 bd-highlight">return policy</div>
                            <div className="p-2 bd-highlight">make by king</div>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    );
}
export default StoreFront;