import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                
      <main id="main">
        {/* ======= Contact Section ======= */}
        <section id="skills" className="skills">
          </section>
          {/* End Skills Section */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="icofont-google-map" />
                    <h4>Location:</h4>
                    <p>998, district 1, Bien Hoa City, Dong Nai Provinde</p>
                  </div>
                  <div className="email">
                    <i className="icofont-envelope" />
                    <h4>Email:</h4>
                    <p>17130209@st.hcmuaf.edu.vn</p>
                  </div>
                  <div className="phone">
                    <i className="icofont-phone" />
                    <h4>Call:</h4>
                    <p>+84 0704614563</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-5 mt-lg-0">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="form-row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validate" />
                    </div>
                    <div className="col-md-6 form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validate" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validate" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                    <div className="validate" />
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>
            
          </div>
          
        </section>{/* End Contact Section */}
        <section id="skills" className="skills">
          </section>
      </main>{/* End #main */}
            </div>
        )
    }
}
