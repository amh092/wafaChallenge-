import React from 'react'
import PopularNews from './PopularNews'
import HotNews from './HotNews'
import styled from 'styled-components'


const StyledContent= styled.div`

width: 1440px;
margin: 80px auto 0 ;
display: flex;
flex-flow : row wrap;
justify-content: space-evenly;
.p1 {
flex: 1;
}
.p2 {
    flex:1;
}
hr {
    display: block;
    height: 500px;
    width: 0px;
    border-right: 1px solid gray;
    opacity: .4;
}
`
const Content = () => {
    return (
        <div>
        <StyledContent>
        <div className={'p1'}>
        <PopularNews/>
        </div>
            <hr/>
            <div className={'p2'}>
            <HotNews/>
            </div>
        </StyledContent>
        </div>
    )
}

export default Content
