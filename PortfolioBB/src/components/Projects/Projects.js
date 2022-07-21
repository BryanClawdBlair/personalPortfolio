import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Trowit"
              description="A client project where we create and share digital business cards with just the tap of a phone. Project uses React and MySQL."
              ghLink="https://github.com/Billy-Night/Trowit"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Kichi's World"
              description="A virtual partner to help you complete tasks on a daily basis. Be warned, she can be moody sometimes!"
              ghLink="https://github.com/thalermo/kichis_world"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Magic M8"
              description="Ah my first project! An animated magic 8 ball with randomised answers to help you with even the most difficult decisions."
              ghLink="https://github.com/Billy-Night/Magic_m8"
              demoLink=""              
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
