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
                    <h2>Last mile Rural Distribution & Logistics Company</h2>
                    <h4>Helping redraw strategies & execution plans for 10x growth</h4>
                    <img src={require("../../images/service-details/services-details1.jpg")} alt="image" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>Fulfil the aspirations of Rural India with a strong assisted e commerce play</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <p>Finalize the products & services portfolio </p>
                                <p>Roadmap of All India footprint for building sales points across rural India</p>
                                <p>Plug last mile delivery issues with Tech platform</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <p>Maximum profit portfolio of products & services developed</p>
                                <p>Pilot started in 2 states – proof of concept success</p>
                                <p>Hybrid logistics model for lower costs and fastest delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default KnowMoreContent;