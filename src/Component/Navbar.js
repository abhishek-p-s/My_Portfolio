import { useState, React } from 'react';
import { Link, NavLink } from "react-router-dom"
import MobileNavBar from './MobileNav';

export default function Navbar() {

    const [navbar, setnavbar] = useState(false);

    const MobileNav = () => {
        setnavbar(!navbar)
    }

    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/" activeStyle={{ color: "#FE523B" }}>Home</NavLink></li>
                    <li><NavLink to="/works" activeStyle={{ color: "#FE523B" }}>Works</NavLink></li>
                    <li><NavLink to="/blog" activeStyle={{ color: "#FE523B" }}>Blog</NavLink></li>
                    {/* <li><NavLink to="/news" activeStyle={{ color: "#FE523B" }}>News</NavLink></li> */}
                    <li><NavLink to="/about" activeStyle={{ color: "#FE523B" }}>About</NavLink></li>
                </ul>
                <div className="bar">
                    <i class="fa fa-bars fa-2x" onClick={MobileNav}></i>
                </div>
            </nav>

            {
                navbar ? <MobileNavBar /> : null

            }
        </>

    );
}
