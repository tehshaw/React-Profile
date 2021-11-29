import React, { children } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavBar from './NavBar'

export default function Layout({children}) {
    return (
        <div className="mb-2">
                <Container fluid>
                    <Row className="justify-content-between align-items-center">
                        <Col xs={12} md={4} lg={3} className="text-center">
                            <h1>
                                 Mike Henshaw
                            </h1>
                        </Col>

                        <Col xs={12} md={4} lg={3} >
                            <NavBar />
                        </Col>
                    </Row>

                </Container>
        <main>
        <Container className="w-50">
            <Row 

                className="justify-content-center text-center align-items-center" 
                style={{height:"75vh"}} 
            >
            {children}
            </Row>
        </Container>
        </main>
        </div>
    )
}
