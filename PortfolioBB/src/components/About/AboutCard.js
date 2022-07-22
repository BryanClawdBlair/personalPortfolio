import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bryan Blair </span>
            from <span className="purple"> Johannesburg, South Africa.</span>
            Former <span className="purple">teacher</span> and <span className="purple">commercial pilot,</span> now <span className="purple">junior fullstack developer,</span> based in <span className="purple"> Europe, </span> seeking employment.
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Aviation
            </li>
            <li className="about-activity">
              <ImPointRight /> Geopolitics
            </li>
            <li className="about-activity">
              <ImPointRight /> History
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventure Travel
            </li>            
          </ul>
          <br />          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
