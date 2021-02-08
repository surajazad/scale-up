import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: true,
    items: 1,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
}

class BannerSlider extends Component {

    state = { 
        display: false    
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <div className="main-banner-area">
                {this.state.display ? <OwlCarousel 
                    className="home-sliders owl-carousel owl-theme"
                    {...options}
                >
                    <div className="home-item item-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50 home-page-item-1">
                                            <div className="main-banner-content custom-banner">
                                                <div>
                                                    <h1>
                                                        We help businesses succeed & grow to achieve their true potential
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="custom-btn-banner">
                                                    <Link href="/contact">
                                                        <a className="default-btn">Enquire now</a>
                                                    </Link>
                                                </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                    <div className="home-item item-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50 home-page-item-1">
                                            <div className="main-banner-content custom-banner">
                                                <div>
                                                    <h1>
                                                        How future ready is your business ?
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="custom-btn-banner">
                                                    <Link href="/growth-tips">
                                                        <a className="default-btn">Get Started</a>
                                                    </Link>
                                                </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                    <div className="home-item item-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50 home-page-item-1">
                                            <div className="main-banner-content custom-banner">
                                                <div>
                                                    <h1>
                                                        Helping you “ScaleUp to the next Level”
                                                    </h1>

                                                    <p>
                                                        Last Mile Rural Distribution & Logistics company
                                                        Helped re draw strategies and execution plans for 10x growth
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="custom-btn-banner">
                                                    <Link href="/blog-details">
                                                        <a className="default-btn">Know more</a>
                                                    </Link>
                                                </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                    <div className="home-item item-bg4">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50  home-page-item-1">
                                            <div className="main-banner-content custom-banner">
                                                <div>
                                                    <h1>
                                                        Who benefits from us ?
                                                    </h1>
                                                </div>
                                            </div>
                                                <div className="custom-btn-banner">
                                                    <Link href="/contact">
                                                        <a className="default-btn">Enquire Now</a>
                                                    </Link>
                                                </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        );
    }
}

export default BannerSlider;