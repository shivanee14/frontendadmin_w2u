import React from "react";

function contactUs() {
  return (
    <>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-9 mx-auto text-center">
                <h1 className="display-4">Contact us</h1>
                {/* breadcrumb */}
                <nav
                  className="d-flex justify-content-center"
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb breadcrumb-dots mb-0">
                    <li className="breadcrumb-item">
                      <a href="index-2.html">
                        <i className="bi bi-house me-1" /> Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Contact us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* Contact info START */}

        <section className="pt-4">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <iframe
                  className="w-100 h-300 grayscale"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5595.183824360241!2d73.67273539328941!3d24.588235074284874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5741e948ff7%3A0x35ea4bf21a63d932!2sTarangsoft%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1680075644053!5m2!1sen!2sin"
                  title="locaton_map"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  aria-hidden="false"
                  tabIndex={0}
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="row mt-5">
                  <div className="col-sm-6 mb-5 mb-sm-0">
                    <h3>Advertise / Sponsorships</h3>
                    <p>Contact us directly related Advertisement</p>
                    <address>
                      Address: 2nd floor, 6A/1, Ambamata Scheme
                      <br />
                      Udaipur, Rajasthan, 313001
                    </address>
                    <p>
                      Call:{" "}
                      <a href="#" className="text-reset">
                        <u>+91 123456789 (Toll-free)</u>
                      </a>
                    </p>
                    <p>
                      Email:{" "}
                      <a href="#" className="text-reset">
                        <u>advertise@example.com</u>
                      </a>
                    </p>
                    <p>
                      Support time: Monday to Saturday
                      <br />
                      9:30 am to 6:00 pm
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <h3>Contact Information </h3>
                    <p>
                      Get in touch with us to see how we can help you with your
                      query
                    </p>
                    <address>
                      Address: 2nd floor, 6A/1, Ambamata Scheme
                      <br />
                      Udaipur, Rajasthan, 313001
                    </address>
                    <p>
                      Call:{" "}
                      <a href="#" className="text-reset">
                        <u>123456789 (Toll-free)</u>
                      </a>
                    </p>
                    <p>
                      Email:{" "}
                      <a href="#" className="text-reset">
                        <u>contact@example.com</u>
                      </a>
                    </p>
                    <p>
                      Support time: Monday to Saturday
                      <br />
                      9:00 am to 5:30 pm
                    </p>
                  </div>
                </div>
                <hr className="my-5" />
                <div className="row">
                  <div className="col-12">
                    <h2>Contact us</h2>
                    <p>
                      Please fill in the form below and we will contact you very
                      soon. Your email address will not be published.
                    </p>
                    {/* Form START */}
                    <form
                      className="contact-form"
                      id="contact-form"
                      name="contactform"
                      // method="POST"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <input
                              required
                              id="con-name"
                              name="name"
                              type="text"
                              className="form-control"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <input
                              required
                              id="con-email"
                              name="email"
                              type="email"
                              className="form-control"
                              placeholder="E-mail"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <input
                              required
                              id="con-subject"
                              name="subject"
                              type="text"
                              className="form-control"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <textarea
                              required
                              id="con-message"
                              name="message"
                              cols={40}
                              rows={6}
                              className="form-control"
                              placeholder="Message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 text-start">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* Form END */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default contactUs;
