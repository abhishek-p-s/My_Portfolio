import React from 'react';
import avathar from "../Assets/images/img_avatar.png"
import { Link } from 'react-router-dom'
import { Timeline } from 'react-responsive-timeline';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Home() {

    return (
        <>
            <Navbar></Navbar>
            <div className="body-section ">
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <div className="profile-image ">
                            <img src={avathar} className='rounded-circle' style={{ width: "65%" }}></img>
                            <h1 className='my-name mt-4'>Abhishek Ps</h1>
                            <h4 className='designation'>Full Stack Developer</h4>
                        </div>
                    </div>


                    <div className="col-md-6 mt-5">
                        <h3 className='my-name mb-5'>Handled Projects</h3>

                        <Timeline
                            pivot="vertical"
                            direction="left"
                            tooltip={true}
                            textLimit="none"
                            timelines={[
                                {
                                    title: 'Diana Art Gallery',
                                    sub: 'React,Laravel Shopping Cart Project',
                                },
                                {
                                    title: 'One Dashboard',
                                    sub: 'React, Laravel Project (compination of VMS,IMT,FM)',
                                },
                                {
                                    title: 'Re-dt Website',
                                    sub: 'php website ',
                                }
                            ]} />

                        <Link className="btn btn-danger rounded-pill mt-4" to="/works">Read More</Link>

                    </div>

                    <div className="col-md-6 mt-5">
                        <h3 className='my-name mb-5'>My Github Projects</h3>

                        <Timeline
                            pivot="vertical"
                            direction="left"
                            tooltip={true}
                            textLimit="none"
                            timelines={[
                                {
                                    title: 'Restaurent Management',
                                    sub: 'Pure Laravel project',
                                },
                                {
                                    title: 'Face Detection and Understanding Expression',
                                    sub: 'javascript based project using tenserflow API',
                                },
                                {
                                    title: 'Java Stock Management',
                                    sub: 'Stock management project for small shopes',
                                }
                            ]} />

                        <a className="btn btn-danger rounded-pill mt-4" href="https://github.com/abhishek-p-s" target="_blank">Read More</a>

                    </div>


                </div>
            </div>
            <Footer />
        </>
    );
}
