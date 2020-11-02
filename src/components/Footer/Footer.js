import React from "react"
import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a
          href="https://twitter.com/urieel_mm"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1604174396/Proyectos/portafolio/logotipo-de-twitter-sobre-fondo-negro_exrbhd.svg"
            alt="Link Twitter"
          />
        </a>
        <a
          href="https://www.instagram.com/urieel.mm/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1604174455/Proyectos/portafolio/logotipo-de-instagram_q2ordw.svg"
            alt="Link Instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/uriel-mm-01a2061b9/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1604174646/Proyectos/portafolio/linkedin_1_bdwpcy.svg"
            alt="Link Linkedin"
          />
        </a>
        <a
          href="https://github.com/UrieelMM"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://res.cloudinary.com/dz5tntwl1/image/upload/v1604175425/Proyectos/portafolio/github-sign_mnsi9j.svg"
            alt="Link Github"
          />
        </a>
      </div>

      <div className="footer__details">
        <p>urieel.dev 2020</p>
      </div>
    </footer>
  )
}

export default Footer
