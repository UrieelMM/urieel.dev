import React from "react"
import BasicLayout from "../layouts/BasicLayout"
import { Container, Row, Col, Card } from "react-bootstrap"
import Zoom from "react-reveal/Zoom"
import projects from "../utils/projects"
import "./projects.scss"

const Projects = () => {
  return (
    <BasicLayout menuColor=" rgb(76, 0, 255)">
      <Container className="projects">
        <h2>Proyectos</h2>
        <Row>
          {projects.map((project, index) => {
            return (
              <Col key={index} xs={12} sm={4} md={6} xl={4} className="project">
                <Zoom>
                  <Card>
                    <div className="image">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <button className="btn-projects">Ver proyecto</button>
                      </a>
                    </Card.Body>
                  </Card>
                </Zoom>
              </Col>
            )
          })}
        </Row>
      </Container>
    </BasicLayout>
  )
}

export default Projects
