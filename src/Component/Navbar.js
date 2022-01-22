import React from 'react';
import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/works">Works</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/news-letter">Newsletter</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>

    );
}