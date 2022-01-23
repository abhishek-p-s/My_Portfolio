import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Violin from "../Assets/images/violin.jpeg"

function blog() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <div className="row mb-5" style={{ marginTop: "100px" }}>
                    <h3>Blog</h3>
                    <div className="col-md-12">
                        <div className="blog-card mt-5">
                            If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="blog-card mt-5">
                            See my new Corona web app with this we can see the count of cases, also i'm planing to do a statistic graph
                            for improving this, if anyone intrested in this please ping me

                            <h6><a href="https://github.com/abhishek-p-s/corona_app">https://github.com/abhishek-p-s/corona_app</a></h6>
                        </div>
                    </div>

                    <div className="col-md-6 mt-5">
                        <div className="blo-violin">
                            <img src={Violin} alt="" style={{ width: "100%" }} />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <h5>  Music gives a diffrent dimension, with this thing you can travel to your past.......enjoy the time travelling</h5>
                    </div>


                </div>
            </div>
            <Footer />
        </>);
}

export default blog;
