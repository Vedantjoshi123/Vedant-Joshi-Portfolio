import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Particle from "../../Particle";
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_0f66rsn', 
      'template_z70o8d3', 
      formData, 
      'Oh96f11U5YcTx1aFY'
    ).then((result) => {
        toast.success("Message Sent Successfully!");
        setLoading(false);
      }, (error) => {
        toast.error("An error occurred, please try again.");
        setLoading(false);
      });
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ alignItems: "center", paddingTop: "20px", paddingBottom: "20px", justifyContent:"space-between" }}>
          <h1 className="contact-heading">Get in <strong className="purple">Touch</strong></h1>
          <Col md={6} className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120073.2008367173!2d75.2227995193368!3d19.87007730904594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a2a73e!2sChhatrapati%20Sambhajinagar%20(Aurangabad)%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1723461893751!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chhatrapati Sambhajinagar (Aurangabad) Map"
            ></iframe>
          </Col>
          <Col md={5}> 
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group> 

              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : 'Send'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Container>
  );
}

export default Contact;
