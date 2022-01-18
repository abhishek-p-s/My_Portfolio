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
                    <img src={avathar} className='rounded-circle'></img>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
