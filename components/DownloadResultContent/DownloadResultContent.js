import React from 'react';
import Link from 'next/link';

const DownloadResultContent = () => {
    return (
        <div className="download-result-content header-padding">
            {/* <div className="result-container container ptb-100">
                <div className="left-side-box">
                    <p>How future ready is your business?</p>
                </div>
                <div className="result-content">
                    <div className="download-form-input-field">
                        <input type="text" placeholder="Your Name" className="download-form-input-text" />
                        <input type="text" placeholder="Your Email" className="download-form-input-text" />
                        <input type="text" placeholder="Your Contact Number" className="download-form-input-text" />
                        <input type="text" placeholder="Your Company" className="download-form-input-text" />
                    </div>
                    <div className="download-button">
                        <Link href="/service-details">
                            <button className="download">Download Now</button>
                        </Link>
                    </div>
                </div>
            </div> */}
            <section className="contact-section">
                <div className="container">

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <form id="contactForm">
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" className="form-control" required placeholder="User Name" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="text" name="msg_subject" id="msg_subject" className="form-control" required  placeholder="Your Contact Number" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name="msg_subject" id="msg_subject" className="form-control" required  placeholder="Your Company" />
                                    </div>
                                
                                    <div className="form-group">
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="6" required  placeholder="How can we help you? You could brief us, if possible"></textarea>
                                    </div>

                                    <div className="send-btn">
                                        {/* <button type="submit" className="default-btn">
                                            Download Now
                                        </button> */}
                                        <button className="default-btn">
                                            <a href="https://www.learningcontainer.com/download/sample-pdf-file-for-testing/?wpdmdl=1566&refresh=6011cff8ecb041611780088" download target="_blank">Download Now</a>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-image">
                                <img src={require("../../images/contact.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DownloadResultContent;