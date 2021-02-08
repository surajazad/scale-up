import React, { Component } from 'react';
import Link from 'next/link';

class KnowMoreContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        
        return (
            <section className="news-details-area ptb-100">
                <div className="container">
                    <h2>B2B focused IT Hardware & Services company</h2>
                    <h4>Covid impact and reinventing the business model</h4>
                    <img src={require("../../images/service-details/services-details1.jpg")} alt="image" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>To regain business momentum</p>
                                <p>Set the base for 50% growth in the next Financial year</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <p>Build a deeper customer connect program for wider range of services</p>
                                <p>Focus on profitable products & services </p>
                                <p>Streamline operations to reduce costs </p>
                                <p>Marketing for demand generation</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <p>Sales management skills built – top customers retained.New ones added.</p>
                                <p>Shift to more profitable products & services : mix improved  30% to 50% </p>
                                <p>Improved operations with 20% cost reduction </p>
                                <p>Brand recognition</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default KnowMoreContent;