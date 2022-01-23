import React from 'react';
import { Link } from "react-router-dom"

function Footer() {
    return (

        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="subscribe">
                            <input type="email" name="email" placeholder="Enter your email" />
                            <button className="btn btn-danger">Subscribe</button>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <ul>
                            <li><a href="https://github.com/abhishek-p-s" target="_blank"> <i class="fa fa-github fa-2x"></i></a></li>
                            <li><a href=""><i class="fa fa-instagram fa-2x"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/abhishek-ps-83a2311b6" target="_blank"> <i class="fa fa-linkedin fa-2x"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>

        </footer>
    );
}

export default Footer;
