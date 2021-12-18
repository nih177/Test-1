import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import './product-2.css'

export default function Product2() {
    return (
        <>
            <div className="p-2-section-1">
                <div className="product-2-content-container">
                    {/* <Container> */}
                    <Row className="mt-4">
                        <Col md={6}>
                            <img src="/images/pic-1.svg" className="w100p " />
                        </Col>
                        <Col md={6}>
                            <div className="d-flex flex-column">
                                <span className="p-headings text-blue">DC Fast Charger</span>
                                <span className="p-headings text-black line-height-0">35KW</span>
                                <div className="h10"></div>
                                <span className="bold600">DCBOX001</span>
                                <div className="h20"></div>
                                <h6>Atom DC 35 KW charger provides smart charging</h6>
                                <h6>solutions with</h6>
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
                    <span className="p-headings">Charge Your Ev In Minutes!</span>
                    <span className="w60p d-flex flex-column justify-content-center align-items-center">EV Charger by Axonify Tech is a unique EV Charging Solution that is perfect for all types of residential</span>
                    <span className="w60p">and commercial EV charging purposes  We provide DC fast chargers which are compatible with all types of electric vehicles.</span>
                    <span className="w60p d-flex flex-column justify-content-center align-items-center">It is a fully modular solution that is easy to install and intuitive to use as well as facilitate maintenance upgrades.</span>
                </div>
                <div className="h35"></div>
                <div className="h35"></div>
                <Row className="w99p">
                    <Col md={2}></Col>
                    <Col md={4}>
                        <div className="h20p"></div>
                        <div className="d-block mx-auto w100p">
                            <div className="">
                                <span className="p-headings w283">Supported Protocols</span><br />
                            </div>
                            <div className="h20"></div>
                            <div className="ml-4">
                                <div className="h10"></div>
                                <div className="icon-box-row  ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Bharath</h6>
                                </div>
                                <div className="icon-box-row ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>CHAdeMO</h6>
                                </div>
                                <div className="icon-box-row ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>CCS</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="" md={6}>
                        <img src="/images/first.svg" className="w99p" height="580" />
                    </Col>
                </Row>
                <Row className="w99p">
                    <Col md={1}></Col>
                    <Col className="d-flex justify-content-center" md={5}>
                        <img src="/images/second.svg" className="w99p" height="580" />
                    </Col>
                    <Col md={6}>
                        <div className="h20p"></div>
                        <div className="h10p"></div>
                        <div className="d-block mt-auto mb-auto pl15p">
                            <span className="p-headings ">User</span><br />
                            <span className="p-headings line-height-0">Interface</span>
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
                        <img src="/images/fourth.svg" className="w99p" height="580" />
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
                    <Col className="" md={6}>
                        <img src="/images/pic-1.svg" className="w99p" height="580" />
                    </Col>
                    <Col md={6} className="height-fit-content">
                        {/* <div className="h20p"></div> */}
                        <div className="h10p"></div>
                        <div className="d-block mt-auto mb-auto pl15p">
                            <span className="p-headings ">Technical Specifications</span><br />
                            <span className="bold600">ATOM DC CHARGER 35KW</span>
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
                                            <td>Output Power Rating (Max)</td>
                                            <td>15 kW, 30 kW… 150 kW*</td>
                                        </tr>
                                        <tr className="border-black">
                                            <td>Input voltage range</td>
                                            <td>380-480 V ac 3 o (50-60Hz)</td>
                                        </tr>
                                        <tr>
                                            <td>Connector Protocols</td>
                                            <td>Bharath CHAdeMO, CCS-1 / 2, GB/T</td>
                                        </tr>
                                        <tr className="border-black">
                                            <td>Power Factor</td>
                                            <td>0.99</td>
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
                <img src='/images/sec-3.svg' height="300px" width="90%" className="" />
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