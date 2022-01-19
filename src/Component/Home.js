import React from 'react'
import Navbar from './NavbarComponent'
import { Container, Row, Col } from "react-bootstrap"
import avathar from "../Assets/images/img_avatar.png"

function Home() {
    return (
        <Container>
            <Navbar />
            <Row className="mt-4">
                <Col xl="6">
                    <div className="profile-image text-center">
                        <img src={avathar} className='rounded-circle' style={{ width: "100%" }}></img>
                        <h2 className='my-name mt-4'>Abhishek Ps</h2>
                        <h4 className='designation'>Full Stack Developer</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
