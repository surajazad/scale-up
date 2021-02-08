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
                    <h2>Government segment focused company</h2>
                    <h4>Connection with new brands & product lines | Increased revenues & profitability </h4>
                    <img src={require("../../images/service-details/services-details1.jpg")} alt="image" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>Deeper engagement with Government customers </p>
                                <p>Offer new brands and products – increase revenues & profitability</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <p>Assessment of customer base – market sizing and opportunities </p>
                                <p>Prioritize products to focus – customer acceptance & profitability</p>
                                <p>Reach out to new brands </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <p>Product lines prioritized for customers – added solutions and services portfolio : improved profitability </p>
                                <p>Tie up with 3 new top brands & agreement on exclusivity, support & margins</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default KnowMoreContent;