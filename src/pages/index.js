import React from "react"
import BasicLayout from "../layouts/BasicLayout"
import Profile from "../components/Profile/Profile"
import AboutMe from "../components/AboutMe/AboutMe"
import "./index.scss"

const IndexPage = () => (
  <div className="container-app">
    <BasicLayout>
      <Profile />
      <AboutMe />
    </BasicLayout>
  </div>
)

export default IndexPage
