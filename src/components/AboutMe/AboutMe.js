import React from "react"
import { Container } from "react-bootstrap"
import Zoom from "react-reveal/Zoom"
import "./AboutMe.scss"

const AboutMe = () => {
  return (
    <Container className="about-me">
      <Zoom>
        <p>
          Estudiante de Tecnologías de Informacion en la Universidad Tecnológica
          de México, 100% online. Me gusta siempre estar al día en cuanto a las
          nuevas tecnologías que surgen , por lo que tomo cursos en plataforma
          de educación en línea, como PLatzi, Udemy o DataCamp. Esto además de
          ayudarme a mantenerme actualizado, amplía mis conocimientos en el área
          del desarrollo web, en cuyo campo no sólo he creado páginas
          informativas sino también aplicaciones web utilizando herramientas
          como ReactJS, Firebase, Strapi, MongoDB, Bootstrap,entre otras.
        </p>
        <p>
          Me gusta crear pequeñas comunidades, en las cuales puedo compartir el
          conocimiento que he ido aquiriendo, pero sobre todo aprendo. Ya que
          considero que siempre hay algo nuevo por aprender y mejorar.
        </p>
        <p>
          De la misma forma en que me apasiona el desarrollo Frontend con
          ReactJS, me apasiona la astronomía y la música.
        </p>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/appCehf%2FURIEL%20MEJIA%20CV.pdf?alt=media&token=dfda47ac-2a4f-47c2-a0d7-af7b6e1c23a2"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button>Descargar CV</button>
        </a>
      </Zoom>
    </Container>
  )
}

export default AboutMe
