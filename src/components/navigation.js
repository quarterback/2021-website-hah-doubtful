import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="mailto:ron@ronbronson.com">Email me</Link>
    <ThemeChanger/>
  </nav>
  
)