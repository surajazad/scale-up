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
                    <h2>Artifical Intelligence startup </h2>
                    <h4>Product ideas converted into Go To Market models – new Customer pipes</h4>
                    <img src={require("../../images/service-details/services-details1.jpg")} alt="image" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>First mover advantage in the market with product innovation through AI, ML & VR</p>
                                <p>Start Customer pilots for scaling up in 12 months</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <p>Prioritize products focus basis market disruption & size </p>
                                <p>Engage with customer segments for pilots & Proof of concept – 6 ~9 months</p>
                                <p>Initiate scale up plans with newer customers & segments</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <p>Products launched – Edutech, Retail, Medical segments</p>
                                <p>Customer pilots underway – positive feedback</p>
                                <p>Plans for scaleup underway</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default KnowMoreContent;