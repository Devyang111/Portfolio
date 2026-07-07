import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";


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
        
              title="Stock Market Analysis"
              description="Daily-Stock-Movements-Trading-Volumes-and-Volatility-Impact-on-Market-Trends-and-Investor-Behaviou"
              ghLink="https://github.com/Devyang111/Daily-Stock-Movements-Trading-Volumes-and-Volatility-Impact-on-Market-Trends-and-Investor-Behaviou"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
            
              title="NOC Insight Analytics"
              description="An end-to-end data analytics project demonstrating the evolution from a baseline operational system (V1) to a modern analytics pipeline (V2). The project includes data cleaning using Python, structured storage in PostgreSQL, SQL-based analysis, KPI-driven insights, and interactive Power BI dashboards."
              ghLink="https://github.com/Devyang111/NOC-Insight-Analytics-End-to-End-V1-to-V2-Data-Modernisation-Project"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
            
              title="SmartMart E-commerce Analytics"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Devyang111/NOC-Insight-Analytics-End-to-End-V1-to-V2-Data-Modernisation-Project"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="NHSFlow Intelligence"
              description="An end-to-end analytics platform built on real NHS England RTT data to monitor waiting list pressure, identify breach risk, and support operational decision-making across hospital trusts and specialties in England."
              ghLink="https://github.com/Devyang111/nhsflow-intelligence-rtt-analytics"
            />
        </Col>


         

       

</Row>
      </Container>
    </Container>
  );
}

export default Projects;
