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
              description="Built an end-to-end retail analytics platform processing 185,950 sales transactions across 263.66M in total revenue. Designed a PostgreSQL star schema, automated Python ETL pipeline, and 5 interactive Power BI dashboards tracking revenue, customer demographics, product performance, and geographic sales across 5 major cities."
              ghLink="https://github.com/Devyang111/SmartMart-Ecommerce-Analytics"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="EquityLens Analytics"
              description="A population health analytics platform built in Python and Power BI that analyses preventive care access inequalities across 50,000 synthetic individuals in England, revealing a 32.5 percentage point uptake gap between the most and least deprived communities across 7 NHS screening and prevention services."
              ghLink="https://github.com/Devyang111/EquityLens-Analytics"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;