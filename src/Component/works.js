import React from 'react';
import { Timeline } from 'react-responsive-timeline';
import Navbar from './Navbar';
import Footer from './Footer';

function works() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <div className="row mb-5" style={{ marginTop: "100px" }}>
                    <h3>Projects</h3>
                    <div className="col-md-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Diana Art Gallery</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Shopping cart project</h6>
                                <p class="card-text">React, Laravel project</p>
                                <a href="https://dianam.art" target="_blank" class="card-link btn btn-danger text-white">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">One dashboard</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Compined project of VMS, IMT, feedback project</h6>
                                <p class="card-text">React, Laravel project</p>
                                <a href="/" class="card-link btn btn-danger text-white">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Re-dt Website</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Webpage for realestate business project</h6>
                                <p class="card-text">php, html, javscript, css project</p>
                                <a href="/" class="card-link btn btn-danger text-white">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Digital Logbook</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Logbook  project</h6>
                                <p class="card-text">React, Laravel project</p>
                                <a href="/" class="card-link btn btn-danger text-white">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Marwan electrical Website</h5>
                                <h6 class="card-subtitle mb-2 text-muted">html,css, javascript,php project</h6>
                                <p class="card-text">React, Laravel project</p>
                                <a href="/" class="card-link btn btn-danger text-white">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Builtech Website</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Website</h6>
                                <p class="card-text">php,javascript project</p>
                                <a href="/" class="card-link btn btn-danger text-white">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Titan Website</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Website</h6>
                                <p class="card-text">php,javascript,html</p>
                                <a href="/" class="card-link btn btn-danger text-white">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Kapil Mohan website</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Website</h6>
                                <p class="card-text">php,javascript,html</p>
                                <a href="/" class="card-link btn btn-danger text-white">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">FROSEC  website</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Website</h6>
                                <p class="card-text">html,javascript,php</p>
                                <a href="/" class="card-link btn btn-danger text-white">Go</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">dyhs website</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Website</h6>
                                <p class="card-text">laravel</p>
                                <a href="/" class="card-link btn btn-danger text-white">Go</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"> peregrine website </h5>
                                <h6 class="card-subtitle mb-2 text-muted">Website</h6>
                                <p class="card-text">php</p>
                                <a href="/" class="card-link btn btn-danger text-white">Go</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default works;