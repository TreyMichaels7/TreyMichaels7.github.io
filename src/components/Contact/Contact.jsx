// import React, { useContext } from 'react';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  // const { contact } = useContext(PortfolioContext);
  // const { cta, btn, linkedIn } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Meet the Team" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <div className="contact-block">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href="https://www.linkedin.com/in/ashmann/"
              >
                Ashmann Syngle
              </a>
            </div>
            <div className="contact-block">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href="https://www.linkedin.com/in/treymichaels7/"
              >
                Trey Michaels
              </a>
            </div>
            <div className="contact-block">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href="https://www.linkedin.com/in/samuelchrist/"
              >
                Samuel Christ
              </a>
            </div>
            <div className="contact-block">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href="https://www.linkedin.com/in/zikai-song-44b001184/"
              >
                Zikai Song
              </a>
            </div>
            <p className="contact-wrapper__text">
              This team will no longer be actively working on updates after 5/31/2021. However, we
              are open to passing it off to a future capstone group or team to work on future
              extensions to the project. Reach out to us if interested!
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
