import React from "react"
import BasicLayout from "../layouts/BasicLayout"
import ListSkills from "../components/ListSkills/ListSkills"
import Assessments from "../components/Assessments/Assessments"
import { Container } from "react-bootstrap"
import {
  frontendSkills,
  backendSkills,
  uiSkills,
  frontendSkillsColors,
  backendSkillsColors,
  uiSkillsColors,
} from "../utils/skills"
import "./skills.scss"

const Skills = () => {
  return (
    <BasicLayout menuColor="rgb(76, 0, 255)">
      <Container classNam="skills">
        <div className="skills__block">
          <h2>Frontend</h2>
          <ListSkills skills={frontendSkills} colors={frontendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Backend</h2>
          <ListSkills skills={backendSkills} colors={backendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>UI</h2>
          <ListSkills skills={uiSkills} colors={uiSkillsColors} />
        </div>
        <Assessments />
      </Container>
    </BasicLayout>
  )
}

export default Skills
