import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import "./section-2.css";

function Section2() {
    return (
        <div className="section-2">
            <h1 className="section-2-heading align-center white">Our Products</h1>
            <h5 className="align-center white">We Provide Innovative Products For Sustainable Future.</h5>
            <br />
            <br />
            <Container>
                <div className="section-2-card-container">
                    <Card bsPrefix="section-2-card" style={{  }}>
                        <Card.Img variant="top" src="/images/power.png" />
                        <Card.Body>
                            <Card.Title bsPrefix="align-center">EV Charging</Card.Title>
                            <h6 className="section-2-card-content">
                            Our chargers are easy to use and include the AC &
DC types. Both Bharat EV, Type 2 charging types
available. OCPP 1.6 (json) is supported for public
AC / DC Chargers. EV Chargers can be monitored
and managed using the Mobile App. Has flexible
payment options such as using Credit/Debit card,
    </h6>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                    <Card bsPrefix="section-2-card" style={{   }}>
                        <Card.Img variant="top" src="/images/power.png" />
                        <Card.Body>
                            <Card.Title  bsPrefix="align-center">CMS Solution</Card.Title>
                            <h6 className="section-2-card-content">
                            Charge Point Management System is suitable for
Apartments, Car Parks and Fleets. Facilitates the
drivers/users to charge, monitor and view the past
charging sessions, through the mobile app.
Supports QR based and RFID tag based
authentication is possible
    </h6>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                    <Card bsPrefix="section-2-card" style={{   }}>
                        <Card.Img variant="top" src="/images/power.png" />
                        <Card.Body>
                            <Card.Title  bsPrefix="align-center">IoT (Agri & Industrial)</Card.Title>
                            <h6 className="section-2-card-content">
                            Innovative products developed to help the
agricultural and industrial sectors. The products
can be managed and monitored using mobile apps.
Products include i) Motor Starters - AgriCell Mini,
AgriCell Max ii) Sensors - Vibration, Weather
    </h6>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container>

        </div>
    );
}

export default Section2;