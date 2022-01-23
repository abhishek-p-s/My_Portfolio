import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function about() {
    return (


        <>
            <Navbar></Navbar>
            <div className="container">
                <div className="row mb-5" style={{ marginTop: "100px" }}>
                    <h3>About</h3>
                    <div className="about-card mt-5">
                        1 years of experience as a full-stack software developer following Agile SCRUM methodology, and with good
                        demonstrating experience in low and high level design, development of presentation logic implementation and client-server
                        applications under MVC architecture. Solid hands on experience with design , development and deployment of Web and Enterprise
                        products in various domains like e-Commerce.
                        Well-experienced in understanding design, code maturity features and makes suggestions to the client team.
                    </div>

                    <div className="col-md-12 mt-5">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="2017 - 2020"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon=""
                            >
                                <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                                <h4 className="vertical-timeline-element-subtitle">Banglore, Karnataka</h4>


                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2017- 2020"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            //icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science</h3>
                                <h4 className="vertical-timeline-element-subtitle">University of Calicut</h4>

                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date=""
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            //icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">MEARN Stack Developer</h3>
                                <h4 className="vertical-timeline-element-subtitle">India</h4>

                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                // date="2006 - 2008"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            //icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Freelancer</h3>
                                <h4 className="vertical-timeline-element-subtitle">India</h4>


                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                //date="April 2013"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            // icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Violinist</h3>
                                <h4 className="vertical-timeline-element-subtitle">Kerala</h4>

                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                //date="November 2012"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            //icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Certification in MERN stack web development</h3>
                                <h4 className="vertical-timeline-element-subtitle">Certification</h4>

                            </VerticalTimelineElement>

                        </VerticalTimeline>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
