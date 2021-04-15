import React from "react"

const Header = (props) => {

  const { img } = props

    return (
        <header>
          <h1>NASA POD</h1> 
          <img src = {img.url} /> 
        </header>
    )
}

export default Header
