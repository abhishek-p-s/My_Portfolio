import React from 'react';
import { Link, NavLink } from "react-router-dom"

export default function MobileNav() {
    return (
        <mobilenav>
            <ul>
                <li><NavLink to="/" activeStyle={{ color: "#FE523B" }}>Home</NavLink></li>
                <li><NavLink to="/works" activeStyle={{ color: "#FE523B" }}>Works</NavLink></li>
                <li><NavLink to="/blog" activeStyle={{ color: "#FE523B" }}>Blog</NavLink></li>
                {/* <li><NavLink to="/news" activeStyle={{ color: "#FE523B" }}>News</NavLink></li> */}
                <li><NavLink to="/about" activeStyle={{ color: "#FE523B" }}>About</NavLink></li>
            </ul>
        </mobilenav>);
}
