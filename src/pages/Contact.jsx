import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { FadeInDown } from "../animations/ScrollAnimations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn(
        "EmailJS env vars missing. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY in .env",
      );
      return;
    }

    try {
      emailjs.init(PUBLIC_KEY);
    } catch (err) {
      console.error("Failed to initialize EmailJS", err);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS config missing: set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY in .env",
      );
      toast.error("Email service not configured. Contact admin.");
      setLoading(false);
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        toast.success("Message sent successfully 🚀");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        toast.error("Failed to send message ❌");

        setLoading(false);
      });
  };

  return (
    <div className="contact">
      <FadeInDown>
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me for any inquiries or opportunities!</p>
     
      <div className="contact-grid">
        {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>

            <p>
              I'm currently open to freelance work and full-time opportunities. If
              you have an idea or project in mind, let's build something amazing
              together.
          </p>

          <div className="contact-details">
            <div className="contact-email">
              <a href="mailto:kushwahasandip208@gmail.com">
                <MdEmail size={35} /> kushwahasandip208@gmail.com
              </a>
            </div>

            <div className="contact-phone">
              <a href="tel:+9779741865023">
                <FaPhoneAlt size={30} /> +977 9741865023
              </a>
            </div>

            <div className="contact-address">
              <p>
                <IoLocationSharp size={35} /> Madhesh Province, Bara, Nepal
              </p>
            </div>
          </div>

          <p className="contact-message">
            Thanks for visiting my contact page. I look forward to connecting
            with you!
          </p>
        </div>

        {/* Contact Form */}
          <div className="contact-form">
          <h2>Send me a message</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
     </FadeInDown>
    </div>
  );
};

export default Contact;
