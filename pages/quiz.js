import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import QuizContent from '../components/QuizContent/QuizContent';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';

class Quiz extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <QuizContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Quiz;