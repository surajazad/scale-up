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
        bannerHeadingTitle: "Business Consulting & Advisory Services to win in the market place",
        knowMoreLink: "/service-details",
        enquireNowLink: "/service-details"
    }

    IndividualResult = [
        {
            title: "Alignment with all our stakeholders on key plans developed for action",
            imageUlr: ''
        },
        {
            title: "Hand Hold and Kick start execution - the first step to success",
            imageUlr: ''
        }
    ]

    render() {
        return (
            <div className="services-details-area service-line-one-content header-padding">
                <div className="">
                    <div className="services-details">
                        <div className="section-title">
                            <h2>Accelerate your growth</h2>
                            <div className="bar"></div>
                            {/* <ServicesBannerHeading bannerHeadingData={this.bannerHeadingData}/> */}
                            <section className="tech-section">
                                <div className="">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="tech-content">
                                                <h3>Business Consulting & Advisory Services to win in the market place</h3>
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
                    {/* <div className="section-title">
                        <h3>Need to build & Strengthen a key strategy?</h3>
                        <h4>We help you win in the market place</h4>
                    </div>
                    <div className="details">
                        <p>Every business - a startup or growth focussed one needs a strong business plan for successful execution</p>
                        <p>How do you address the parts of your strategy to Win in the market place? Our consulting expertise is available</p>
                        <div className="exp-guides">
                        <p>Our deep and varied experience guides and helps you put into motion key strategy pillars. A few example of our impactful consulting and advisory services are -</p>
                            <p>Comprehensive Strategic business plan for growth</p>
                            <p>Industry & market sizing</p>
                            <p>Product launches</p>
                            <p>Go To Market plans across geographises, channels and customer</p>
                            <p>Sales Management capability</p>
                            <p>Marketing and brand building</p>
                            <p>Build a future ready organization</p>
                        </div>
                    </div> */}

<section className="features-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Need to build & Strengthen a key strategy?</h2>
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
                                <p>Every business - a startup or growth focussed one needs a strong business plan for successful execution</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon left-icon">
                                    <i className="flaticon-security"></i>
                                </div>
                                {/* <h3>Finest Quality</h3> */}
                                <p>How do you address the parts of your strategy to Win in the market place? Our consulting expertise is available</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-clock"></i>
                                </div>
                                {/* <h3>Time Saving</h3> */}
                                <p>Our deep and varied experience guides and helps you put into motion key strategy pillars.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                </div>

                <div className="business-strategy-details approach-and-methodology">
                    <div className="section-title">
                        <h3>Our approach & methodology</h3>
                        <h4>Customized engagement</h4>
                        <div class="bar"></div>
                    </div>
                    {/* <div className="approach-design-concept">
                        <div className="circle">
                            <p>Detailed assignment of business</p>
                        </div>
                        <div className="circle">
                            <p>Identify key ares/s of building scale</p>
                        </div>
                        <div className="circle">
                            <p>Comprehensive plans & actions developed to help growth</p>
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <p>Detailed assignment -</p>
                                <p>assignment</p>
                                <p>of business</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <p>Identify key</p>
                                <p>ares/s of</p>
                                <p>building scale</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <p>Comprehensive plans</p>
                                <p>& actions developed</p>
                                <p>to help growth</p>
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
                            <img src={require("../../images/delivering-on-our promise-3.png")} alt="image" />
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
                                            <h3>Alignment with all our stakeholders on key plans developed for action</h3>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.</p> */}
                                        </div>

                                        <div className="experience-inner-content">
                                            <div className="icon">
                                                <i className="flaticon-check"></i>
                                            </div>
                                            <h3>Hand Hold and Kick start execution - the first step to success</h3>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.</p> */}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 pr-0">
                                    <div className="experience-image">
                                        <img src={require("../../images/experience-2.png")} alt="image" />
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