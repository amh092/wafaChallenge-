import React from 'react'
import styled from 'styled-components'
import background from './../../Assets/images/Background.jpg'

const StyledBackground = styled.div`
position: absolute;
background-image: url(${background});
top:0;
left:0;
width:100%;
height: 2000px;
z-index: -2;
opacity: .9

`

const Overlay = styled.div`
position: absolute;
background-color: yellow;
top:0;
left:0;
width:100%;
height: 2000px;
z-index: -1;


`
const Background = () => {
 
    return (
        <div>
        <Overlay>
        
        <StyledBackground/>
        </Overlay>
        </div>
    )
}

export default Background
