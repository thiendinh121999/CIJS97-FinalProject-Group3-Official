import React from 'react'
import Header from '../component_dinh/Home/header'
import Footer from '../component_dinh/Home/footer'
import { Link, Outlet } from 'react-router-dom';
import './ManageProduct.css'


function AdminPage() {
    return (
        <div className="backgroundCRUDD">
            <Header />
            <div className='container'>
                <nav className="navbar navbar-expand-xl">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto h-100">

                            <Link to={{
                                pathname: `/Admin/ManageProduct`
                            }}>
                                <li>
                                    <a className="nav-link active" href="products.html">
                                        <i className="fas fa-shopping-cart" />
                                        Products
                                    </a>
                                </li>
                            </Link>

                            <Link to={{
                                pathname: `/Admin/ManageRequest`
                            }}>
                                <li>
                                    <a className="nav-link active" href="products.html">
                                        <i className="fas fa-tachometer-alt" />
                                        Product Request
                                    </a>
                                </li>
                            </Link>

                            <Link to={{
                                pathname: `/Admin/ManageOrder`
                            }}>
                                <li>
                                    <a className="nav-link active" href="products.html">
                                        <i className="far fa-file-alt" />
                                        Product Order
                                    </a>
                                </li>
                            </Link>




                            {/*<li>
                                <a className="nav-link" href="accounts.html">
                                    <i className="far fa-user" /> Accounts
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-cog" />
                                    <span>
                                        {" "}
                                        Settings <i className="fas fa-angle-down" />{" "}
                                    </span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">
                                        Profile
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Billing
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Customize
                                    </a>
                                </div>
                            </li>*/}
                        </ul>
                    </div>
                </nav>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    )
}

export default AdminPage