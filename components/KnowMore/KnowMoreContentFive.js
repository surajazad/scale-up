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
                    <h2>North India Technology Retail Chain</h2>
                    <h4>Helping reset business operations & drive higher profitability | Raise capital</h4>
                    <img src={require("../../images/service-details/services-details1.jpg")} alt="image" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>Regain leadership position</p>
                                <p>Reset business operations for higher profitability </p>
                                <p>Raise capital for expansion</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <p>Identifying Focus categories, brands & products to boost </p>
                                <p>Strengthen operations to drive higher store sales & improved consumer experience</p>
                                <p>Evaluate options for raising capital </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <p>New categories introduced. Worked with top brands for improved margins & terms of trade  </p>
                                <p>Store operations strengthened – team skill sets, improved retail experience & stocks</p>
                                <p>Raising capital through equity route  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default KnowMoreContent;