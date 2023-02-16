import React from "react";
import { Row, Col } from "react-bootstrap";
import NavHeader from "./Navbar";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <NavHeader />
      <div className="portfolio-container">
        <Row id="home" className="portfolio-section home-page">
          <Row>
            <Col>
              <h1 className="title-text">ETHAN HE</h1>
            </Col>
          </Row>
        </Row>
        <Row id="about" className="portfolio-section about-page">
          <Row>
            <h1 className="title-text">ABOUT</h1>
            <p className="about-content">
              We’re Mack and Pouya - professional cake tasters, wedding criers,
              and just outright lovers of love. In short, we’re pretty big fans
              of marriage! Marriage is such a special commitment and your
              wedding marks the witness and celebration of this bond. We’re
              super stoked for this amazing next chapter of your life. We
              wholeheartedly recommend it!
            </p>
          </Row>
        </Row>
        <Row id="projects" className="portfolio-section projects-page">
          <Row>
            <h1 className="title-text">PROJECTS</h1>
            <p>Display some of your notable projects or classwork here! </p>
            <p>You can add images and descriptions below</p>
          </Row>
          <Row>
            <Col>
              <div className="project-container">Project 1</div>
            </Col>
            <Col>
              <div className="project-container">Project 2</div>
            </Col>
            <Col>
              <div className="project-container">Project 3</div>
            </Col>
          </Row>
        </Row>
        <Row id="contact" className="portfolio-section contact-page">
          <Row>
            <h1 className="title-text">CONTACT ME</h1>
            <p>Insert any socials here: LinkedIn, GitHub, etc. </p>
            <p>You can also add your resume here!</p>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default Portfolio;
