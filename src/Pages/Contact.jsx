export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
        <h1 className="contact-hading">Get In Touch</h1>
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="subtitle">
            Let's talk about everything!
          </h2>
          <p className="desc">
            Don't like forms? Send me an email. 
          </p>
        </div>


        <form className="contact-form" >
          <div className="row">
            <input type="text" placeholder="Insert your name" />
            <input type="email" placeholder="Insert your email" />
          </div>

          <input type="text" placeholder="Insert your Subject" />

          <textarea placeholder="Write your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};