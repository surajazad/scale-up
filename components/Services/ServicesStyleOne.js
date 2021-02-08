import React, { Component } from 'react';
import Link from 'next/link';

class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="services-section our-services-home">
                <div className="">
                    <div className="section-title">
                        <h2>Our Services</h2>
                        <p>All leading to your growth</p>
                        <div className="bar"></div>
                    </div>

                    {/* <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-it"></i>
                                </div>
                                <h3>ScaleUp to the Next level</h3>
                                <p>Holistic Business mentoring to deliver higher growth & profits</p>

                                <Link href="/service-line-one">
                                    <a className="read-btn">Know More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-setting"></i>
                                </div>
                                <h3>Accelerate your growth</h3>
                                <p>Business Consulting & Advisory Services to win in the market place</p>
                                
                                <Link href="/service-line-two">
                                    <a className="read-btn">Know More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-promotion"></i>
                                </div>
                                <h3>Connect to  ScaleUp</h3>
                                <p>Strategic Connections & eco systems to scaleup your business</p>
                                
                                <Link href="/service-line-three">
                                    <a className="read-btn">Know More</a>
                                </Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog first-service-card">
                                    <div className="image">
                                        {/* <Link href="/service-line-one">
                                            <a>
                                                <img src={require("../../images/case-studies-1.jpg")} alt="image" className="image-custom-border"/>
                                            </a>
                                        </Link> */}
                                        
                                        <h2>ScaleUp to the Next level</h2>
                                    </div>

                                    <div className="content">
                                        <p>Holistic Business mentoring to deliver higher growth & profits</p>

                                        <Link href="/service-line-one">
                                            <a className="read-btn">Know More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog second-service-card">
                                    <div className="image">
                                        {/* <Link href="/service-line-two">
                                            <a>
                                                <img src={require("../../images/case-studies-2.jpg")} alt="image" className="image-custom-border" />
                                            </a>
                                        </Link> */}
                                        <h2>Accelerate your growth</h2>
                                    </div>

                                    <div className="content">
                                        <p>Business Consulting & Advisory Services to win in the market place</p>
                                        
                                        <Link href="/service-line-two">
                                            <a className="read-btn">Know More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog third-service-card">
                                    <div className="image">
                                        {/* <Link href="/service-line-three">
                                            <a>
                                                <img src={require("../../images/case-studies-3.jpg")} alt="image" className="image-custom-border" />
                                            </a>
                                        </Link> */}
                                        <h2>Connect to  ScaleUp</h2>
                                    </div>

                                    <div className="content">
                                        <p>Strategic Connections & eco systems to scaleup your business</p>
                                        
                                        <Link href="/service-line-three">
                                            <a className="read-btn">Know More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                {/* Shape Images */}
                <div className="default-shape">
                    <div className="shape-1">
                        <img src={require("../../images/shape/shape4.png")} alt="image" />
                    </div>
                    <div className="shape-2 rotateme">
                        <img src={require("../../images/shape/shape5.svg")} alt="image" />
                    </div>
                    <div className="shape-3">
                        <img src={require("../../images/shape/shape6.svg")} alt="image" />
                    </div>
                    <div className="shape-4">
                        <img src={require("../../images/shape/shape7.png")} alt="image" />
                    </div>
                    <div className="shape-5">
                        <img src={require("../../images/shape/shape8.png")} alt="image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesStyleOne;