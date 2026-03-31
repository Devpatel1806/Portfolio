import { useState } from "react";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true);


    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-hading">Get In Touch</h1>

      <div className="contact-container">
        <div className="contact-left">
          <h2 className="subtitle">Let's talk about everything!</h2>
          <p className="desc">
            Don't like forms? Send me an email.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Insert your name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Insert your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Insert your Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Write your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {showPopup && (
        alert("Data Is Send Dev Will Connect")
      )}
    </section>
  );
};