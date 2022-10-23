import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
    return (
            <div className="d-flex">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Main
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">
                            Users
                        </Link>
                    </li>
                </ul>
            </div>
            );
};

export default NavBar;
