import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import "./vision-mission.css";

function VisionMission() {
    return (
        <>
        <div className="vision-mission">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="vision-mission-content-container">
                            <div>
                                <h1 className="section-1-header white">Company</h1>
                                <h1 className="section-1-header white">Who we are</h1>
                                <br />
                                <h6 className="white">Axonify Tech Systems is engaged in design & manufacturing of smart/connected
        products, providing solutions in the areas of EV Charging and IoT
</h6>  <br />
                                <h6 className="white">Technology innovation is our core value and we strive to build products that we love
                                to use. As an Axon transmits information in the brain, Axonify connects multiple
devices and collaborate with external systems.</h6>
                                <br />
                                <br />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}></Col>
                </Row>
            </Container>

        </div>
        <div className="vision-statement-section">
        <h1 className="section-3-heading align-center blue">Vision and Mission</h1>
            <h5 className="align-center">What we believe</h5>
            <br />
            <br />
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <h6 className="align-center">Axonify Tech Systems is engaged in design & manufacturing of smart/connected
products, providing solutions in the areas of EV Charging and IoT
</h6>  <br />
                        <h6 className="align-center">Technology innovation is our core value and we strive to build products that we love
                        to use. As an Axon transmits information in the brain, Axonify connects multiple
devices and collaborate with external systems.</h6>
                        <br />
                        <br />
                    </Col>
                    <Col xs={12} md={12}></Col>
                </Row>
            </Container>

        </div>
        </>
    );
}

export default VisionMission;