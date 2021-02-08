import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceLineOneContent from '../components/Services/ServiceLineOneContent';
import Footer from '../components/Layout/Footer';

class ServiceLineOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ServiceLineOneContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceLineOne;