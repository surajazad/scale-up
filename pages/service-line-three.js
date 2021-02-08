import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceLineThreeContent from '../components/Services/ServiceLineThreeContent';
import Footer from '../components/Layout/Footer';

class ServiceLineOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ServiceLineThreeContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceLineOne;