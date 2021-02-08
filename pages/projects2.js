import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectsStyleTwo from '../components/Projects/ProjectsStyleTwo';
import Footer from '../components/Layout/Footer';

class Projects2 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ProjectsStyleTwo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Projects2;