import "../styles/contact.css";

const Contact = () => {

    return (
        <>
        <body>
            <div className="main-contact">
            <h1>Contact</h1>
            <p>If you have any questions, please feel free to contact us</p>
            </div>
            <section className="contact-section">
            <div className="address">
                    <div className="address-box">
                        <div className="address-text">
                        <p>E-mail: travel-blog@travel-blog.com</p>
                        <p>Tel: +123 456 789 123</p>
                        <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10650.422158402735!2d11.57407!3d48.13713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f527811f8d%3A0x8c7438eb676c71f6!2sSEPHORA%20CORNER%20M%C3%9CNCHEN!5e0!3m2!1shu!2sde!4v1685440113253!5m2!1shu!2sde"
              height="170"
              width="500"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
                        </div>
                    </div>     
            </div>
                <div className="contact-container">
                    <h2>Write to us</h2>
                    <div className="contact-row">
                        <div className="contact-col">
                            <div className="inputBox">
                                <input type="text" name="" required="required"></input>
                                <span className="text">First Name</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="contact-col">
                            <div className="inputBox">
                                <input type="text" name="" required="required"></input>
                                <span className="text">Last Name</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-row">
                        <div className="contact-col">
                            <div className="inputBox">
                                <input type="text" name="" required="required"></input>
                                <span className="text">E-mail</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="contact-col">
                            <div className="inputBox">
                                <input type="text" name="" required="required"></input>
                                <span className="text">Mobile</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-row">
                        <div className="contact-col">
                            <div className="inputBox textarea">
                                <textarea required="required"></textarea>
                                <span className="text">Type Your Message Here...</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-row">
                        <div className="contact-col">
                            <input type="submit" value="Send"></input>
                        </div>
                    </div>
                </div>
            </section>
            </body>
        </>
    )
}

export default Contact;