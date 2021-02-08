import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import GrowthTipsContent from '../components/GrowthTips/GrowthTipsContent';

class GrowthTips extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <GrowthTipsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default GrowthTips;