import React from 'react';
import Link from 'next/link';

const GrowthTipsContent = () => {
    return (
        <div className="growth-tips">
            <div className="container">
                        <div className="section-title header-padding">
                            <h2>Business Growth Tips</h2>
                            <div className="bar"></div>
                        </div>
                    {/* <div className="services-details">
                        <div className="text">
                            <h3>Business Growth Tips</h3>
                        </div>
                        <div className="banner-heading row">
                            <div className="left-side-heading col-lg-4 col-md-12">
                                <h3 className="col-lg-12 col-md-6">How future ready is your business?</h3>
                            </div>
                            <div className="right-side-content col-lg-6 col-md-12">
                                <div className="text-content">
                                    <p>Business dynamics are always changing - more so today than ever before and every business leader or owner is planning and executing strategies to survive, grow and thrive!</p>
                                    <p>Our "How future ready is your business ?" template helps you assess your readiness !</p>
                                    <p>To assure you that you are indeed on the right track for the future or spot areas to help your plans & execution more robust to succeed in the future.</p>
                                </div>
                                <div className="banner-bottom-content">
                                    <h6>How future ready is your business?</h6>
                                    <Link href="/quiz">
                                        <button className="check-now-button">Check Now - Free</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row future-ready">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <h3>How Future Ready Is Your Business?</h3>
                                {/* <p>Holistic Business mentoring to deliver higher growth & profits</p> */}

                                {/* <Link href="/service-line-one">
                                    <a className="read-btn">Know More</a>
                                </Link> */}
                            </div>
                        </div>
                        <div class="right-side-content section-title col-lg-7 col-md-6">
                                <p>Business dynamics are always changing - more so today than ever before and every business leader or owner is planning and executing strategies to survive, grow and thrive!</p>
                                <p>Our "How future ready is your business ?" template helps you assess your readiness !</p>
                                <p>To assure you that you are indeed on the right track for the future or spot areas to help your plans & execution more robust to succeed in the future.</p>
                                {/* <a class="read-btn" href="/service-line-one">Know More</a> */}
                                <h6>How future ready is your business?</h6>
                                    <Link href="/quiz">
                                        <button className="default-btn">Check Now - Free</button>
                                    </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default GrowthTipsContent;