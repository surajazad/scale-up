import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import FeedbackStyleOne from '../components/Common/FeedbackStyleOne';
import Footer from '../components/Layout/Footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <AboutContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default About;