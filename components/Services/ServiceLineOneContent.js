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
        bannerHeadingTitle: "Holistic Business mentoring to deliver higher growth and profits",
        knowMoreLink: "/service-details",
        enquireNowLink: "/service-details"
    }

    IndividualResult = [
        {
            title: "Future readiness as an organization",
            imageUlr: ''
        },
        {
            title: "Pillars of growth & Profitability developed & executed",
            imageUlr: ''
        },
        {
            title: "Entrepreneurial organization with strong systems & process",
            imageUlr: ''
        }
    ]

    render() {
        return (
            <div className="services-details-area service-line-one-content header-padding">
                <div className="">
                    <div className="services-details">
                        <div className="section-title">
                            <h2>Scale Up To The Next Level</h2>
                            <div className="bar"></div>
                            {/* <ServicesBannerHeading bannerHeadingData={this.bannerHeadingData}/> */}
                            <section className="tech-section">
                                <div className="">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="tech-content">
                                                <div className="custom-sub-heading">Holistic Business mentoring to deliver higher growth and profits</div><br/>
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
                        <h3>We understand your business</h3>
                        <h4>And partner you in your growth story</h4>
                    </div>
                    <div className="details">
                        <p>Every business strives to grow & increase profitability.</p>
                        <p>We work with you to plot your business strategies, align or growth plans and helps in flawless execution.</p>
                        <p>"Walk the talk" engagement</p>
                        <p>Impactful business transformation</p>
                        <p>Our engagement covers all aspects of Business strategy & execution</p>
                    </div> */}
                    <section className="features-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>We understand your business</h2>
                        <p>And partner you in your growth story</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row we-understand-your-business">
                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-blueprint"></i>
                                </div>
                                {/* <h3>Great Design</h3> */}
                                <p>Every business strives to grow & increase profitability.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-update"></i>
                                </div>
                                {/* <h3>Optimal Choice</h3> */}
                                <p>We work with you to plot your business strategies, align or growth plans and helps in flawless execution.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon left-icon">
                                    <i className="flaticon-security"></i>
                                </div>
                                {/* <h3>Finest Quality</h3> */}
                                <p>"Walk the talk" engagement</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-trophy"></i>
                                </div>
                                <p>Rigor & discipline is the key component with scheduled reviews | assesments | correctives | Move forward</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-clock"></i>
                                </div>
                                {/* <h3>Time Saving</h3> */}
                                <p>Impactful business transformation</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-clock"></i>
                                </div>
                                {/* <h3>Time Saving</h3> */}
                                <p>Our engagement covers all aspects of Business strategy & execution</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                </div>

                <div className="business-strategy-details approach-and-methodology">
                    <div className="section-title">
                        <h2>Our approach & methodology</h2>
                        <p>Covers all aspects of your business</p>
                        <div class="bar"></div>
                    </div>
                    {/* <div className="approach-design">
                        <div className="firstCircle circle">
                            <p>Detailed assignment - How Future Ready are you?</p>
                        </div>
                        <div className="secondCircle circle">
                            <p>The next 1-3 years Growth Strategy and how to win?</p>
                        </div>
                        <div className="thirdCircle circle">
                            <p>Execution, Execution Execution, Support and reviews & corrections?</p>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <p>Detailed assignment -</p>
                                <p>How Future Ready</p>
                                <p>are you?</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <p>The next 1-3 years</p>
                                <p>Growth Strategy and</p>
                                <p>how to win?</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <p>Execution,</p>
                                <p>Support and reviews</p>
                                <p>& corrections?</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="business-strategy-details">
                    {/* <div className="title">
                        <h3>The result</h3>
                        <h4>Delivering on our promise</h4>
                    </div>
                    <div className="results-container">
                        <IndividualResult results={this.IndividualResult} />
                        <div className="image-container">
                            <img src={require("../../images/delivering-on-our promise-1.png")} alt="image" />
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
                                            <h3>Future readiness as an organization</h3>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.</p> */}
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>Pillars of growth & Profitability developed & executed</h3>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.</p> */}
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>Entrepreneurial organization with strong systems & process</h3>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.</p> */}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 pr-0">
                                    <div className="experience-image">
                                        <img src={require("../../images/experience-1.png")} alt="image" />
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