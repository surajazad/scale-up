import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className={`preloader ${this.props.loading ? '' : 'preloader-deactivate'}`}>
                <div className="preloader">
                    <span></span>
                    <span></span> 
                </div>
            </div>
        );
    }
}

export default Loader;