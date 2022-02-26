import React from 'react'
import styled from 'styled-components'

const StyledTody = styled.div`
h1 {
    margin: 0 ;
    padding: 0;
    text-transform: uppercase;
    font-size: 42px;
}

width: 1440px;
margin: 100px auto;
height: 48px;

display:flex;
flex-flow: row wrap;
justify-content: space-evenly;
align-items; baseline;

& .line {
    position: relative;
    display:flex;
    flex-flow:row wrap;
    align-items: center;
    justify-content: center;
    height:48px;
    flex:.3;
}

& .line hr {
    display:block;
    width: 500px;
    position: absolute;
    border-left: 1px solid black;
    opacity: .7;

}
span {
    position: relative;

}
span::after {
    position: absolute;
   content:'';

   height:20px;
   width:150px;
   top:25px;
   left:0px;
   z-index: -1;
   opacity:.3;
    transition: 200ms;
    background:red;
  }
`
const Today = () => {
    return (
        <div>
        <StyledTody>
        <div className={'line'}> <hr/> </div>
            <h1>Today <span>News</span></h1>
            <div className={'line'}> <hr/> </div>
        </StyledTody>
            
        </div>
    )
}

export default Today
