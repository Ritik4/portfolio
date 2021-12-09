import React from 'react'
import "./contact.css";

function Contact() {
    return (
        <div>
            <section className="contact_section">
                <h1>contact.</h1>
                <div className="socialMedia_contact">
                    <div className="container">
                        <div>
                            <div className="phon_icon_contaienr flex">
                                <i className="fas fa-phone fa-5x"></i>
                            </div>
                        </div>
                        <div className="socialMedia_icon_wrapper">
                            <h2>Do you speak Hindi? it’s ok if you don’t, i speak English too.</h2>
                            <div className="contact_social_icons flex">
                                <div className="flex"> <i className="fab fa-2x fa-linkedin-in"></i><span>linkedin</span> </div>
                                <div className="flex"> <i className="fab fa-2x fa-twitter"></i>  <span>twitter</span> </div>
                                <div className="flex"> <i className="fab fa-2x fa-instagram"></i> <span>instagram</span> </div>
                                <div className="flex">  <i className="fab fa-2x fa-facebook"></i> <span>facebook</span></div>
                            </div>
                        </div>
                    </div>    
                </div>

                <div className="email_contact">
                    <div >
                        <div className="container">
                            <div className="email_icon_contaienr flex">
                                <i class="fa-5x far fa-envelope"></i>
                            </div>
                        </div>

                        <div className="email_form_wrapper container">
                            <h2>send me an email</h2>
                            <form action="" className="email_form">
                                <input placeholder="name" className="name" type="text" />
                                <input placeholder="email" className="email" type="email" />
                                <textarea className="message" rows="4" cols="50" name="comment" form="usrform">
                                 Enter message here...</textarea>
                                <button className="form_btn" >send email</button>
                            </form>
                        </div>
                    </div>                                                                  
                </div>
            </section>
        </div>
    )
}

export default Contact;