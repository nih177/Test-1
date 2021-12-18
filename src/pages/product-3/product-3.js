import React from "react";
import { Row, Col, Container } from "react-bootstrap";
// import './product-2.css'

export default function Product3() {
    return (
        <>
            <div className="p-2-section-1">
                <div className="product-2-content-container">
                    {/* <Container> */}
                    <Row className="mt-4">
                        {/* <div className="h10p"></div> */}
                        <Col md={6}>
                            <img src="/images/p-3-1.svg" className="w100p mt-auto mb-auto" />
                        </Col>
                        <Col md={6}>
                            <div className="d-flex flex-column">
                                <span className="p-headings text-blue">Atom Public</span>
                                <span className="p-headings text-black line-height-0">AC Charger 7.2KW</span>
                                <div className="h10"></div>
                                <span className="bold">DCBOX001</span>
                                <div className="h20"></div>
                                <div className="h20"></div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Compact design</h6>
                                </div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Multi Gun Feature</h6>
                                </div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Digital User Interface</h6>
                                </div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>High Quality</h6>
                                </div>
                                <div className="h20"></div>
                                <div className="d-flex flex-row">
                                    <div className="d-block">
                                        Capacity<br />
                                        <button className="mt-1 bold">3.3 to 7.2kw</button>
                                    </div>
                                    <div className="w20"></div>
                                    <div className="d-block">
                                        Color<br />
                                        <button className="mt-1 bold">Deep Blue + White</button>
                                    </div>
                                </div>
                                <div className="h20"></div>
                                <span>Support</span>
                                <div className="h20"></div>
                                <div className="d-flex flex-row">
                                    <button className="bold">Get Price Quotation</button>
                                    <div className="w20"></div>
                                    <button className="bold">Download Brocher</button>
                                </div>
                                <div className="mt-3"></div>
                                <div className="d-flex flex-row">
                                    <button className="bold">Manufacture information</button>
                                    <div className="w20"></div>
                                    <button className="bold">Warranty Policy</button>
                                </div>

                            </div>
                        </Col>
                    </Row>
                    {/* </Container> */}
                </div>
            </div>
            <div className="p-2-section-2">
                <img src='/images/sec-2.svg' height="300px" width="90%" className="" />
            </div>
            <div className="p-2-section-3 pt-4 pb-4">
                <div className="h20"></div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="p-headings">Connect, Charge, Go</span>


                    <span className="w60p d-flex flex-column justify-content-center align-items-center">To meet the massive EV adoption plans of the government of India, Charging Infrastructure plays a key role.</span>
                    <span className="w60p d-flex flex-column justify-content-center align-items-center">We are working on modular and robust solutions to support various standards in the EV industry.</span>
                </div>
                <div className="h35"></div>
                <div className="h35"></div>
                <Row className="w99p">
                    <Col md={2}></Col>
                    <Col md={4}>
                        <div className="h20p"></div>
                        <div className="d-block mx-auto w100p">
                            <div className="">
                                <span className="p-headings w283">Multi Gun Supported</span><br />
                            </div>
                            <div className="h20"></div>
                            <div className="ml-4">
                                <span>Atom AC Charger support 3 different charging protocals i.e,</span>
                                <div className="h10"></div>
                                <div className="icon-box-row  ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Bharath AC001</h6>
                                </div>
                                <div className="icon-box-row ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>J1772</h6>
                                </div>
                                <div className="icon-box-row ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Type2 AC</h6>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col className="" md={6}>
                        <img src="/images/p-3-2.svg" className="w99p" height="580" />
                    </Col>
                </Row>
                <Row className="w99p">
                    <Col md={1}></Col>
                    <Col className="d-flex justify-content-center" md={5}>
                        <img src="/images/p-3-6.svg" className="w99p" height="580" />
                    </Col>
                    <Col md={6}>
                        <div className="h20p"></div>
                        <div className="h10p"></div>
                        <div className="d-block mt-auto mb-auto pl15p">
                            <span className="p-headings ">Digital</span><br />
                            <span className="p-headings line-height-0">User Interface</span>
                            <div className="h20"></div>
                            <div className="">
                                7 Inch FHD Touch Display With Simple User Interface
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="w99p">
                    <Col md={2}></Col>
                    <Col md={4} className="">
                        <div className="h20p"></div>
                        <div className="h10p"></div>
                        <div className="d-block mx-auto w100p">
                            <div className="mb-2">
                                <span className="p-headings w283">Smart</span><br />
                                <span className="p-headings line-height-0">Payment Options</span>
                            </div>
                            <div className="ml-4">
                                <span>CMS Communication & App-based Payment</span>
                                <div className="h10"></div>
                                <div className="h5px"></div>
                                <div className="icon-box-row  ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Smart Card Reader</h6>
                                </div>
                                <div className="icon-box-row ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>App-based Payment gateway</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="" md={6}>
                        <img src="/images/third.svg" className="w99p" height="580" />
                    </Col>
                </Row>
                <Row className="w99p">
                    <Col className="" md={6}>
                        <img src="/images/p-3-3.svg" className="w99p" height="580" />
                    </Col>
                    <Col md={6}>
                        <div className="h20p"></div>
                        <div className="h10p"></div>
                        <div className="d-block mt-auto mb-auto pl15p">
                            <span className="p-headings ">Compact</span><br />
                            <span className="p-headings line-height-0">Design</span>
                            <div className="h20"></div>
                            <div className="">
                                Suitable Pole Mount And Wall Mount Option<br />
                                High Quality Metal Enclosure With IP65, IP54
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="w99p">
                    <Col md={1}></Col>
                    <Col className="" md={5}>
                        <img src="/images/p-3-4.svg" className="w90p" height="580" />
                    </Col>
                    <Col md={6} className="height-fit-content">
                        {/* <div className="h20p"></div> */}
                        <div className="h10p"></div>
                        <div className="d-block mt-auto mb-auto pl15p">
                            <span className="p-headings ">Technical Specifications</span><br />
                            <span className=" ">ATOM DC CHARGER 35KW</span>
                            <div className="h20"></div>
                            <div className="d-block">
                                <table class="table table-borderless w90p">
                                    <thead>
                                        <tr className="bg-dark-blue text-white">
                                            <th scope="col">Specification</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Output Power Rating (Max))</td>
                                            <td>3.3 kW, 7.2 kW... 22 kW</td>
                                        </tr>
                                        <tr className="border-black">
                                            <td>Input voltage range</td>
                                            <td>230V 1-Ph AC, 415V 3-Ph AC</td>
                                        </tr>
                                        <tr>
                                            <td>Connector Protocols</td>
                                            <td>Bharath AC001, J1772, Type2 AC,</td>
                                        </tr>
                                        <tr className="border-black">
                                            <td>Operating Tempature</td>
                                            <td>-20 C to 55 C</td>
                                        </tr>
                                        <tr>
                                            <td>Server Connectivity</td>
                                            <td>OCPP 1.6, 2.0*</td>
                                        </tr>
                                        <tr className="border-black">
                                            <td>Protection Degree</td>
                                            <td>IP54, IP65</td>
                                        </tr>
                                        <tr>
                                            <td>Connectivity</td>
                                            <td>3G, 4G, Ethernet</td>
                                        </tr>
                                        <tr className="border-black">
                                            <td>Payment System</td>
                                            <td>Smart Card & App based payment</td>
                                        </tr>
                                        <tr>
                                            <td>Dimensions</td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* <div className="h25"></div> */}
                {/* <div className="h25"></div> */}
            </div>
            <div className="p-2-section-2">
                <img src='/images/p-3-5.svg' height="300px" width="90%" className="" />
            </div>
            <div className="p-2-section-4">
                <div className="h25"></div>
                <Row>
                    <Col className="d-flex flex-column justify-content-start align-items-center w50p ">
                        {/* <div> */}
                        <img className="w40p mt-1" src="/images/download.svg"></img><div className="h10"></div>
                        <span className="mt-2">Download</span><div className="h10"></div>
                        <button className="w200">Brochere User Manual</button>
                        {/* </div> */}
                    </Col>
                    <Col className="d-flex flex-column justify-content-start align-items-center w50p ml50">
                        <img className="w40p" src="/images/headphones.svg"></img><div className="h10"></div>
                        <span>Place an Order</span><div className="h10"></div>
                        <button className="w200">Get in Touch</button>
                    </Col>
                </Row>
                <div className="h25"></div>
            </div>
        </>
    );
}