import React from 'react'
import Navbar from './NavbarComponent'
import { Container, Row, Col } from "react-bootstrap"
import avathar from "../Assets/images/img_avatar.png"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Home() {
    return (
        <>
            <Navbar />
            <Row className="mt-4">
                <Col xl="12">
                    <div className="profile-image ">
                        <img src={avathar} className='rounded-circle' style={{ width: "100%" }}></img>
                        <h1 className='my-name mt-4'>Abhishek Ps</h1>
                        <h4 className='designation'>Full Stack Developer</h4>
                    </div>
                </Col>

                <Col xl="12" className="mt-5">
                    <h3 className='my-name'>Projects</h3>

                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Creative Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2011"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Art Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2008 - 2010"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                            <p>
                                User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006 - 2008"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="April 2013"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                            <p>
                                Strategy, Social Media
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2012"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        //icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002 - 2006"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        //icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                            <p>
                                Creative Direction, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        // icon={<StarIcon />}
                        />
                    </VerticalTimeline>

                </Col>

                <Col xl="12" className="mt-5">
                    <h3 className='my-name'>My Github Projects</h3>
                    <ul className='list-section'>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                    </ul>
                </Col>

                <Col xl="12" className="mt-5">
                    <h3 className='my-name'>Achievement</h3>
                    <ul className='list-section'>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                    </ul>
                </Col>

                <Col xl="12" className="mt-5">
                    <h3 className='my-name'>Achievement</h3>
                    <ul>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                    </ul>
                </Col>
                <Col xl="12" className="mt-5">
                    <h3 className='my-name'>Achievement</h3>
                    <ul>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                    </ul>
                </Col>
                <Col xl="12" className="mt-5">
                    <h3 className='my-name'>Achievement</h3>
                    <ul>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                        <li>Face Recoganation</li>
                    </ul>
                </Col>
            </Row>
        </>
    )
}

export default Home
