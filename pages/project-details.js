import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectDetailsContent from '../components/Projects/ProjectDetailsContent';
import Footer from '../components/Layout/Footer';

class ProjectDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ProjectDetailsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ProjectDetails;