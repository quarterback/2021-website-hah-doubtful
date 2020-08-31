import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <a href="mailto:ron@ronbronson.com">Email me</a>
    <ThemeChanger/>
  </nav>
  
)