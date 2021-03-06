import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {/* {title}{' '} */}
            <span className="text-color-main">{name || 'Trey Michaels'}</span>
            {subtitle || ''}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Read More'}
              </Link>
            </span>
          </p>
          <p className="hero-cta">
            <span className="cta-btn text-color-main">
              <a href="https://findmyteam.netlify.app" smooth duration={1000}>
                Link to Site
              </a>
            </span>
          </p>
          <p className="hero-cta">
            <span className="cta-btn text-color-main">
              <a href="https://github.com/ashmannsyngle/FindMyTeam" smooth duration={1000}>
                Github / Handoff Documentation
              </a>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
