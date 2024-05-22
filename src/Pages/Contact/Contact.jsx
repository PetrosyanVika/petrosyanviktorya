import React from "react";
import './Contact.scss'

export default function Contact() {
  return (
    <div className="Contact">
      <h1>We love hearing from our users! Whether you have questions, feedback, or need assistance, we're here to help. Reach out to us through any of the following channels, and our dedicated support team will get back to you as soon as possible.</h1>
      <div className="Contact__social">
        <h3>Email:</h3>
        <span>For general inquiries and support: support@traveland.com</span>
        <h3>Phone:</h3>
        <span>Call us at: +1 (800) 123-4567</span>
        <h3>Address:</h3>
        <span>Traveland Inc.
              123 Adventure Lane
              Wanderlust City, 56789
              Country</span>
             
      </div>
    </div>
  );
}
