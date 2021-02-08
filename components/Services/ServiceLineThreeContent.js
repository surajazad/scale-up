import React, { Component } from 'react';
import ServicesBannerHeading from './ServicesBannerHeading';
import Link from 'next/link';
import IndividualResult from './IndividualResult';
import ServiceCaseStudies from './ServiceCaseStudies';

class ServiceLineOneContent extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    bannerHeadingData = {
        bannerHeadingTitle: "Strategic connections & eco system to scaleup your business",
        knowMoreLink: "/service-details",
        enquireNowLink: "/service-details"
    }

    IndividualResult = [
        {
            title: "New connects for business success",
            imageUlr: ''
        },
        {
            title: "Capital raised for business growth",
            imageUlr: ''
        },
        {
            title: "Organized skill & ready for the future",
            imageUlr: ''
        }
    ]

    render() {
        return (
            <div className="services-details-area service-line-one-content header-padding">
                <div className="">
                    <div className="services-details">
                        <div className="section-title">
                             <h2>Connect to ScaleUp</h2>
                             <div className="bar"></div>
                            {/* <ServicesBannerHeading bannerHeadingData={this.bannerHeadingData}/> */}
                            <section className="tech-section">
                                <div className="">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="tech-content">
                                                <h3>Strategic connections & eco system to scaleup your business</h3>
                                                <div className="bar"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 tech-section-buttons">
                                            <div className="tech-btn">
                                                        <Link href="#">
                                                            <a className="default-btn">Know More</a>
                                                        </Link>
                                                    </div>
                                                    <div className="tech-btn">
                                                        <Link href="#">
                                                            <a className="default-btn">Enquire More</a>
                                                        </Link>
                                                    </div>
                                            </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="business-strategy-details">
                    {/* <div className="title">
                        <h3>Connections to scaleup your business</h3>
                        <h4>We help you win in the market place</h4>
                    </div>
                    <div className="details">
                        <p>We bring our eco system expertise to help you in creating new success</p>
                        <p>Facilitating growth - Help you establish connects for business engagement & sales success: Be it a customer connect or a new channel</p>
                        <p>Raising capital - help you raise capital: Financial Institutions to VC</p>
                        <p>Personal coaching to Leadership training to Sales development program - every aspect of organization capability building is addressed</p>
                        <p>Marketing success: Marketing Engine & Digital impact actions</p>
                        <p>And many more......</p>
                    </div> */}
                    <section className="features-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Connections to scaleup your business</h2>
                        <p>We help you win in the market place</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row we-understand-your-business">
                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-blueprint"></i>
                                </div>
                                {/* <h3>Great Design</h3> */}
                                <p>We bring our eco system expertise to help you in creating new success</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-update"></i>
                                </div>
                                {/* <h3>Optimal Choice</h3> */}
                                <p>Facilitating growth - Help you establish connects for business engagement & sales success: Be it a customer connect or a new channel</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon left-icon">
                                    <i className="flaticon-security"></i>
                                </div>
                                {/* <h3>Finest Quality</h3> */}
                                <p>Raising capital - help you raise capital: Financial Institutions to VC</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-clock"></i>
                                </div>
                                {/* <h3>Time Saving</h3> */}
                                <p>Personal coaching to Leadership training to Sales development program - every aspect of organization capability building is addressed</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-clock"></i>
                                </div>
                                {/* <h3>Time Saving</h3> */}
                                <p>Marketing success: Marketing Engine & Digital impact actions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                </div>

                <div className="business-strategy-details approach-and-methodology">
                    <div className="section-title">
                        <h3>Our approach & methodology</h3>
                        <h4>Address Key need of client</h4>
                        <div class="bar"></div>
                    </div>
                    {/* <div className="approach-design-concept">
                        <div className="circle">
                            <p>Your new plan</p>
                        </div>
                        <div className="circle">
                            <p>Our eco system</p>
                        </div>
                        <div className="image-container">
                            <img src={require("../../images/approach-design-1.png")} alt="image" />
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <p>Your new</p>
                                <p>plan</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <p>Our eco system</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="image-container">
                                <img src={require("../../images/approach-design-1.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="business-strategy-details">
                    {/* <div className="title">
                        <h3>The result</h3>
                        <h4>New ways to increase Sales & Profits</h4>
                    </div>
                    <div className="results-container">
                        <IndividualResult results={this.IndividualResult} />
                        <div className="image-container">
                            <img src={require("../../images/delivering-on-our promise-2.png")} alt="image" />
                        </div>
                    </div> */}
                    <section className="experience-section ptb-100">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="experience-inner-area">
                                        <div className="experience-content">
                                            <h3>The result</h3>
                                            <div className="bar"></div>
                                            <p>Delivering on our promise</p>
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>New connects for business success</h3>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.</p> */}
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>Capital raised for business growth</h3>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.</p> */}
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>Organized skill & ready for the future</h3>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.</p> */}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 pr-0">
                                    <div className="experience-image">
                                        <img src={require("../../images/experience-3.png")} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="business-strategy-details business-case-studies">
                    <div className="results-container">
                        <ServiceCaseStudies />
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceLineOneContent;