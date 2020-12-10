import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'

export const Hero = () => {
    return (
        <>
            <Jumbotron className="hero">
                <Row className="hero-row" >
                    <Col xs={12} md={4} className="hero-column hero-column-quote" >
                        <p>“El secreto para salir adelante es empezar.”</p>

                    </Col>
                    <Col xs={12} md={6} className="hero-column hero-column-backgroundimage">
                     
                    </Col>
                </Row>
            </Jumbotron>
        </>
    )
}
