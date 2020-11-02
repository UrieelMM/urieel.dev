import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import SocialMedia from "./SocialMedia/SocialMedia"
import profileImage from "../../images/avatar.jpg"
import Zoom from "react-reveal/Zoom"
import "./Profile.scss"

const Profile = () => {
  return (
    <div className="profile">
      <div className="wallpaper">
        <div className="bg-dark-profile"></div>
      </div>
      <Container className="box">
        <Zoom>
          <Row className="info">
            <Col xs={12} md={4}>
              <Image src={profileImage} fluid />
            </Col>
            <Col xs={12} md={8} className="info__data">
              <span>¡HOLA!</span>
              <p>Uriel Mejía</p>
              <p className="info__job">Frontend Developer ReactJS</p>
              <div className="more-info">
                <div className="item">
                  <p>Edad</p>
                  <p>25 años</p>
                </div>
                <div className="item">
                  <p>Teléfono</p>
                  <p>+52 5615669304</p>
                </div>
                <div className="item">
                  <p>Email</p>
                  <p>urieel.mm@gmail.com</p>
                </div>
                <div className="item">
                  <p>Ubicación</p>
                  <p>México</p>
                </div>
              </div>
            </Col>
          </Row>
        </Zoom>
        <Zoom>
          <SocialMedia />
        </Zoom>
      </Container>
    </div>
  )
}

export default Profile
