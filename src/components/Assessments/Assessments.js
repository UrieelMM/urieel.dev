import React from "react"
import assessments from "../../utils/assessments"
import { Container, Row, Col, Card } from "react-bootstrap"
import "./Assessments.scss"
import Zoom from "react-reveal/Zoom"
const Assessments = () => {
  return (
    <Container className="assessments">
      <h2>Certificaciones</h2>
      <Row>
        {assessments.map((assessment, index) => {
          return (
            <Col
              key={index}
              xs={12}
              sm={4}
              md={6}
              xl={4}
              className="assessment"
            >
              <Zoom>
                <Card>
                  <div className="assessment__image">
                    <img src={assessment.image} alt={assessment.title} />
                  </div>
                  <Card.Body>
                    <Card.Title className="assessment__title">
                      {assessment.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Zoom>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Assessments
