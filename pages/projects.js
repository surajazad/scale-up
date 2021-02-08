import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectsStyleOne from '../components/Projects/ProjectsStyleOne';
import Footer from '../components/Layout/Footer';

class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ProjectsStyleOne />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Projects;