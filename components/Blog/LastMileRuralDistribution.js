import React, { Component } from 'react';
import BlogSidebar from './BlogSidebar';
import Link from 'next/link';
import CommentsArea from './CommentsArea';

class LastMileRuralDistribution extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        
        return (
            <section className="news-details-area case-studies-sub-component-container header-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Helping redraw strategies & execution plans for 10x growth</h2>
                        <div className="bar"></div>
                    </div>
                    <img src={require("../../images/last-mile-banner.jpg")} alt="image" />
                    <div className="row strategic-plans">
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Goal</h3>
                                <p>Fulfil the aspirations of Rural India with a strong assisted e commerce play</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>Our approach</h3>
                                <ul class="details-list">
                                    <li>Finalize the Products & Services portfolio to deliver revenue and profits</li>
                                    <li>Roadmap of All India footprint for setting up Sale points in rural areas</li>
                                    <li>Plug the Last mile delivery issues with tech based platforms for efficiency</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="more-features-content">
                                <h3>The Result</h3>
                                <ul class="details-list">
                                    <li>Finalize the Products & Services portfolio to deliver revenue and profits</li>
                                    <li>Roadmap of All India footprint for setting up Sale points in rural areas</li>
                                    <li>Plug the Last mile delivery issues with tech based platforms for efficiency</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LastMileRuralDistribution;