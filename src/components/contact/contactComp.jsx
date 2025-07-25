import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      className="py-5 min-vh-100 d-flex align-items-center"

      id="contact"
    >
      <Container>
        {/* Animated Title */}
        <motion.h2
          className="text-center mb-5 display-4 fw-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Get In Touch
        </motion.h2>

        <Row className="justify-content-center g-5">
          {/* Contact Form */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <Form className="p-4 rounded-3" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 10px rgba(0, 210, 255, 0.2)',
                border: '1px solid rgba(0, 210, 255, 0.3)',
                backdropFilter: 'blur(5px)'
              }}>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label className="fw-medium">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    className="py-2 border-2"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label className="fw-medium">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="py-2 border-2"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="fw-medium">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your message..."
                    className="py-2 border-2"
                  />
                </Form.Group>

                <div className="text-center">
                  <motion.button
                    type="submit"
                    className="btn btn-primary px-4 py-2 border-0"
                    style={{
                      background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)',
                      borderRadius: '50px',
                      fontWeight: '600',
                      width: '100%',
                      maxWidth: '200px'
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 5px 15px rgba(58, 123, 213, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </Form>
            </motion.div>
          </Col>

          {/* Contact Info */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-100 d-flex flex-column justify-content-center"
            >
              <div className="p-4">
                <h3 className="mb-4" style={{ color: '#3a7bd5' }}>Contact Information</h3>

                <div className="d-flex flex-column gap-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="d-flex align-items-center gap-3"
                  >
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#3a7bd520', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a7bd5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h5 className="mb-0 fw-medium">Location</h5>
                      <p className="mb-0 theme-text">Lahore, Pakistan</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="d-flex align-items-center gap-3"
                  >
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#3a7bd520', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a7bd5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h5 className="mb-0 fw-medium">Email</h5>
                      <p className="mb-0 theme-text">najeebbhatti565@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="d-flex align-items-center gap-3"
                  >
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#3a7bd520', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a7bd5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="mb-0 fw-medium">Phone</h5>
                      <p className="mb-0 theme-text">+92 327 4945565</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-5">
                  <h5 className="mb-3" style={{ color: '#3a7bd5' }}>Let's Connect</h5>
                  <div className="d-flex gap-3">
                    {[
                      { name: 'github', url: 'https://github.com/Najeeb565' },
                      { name: 'linkedin', url: 'https://www.linkedin.com/in/najeeb-bhatti-dev' },
                      { name: 'twitter', url: 'https://twitter.com/najeebbhatti565' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: '#3a7bd520',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#3a7bd5',
                          textDecoration: 'none'
                        }}
                      >
                        <i className={`bi bi-${social.name}`} style={{ fontSize: '1.2rem' }}></i>
                      </motion.a>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}