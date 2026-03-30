export const About = () => {
  return (
   <section className="about" id="about">
      <h1 className="about-hading">About Me</h1>

      <div className="about-container">

        <div className="about-left">
          <img
            src="Logo.webp"
            alt="profile"
          />
        </div>

        <div className="about-right">
          <div className="info">
            <p>
              I am Dev Patel, web developer from Gujarat, India. I have
              rich experience in web site design and building and customization,
              also I am good at WordPress.
            </p>
          </div>
          <div className="skills">
            <div className="skill">
              <span>Development</span>
              {/* <span>90%</span> */}
              <div className="bar">
                <div className="progress html"></div>
              </div>
            </div>

            <div className="skill">
              <span>UI/UX design</span>
              {/* <span>80%</span> */}
              <div className="bar">
                <div className="progress css"></div>
              </div>
            </div>

            <div className="skill">
              <span>Photography</span>
              {/* <span>60%</span> */}
              <div className="bar">
                <div className="progress react"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <h3>198</h3>
          <p>Project completed</p>
        </div>
        <div className="stat">
          <h3>5670</h3>
          <p>Cup of coffee</p>
        </div>
        <div className="stat">
          <h3>427</h3>
          <p>Satisfied clients</p>
        </div>
        <div className="stat">
          <h3>35</h3>
          <p>Nominees winner</p>
        </div>
      </div>
    </section>
  );
};