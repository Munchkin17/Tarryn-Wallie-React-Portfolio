import React from "react";
//import { useForm, ValidationError } from "@formspree/react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
//import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  /*const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }*/
  /*const [formDetails, setFormDetails] = useState(formInitialDetails);
  //const [buttonText, setButtonText] = useState('Send');
  //const [status, setStatus] = useState({});*/

  /*const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
*/
  /*const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };*/
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tzsbfer', 'template_de2qqbb', form.current, 'ohN6_omx9U-zl7X3_')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="fname" /*value={formDetails.firstName}*/ placeholder="First Name" required /*onChange={(e) => onFormUpdate('firstName', e.target.value)}*/ />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="sname" /*value={formDetails.lastName}*/ placeholder="Last Name" required /*onChange={(e) => onFormUpdate('lastName', e.target.value)}*//>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" /*value={formDetails.email}*/ placeholder="Email Address" required /*onChange={(e) => onFormUpdate('email', e.target.value)}*/ />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="pnumber" /*value={formDetails.phone}*/ placeholder="Phone No." /*onChange={(e) => onFormUpdate('phone', e.target.value)}*//>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" /*value={formDetails.message}*/ name="message" placeholder="Message" required /*onChange={(e) => onFormUpdate('message', e.target.value)}*/></textarea>
                      <button type="submit"><span>{/*buttonText*/}Send</span></button>
                    </Col>
                    {/*
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    */}
                  </Row>
                </form>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}