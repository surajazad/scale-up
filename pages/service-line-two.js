import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceLineTwoContent from '../components/Services/ServiceLineTwoContent';
import Footer from '../components/Layout/Footer';

class ServiceLineOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ServiceLineTwoContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceLineOne;