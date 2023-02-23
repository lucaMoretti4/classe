import React from 'react';
import {MenuData} from '../data';

const Navbar = () =>{

    return (
        <nav className="app-Navbar">
            <h1>LOGO</h1>
            <u1 className="navbar-items">
                {MenuData.map((item) => {
                    return (
                        <li>
                            <a href={item.url} className="nav-links" >
                                {item.title}
                                </a>
                        </li>
                    );
                })}
            </u1>

        </nav>

    )


};

export default Navbar;