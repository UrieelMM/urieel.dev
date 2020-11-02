import React from "react"
import loadable from "@loadable/component"
import "./ListSkills.scss"

const SkillBar = loadable(() => import("react-skills-bars"))

const ListSkills = props => {
  const { skills, colors } = props

  return (
    <div className="list-skilss">
      <SkillBar
        skills={skills}
        colors={colors}
        animationDelay={0}
        animationDuration={2000}
      />
    </div>
  )
}

export default ListSkills
