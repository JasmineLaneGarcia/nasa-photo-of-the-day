import React from "react"
import styled from "styled-components"
import ReactPlayer from 'react-player'

const BlueH1 = styled.h1 `
  font-family: sans-serif;
  color: #7F7FFF;
`;

const Header = (props) => {


  const { img } = props

    return (
        <header>
          <BlueH1>NASA POD</BlueH1> 
          {(img.media_type === 'video' ? 
            <ReactPlayer
              className='react-player fixed-bottom'
              url= {img.url}
              width='100%'
              height='100%'
              controls = {true}/> 
            : 
            <img src = {img.url} />)}
        </header>
    )
}

export default Header
