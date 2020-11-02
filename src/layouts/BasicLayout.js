import React from "react"
import Menu from "../components/Menu/Menu"
import Footer from "../components/Footer/Footer"
import "./BasicLayout.scss"

const BasicLayout = props => {
  const { children, menuColor } = props

  return (
    <div className="container-app">
      <Menu menuColor={menuColor} />
      {children}
      <Footer />
    </div>
  )
}

export default BasicLayout
