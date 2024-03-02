import React from "react";

const StoreFront2 = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-lg-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100" id="menu">
                                <li className="nav-item border border-start-0 border-end-0 w-100">
                                    <a href="#" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house" />
                                        <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>
                                <li className="border border-start-0 border-end-0 w-100">
                                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-speedometer2" />
                                        <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                                    </a>
                                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <a href="#" className="nav-link px-0">
                                                <span className="d-none d-sm-inline">Item</span> 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0">
                                                <span className="d-none d-sm-inline">Item</span>
                                                2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="border border-start-0 border-end-0 w-100">
                                    <a href="#" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table" />
                                        <span className="ms-1 d-none d-sm-inline">Orders</span>
                                    </a>
                                </li>
                                <li className="border border-start-0 border-end-0 w-100">
                                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                        <i className="fs-4 bi-bootstrap" />
                                        <span className="ms-1 d-none d-sm-inline">Bootstrap</span>.
                                    </a>
                                    <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <a href="#" className="nav-link px-0">
                                                <span className="d-none d-sm-inline">Item</span>
                                                1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0">
                                                <span className="d-none d-sm-inline">Item</span>
                                                2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="border border-start-0 border-end-0 w-100">
                                    <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-grid" />
                                        <span className="ms-1 d-none d-sm-inline">Products</span>
                                    </a>
                                    <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li className="w-100 border border-bottom-white">
                                            <a href="#" className="nav-link px-0">
                                                <span className="d-none d-sm-inline">Product</span>
                                                1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0">
                                                <span className="d-none d-sm-inline">Product</span>
                                                2
                                            </a>
                                        </li>
                                        <hr />
                                        <li>
                                            <a href="#" className="nav-link px-0">
                                                <span className="d-none d-sm-inline">Product</span>
                                                3
                                            </a>
                                        </li>
                                        <hr />
                                        <li>
                                            <a href="#" className="nav-link px-0">
                                                <span className="d-none d-sm-inline">Product</span>
                                                4
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <hr />
                                <li>
                                    <a href="#" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people" />
                                        <span className="ms-1 d-none d-sm-inline">Customers</span>
                                    </a>
                                </li>
                            </ul>
                            <hr />
                            <div className="dropdown pb-4">
                                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                    <span className="d-none d-sm-inline mx-1">Alex Djoum</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li>
                                        <a className="dropdown-item" href="#">New project...</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Settings</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Profile</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto col-md-9 col-lg-9" style={{background: "#ced4da"}}>
                        <nav className="navbar navbar-expand-lg navbar-dark p-3" id="headerNav" style={{backgroundColor: "rgb(80, 128, 8)"}}>
                            <div className="container-fluid">
                                <a className="navbar-brand d-block d-lg-none" href="#">
                                    <img src="/static_files/images/logos/logo_2_white.png" height="80" />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav mx-auto nav-tabs">
                                        <li className="nav-item border border-start-0 border-end-0 border-top-0 border-bottom-white">
                                            <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mx-2" href="#">Products</a>
                                        </li>
                                        <li className="nav-item d-none d-lg-block">
                                            <a className="nav-link mx-2" href="#">
                                                <img src="/static_files/images/logos/logo_2_white.png" height="80"/>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mx-2" href="#">Pricing</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link mx-2 dropdown-toggle" href="#"
                                               id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                                               aria-expanded="false">
                                                Company
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Blog</a></li>
                                                <li><a className="dropdown-item" href="#">About Us</a></li>
                                                <li><a className="dropdown-item" href="#">Contact us</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="bd-main mt-4">
                            <div className="container">
                                <div className="row text-center"><h2>All yours sessions</h2></div>
                                <div className="row mt-5">
                                    <div
                                        className="rounded bg-light d-flex flex-column flex-md-row justify-content-md-between align-items-stretch bd-highlight session pe-0">
                                        <div className="bd-highlight flex1">
                                            <div className="logo1"><p className="text-center"><i
                                                className="bi bi-emoji-sunglasses-fill"
                                                style={{fontSize: "xx-large"}}></i></p></div>
                                            <div className="ms-md-0"><p><span
                                                className="fw-bold">December test session</span><br /><span
                                                className="fw-lighter">Registered</span> Access to courses</p></div>
                                        </div>
                                        <div className="bd-highlight">
                                            <div className="logo1"><p className="text-center"><i
                                                className="bi bi-calendar3" style={{fontSize: "xx-large"}}></i></p></div>
                                            <div className="ms-md-3"><p><span className="fw-bold">START ON</span><br />10/05/2023
                                            </p></div>
                                        </div>
                                        <div className="bd-highlight">
                                            <div className="logo1"><p className="text-center"><i className="bi bi-clock"
                                                                                                 style={{fontSize: "xx-large"}}></i>
                                            </p></div>
                                            <div className="ms-md-3"><p><span className="fw-bold">END ON</span><br />10/05/2023
                                            </p></div>
                                        </div>
                                        <div
                                            className="bd-highlight bg-success  rounded-end justify-content-center align-items-center details">
                                            <p className="mb-0" style={{color: "aliceblue"}}><span
                                                className="fw-bold align-middle ">View</span><br />DETAILS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2 pb-4 ">
                                    <div
                                        className="rounded bg-light d-flex flex-column flex-md-row justify-content-md-between align-items-stretch bd-highlight session pe-0">
                                        <div className="bd-highlight flex1">
                                            <div className="logo1"><p className="text-center"><i
                                                className="bi bi-emoji-sunglasses-fill"
                                                style={{fontSize: "xx-large"}}></i></p>
                                            </div>
                                            <div className="ms-md-0"><p><span
                                                className="fw-bold">December test session</span><br /><span
                                                className="fw-lighter">Registered</span> Access to courses</p>
                                            </div>
                                        </div>
                                        <div className="bd-highlight">
                                            <div className="logo1"><p className="text-center"><i
                                                className="bi bi-calendar3" style={{fontSize: "xx-large"}}></i></p></div>
                                            <div className="ms-md-3"><p><span className="fw-bold">START ON</span><br />10/05/2023
                                            </p></div>
                                        </div>
                                        <div className="bd-highlight">
                                            <div className="logo1"><p className="text-center"><i className="bi bi-clock"
                                                                                                 style={{fontSize: "xx-large;"}}></i>
                                            </p></div>
                                            <div className="ms-md-3"><p><span className="fw-bold">END ON</span><br />10/05/2023
                                            </p></div>
                                        </div>
                                        <div
                                            className="bd-highlight rounded-end justify-content-center align-items-center details"
                                            style={{backgroundColor: "rgb(5, 5, 44)"}}><p className="mb-0"
                                                                                        style={{color: "aliceblue;"}}><span
                                            className="fw-bold align-middle ">View</span><br />DETAILS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default StoreFront2;