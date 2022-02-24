import React from 'react'
import styled from 'styled-components'
import background from './../Assets/images/Background.jpg'

const StyledBackground = styled.div`

background-color: red;

width:1440px;
min-height: 1300px;

`
const Background = () => {
 
    return (
        <div>
            <StyledBackground/>
        </div>
    )
}

export default Background
