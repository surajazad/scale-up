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
                    <h2>Healthcare company</h2>
                    <h4>Building a premium brand | Developing new products | New channels for growth</h4>
                    <img src={require("../../images/service-details/services-details1.jpg")} alt="image" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>Build a premium healthcare brand </p>
                                <p>Offer high quality personal protection  and wellness products to Indian consumers </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <p>Build products with highest quality specifications</p>
                                <p>Contract manufacturing tie-ups & Quality control </p>
                                <p>Innovative Sales Channels </p>
                                <p>Create high impact marketing actions</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <p>Launched personal protection products for Indian market – high quality & CE certification</p>
                                <p>Top contract manufacturing facilities developed</p>
                                <p>Effective use of Digital marketing & Online channels </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default KnowMoreContent;