import React, { Component } from 'react';
import Link from 'next/link';

class BlogPost extends Component {
    render() {
        return (
            <section className="blog-section pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Case Studies</h2>
                        <p>We have the expertise in supporting business across industries</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row landing-page-section">
                        <div className="col-lg-5 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../images/case-studies-1.jpg")} alt="image" className="image-custom-border" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Last mile Rural Distribution & Logistics Company</a>
                                        </Link>
                                    </h3>
                                    <p>Helped redraw strategies & execution plans for 10x growth</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6">
                            <div className="single-blog">
                                <div className="image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../images/case-studies-2.jpg")} alt="image" className="image-custom-border" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>AI Technology startup</a>
                                        </Link>
                                    </h3>
                                    <p>Product ideas converted into Go To Market models – new Customer pipes</p>
                                </div>
                            </div>
                        </div>
                        <Link href="/blog-details">
                            {/* <div className="view-more">
                                <button>View More</button>
                            </div> */}
                            <div className="col-lg-6 col-md-6">
                                <div className="view-more">
                                    <button type="button">View More</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogPost;