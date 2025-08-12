import React from "react";
import "./Contact.css";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3581928a-3c1c-4ef8-bb90-cde29dbf89c7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your message has been sent successfully!",
      });
    } else {
      console.log("Error", res);
    }
  };

  return (
    <div className="contact-page">
      <main className="contactContainer">
        <section className="contactFormContainer">
          <div className="contact-title">
            <h2>Feel free to contact me !</h2>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
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
