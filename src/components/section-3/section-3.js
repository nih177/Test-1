import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import "./section-3.css";

function Section3() {
    return (
        <div className="section-3">
            <h1 className="section-3-heading align-center blue">About Us</h1>
            <h5 className="align-center">Who We Are</h5>
            <br />
            <br />
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h6>Axonify Tech Systems is engaged in design & manufacturing of smart/connected
products, providing solutions in the areas of EV Charging and IoT
</h6>  <br />
                        <h6>Technology innovation is our core value and we strive to build products that we love
                        to use. As an Axon transmits information in the brain, Axonify connects multiple
devices and collaborate with external systems.</h6>
                        <br />
                        <br />
                        <button>Read More</button>
                    </Col>
                    <Col xs={12} md={6}></Col>
                </Row>
            </Container>

        </div>
    );
}

export default Section3;