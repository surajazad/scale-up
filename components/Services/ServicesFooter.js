import React from 'react';
import Link from 'next/link';

const ServicesFooter = () => {
    return (
        <div className="service-footer">
            {/* <h2>Think we can help you?</h2>
            <Link href="/service-details">
                <button>Enquire Now</button>
            </Link> */}
            <div className="home-page-subscribe-area subscribe-area container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="subscribe-content">
                                        <h2>Think we can help you?</h2>
                                        </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <form className="newsletter-form">
                                    <Link href="/service-details">
                                        <button>Enquire Now</button>
                                    </Link> 
                                    </form>
                                </div>
                            </div>
                        </div>
        </div>
    )
}

export default ServicesFooter;