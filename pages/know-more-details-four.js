import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import KnowMoreContent from '../components/KnowMore/KnowMoreContentFour';

class KnowMore extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <KnowMoreContent />
                
            </React.Fragment>
        );
    }
}

export default KnowMore;