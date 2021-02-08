import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import LastMileRuralDistribution from '../components/Blog/LastMileRuralDistribution';

class LastMileRuralDistributionContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <LastMileRuralDistributionContent />
                
            </React.Fragment>
        );
    }
}

export default LastMileRuralDistributionContainer;