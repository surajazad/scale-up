import React from 'react';

const ServiceCaseStudies = () => {
    return (
        <div className="service-case-studies services-section">
            <div className="title">
                <h3>Case Studies</h3>
                <h5>We have the expertise in supporting business across industries</h5>
            </div>
            <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-it"></i>
                                </div>
                                <h3>Last Mile Rural Distribution and Logistics Company</h3>
                                <p>Helped re draw strategies and execution plans for 10x growth</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-setting"></i>
                                </div>
                                <h3>All Technology startup</h3>
                                <p>Product ideas converted into Go To market models - new Customer & Channel pipes</p>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default ServiceCaseStudies;