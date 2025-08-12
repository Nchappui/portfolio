import React from "react";
import "./Contact.css";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact-page">
      <main className="contactContainer">
        <section className="contactFormContainer">
          <div className="contact-title">
            <h2>Feel free to contact me !</h2>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
              />
            </div>
            <div className="full">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
              />
            </div>

            <div className="contact-actions">
              <button type="submit" className="submit-btn">
                Send
              </button>
            </div>
          </form>
        </section>
      </main>
      <section className="empty"></section>

      <Footer />
    </div>
  );
};

export default Contact;
