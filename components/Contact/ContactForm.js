import React, { Component } from 'react';
import Link from 'next/link';

// class ContactForm extends Component {
//     render() {
//         return (
//             <section className="contact-section ptb-100">
//                 <div className="container">
//                     <div className="contact-text">
//                         <h3>Contact Us</h3>
//                          </div>

//                     <div className="row align-items-center">
//                         <div className="col-lg-7 col-md-12">
//                             <div className="contact-image col-lg-8">
//                                 <p>We work with business, who share our beliefs and not just do business because it has to be done</p>
//                             </div>
//                         </div>
//                         <div className="col-lg-5 col-md-12">
//                             <div className="contact-form">
//                                 <form id="contactForm">
//                                     <div className="form-group">
//                                         <input type="text" name="name" id="name" className="form-control" required placeholder="Your Name" />
//                                     </div>
                                    
//                                     <div className="form-group">
//                                         <input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
//                                     </div>
                                    
//                                     <div className="form-group">
//                                         <input type="text" name="msg_subject" id="msg_subject" className="form-control" required  placeholder="Your Contact Number" />
//                                     </div>

//                                     <div className="form-group">
//                                         <input type="text" name="msg_subject" id="msg_subject" className="form-control" required  placeholder="Your Company" />
//                                     </div>
                                
//                                     <div className="form-group">
//                                         <textarea name="message" className="form-control" id="message" cols="30" rows="6" required  placeholder="How can we help you? You could brief us, if possible"></textarea>
//                                     </div>

//                                     <div className="send-btn">
//                                         <button type="submit" className="default-btn">
//                                             Enquire Now
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

class ContactForm extends Component {

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries());
        console.log(value);
        fetch('http://localhost:3001/api/query', {
                method: 'POST',
                body: JSON.stringify(value),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
        }).then(response => response.json())
        .then(data => console.log(data));
    }

    render() {
        return (
            <section className="contact-section">
                <div className="container header-padding">
                    <div className="contact-text spacing-custom">
                        <h3>We work with business, who share our beliefs and not just do business because it has to be done</h3>
                        <p>Have Any Questions About Us?</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <form id="contactForm" onSubmit={this.onSubmitHandler}>
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" className="form-control" required placeholder="User Name" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="text" name="phone" id="msg_subject" className="form-control" required  placeholder="Your Contact Number" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name="company" id="msg_subject" className="form-control" required  placeholder="Your Company" />
                                    </div>
                                
                                    <div className="form-group">
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="6" required  placeholder="How can we help you? You could brief us, if possible"></textarea>
                                    </div>

                                    <div className="send-btn">
                                        <button type="submit" className="default-btn">
                                            Enquire Now
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
        );
    }
}

export default ContactForm;