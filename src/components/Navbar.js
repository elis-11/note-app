import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (    
    <nav className="navbar navbar-dark navbar-expand-lg bg-secondary">
        <div className="navbar-brand">
            Note App
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                 className="nav-link"
                    to="/"
                    exact
                    >
                        Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                 className="nav-link"
                    to="/about"
                    >
                        Info
                </NavLink>
            </li>
        </ul>
    </nav>
)