import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const StyledNavBar = styled.div`

h1 {
    margin: 0 ;
    padding: 0;
}
width: 1440px;
margin: 20px auto;
height: 48px;

display:flex;
flex-flow: row wrap;
justify-content: space-evenly;
align-items; center;

& .search {
  display:flex;
  padding:0;
  margin:0;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  height:48px;
}
& textarea {
  resize: none;
  padding:0;
  margin:0;
  background: transparent;
  outline: none;
  height: 18px;
  border: none;
}

& textarea:[placeholder] {
  text-align: center;
  vertical-align: center;
}


    ul {
      position: relative;
        display:flex;
        flex-flow: row wrap;
        justify-content:space-around;
        align-items: center;
        height: 48px;
        flex: 4;
        align-content:center;
        text-transform: uppercase;
       
    }
    li{
      position: relative;
      opacity: .5;
      transition: 200ms ease-in;
      transform-origin: center;
      cursor: pointer;
      transition: 600ms;

    }
    li::after {
      position: absolute;
     content:'';
     transform-origin: top;
     height:20px;
     width:0px;
     top:0;
     left:20px;
     z-index: -1;
     opacity:.5;
      transition: 200ms;
    }
   

    & li:hover {
      opacity:1;
      pointer: cursor;
     
    }
    & li:hover + .hover-1 {
      opacity:1;
      display: flex;
      left:50px;
    }
    & li:hover + .hover-2 {
      opacity:1;
      display: flex;
      left:270px;
    }
    & li:hover + .hover-3 {
      opacity:1;
      display: flex;
      left:470px;
    }
    & li:hover + .hover-4 {
      opacity:1;
      display: flex;
      left:600px;
    }
    & li:hover + .hover-5 {
      opacity:1;
      display: flex;
      left:740px;
    }
    & li:hover + .hover-6 {
      opacity:1;
      display: flex;
      left:900px;
    }
    & li:hover + .hover-7 {
      opacity:1;
      display: flex;
      left:1080px;
     
    }
   & .hover-container {
     position:absolute;;
     top:40px;
     left:-110px;
     display:none;
     justify-content: space-around;
     height: 14px;
     width: 20px;
    
   }

   & .hover-container div {
      background: red;
      height: 8px;
      width: 5px;
      transform: skew(-34deg);
      opacity: .3;
     
      
   }
   .hover-1 + .hide{
     display:flex;
    
   }
 

 
`;
const Navbar = () => {

  return (
  

  <div>
      <StyledNavBar>
        <div className={"search"}>
        <FontAwesomeIcon icon={faMagnifyingGlass }></FontAwesomeIcon>
        <textarea aria-setsize={"false"} placeholder={'SEARCH....'}/>
        </div>
        <ul>
            <li>ACADEMIC</li>
              <div className={'hover-container hover-1 hide'}>
                <div/>
                <div/>
                <div/>
              </div>
            <li>HUMAN R ENVIRONMENT</li>
            <div className={'hover-container hover-2 hide'}>
            <div/>
            <div/>
            <div/>
          </div>
            <li>SPORTS</li>
            <div className={'hover-container hover-3 hide'}>
            <div/>
            <div/>
            <div/>
          </div>
            <li>POLITICAL</li>
            <div className={'hover-container hover-4 hide'}>
            <div/>
            <div/>
            <div/>
          </div>
            <li>MUSIC</li>
            <div className={'hover-container hover-5 hide'}>
            <div/>
            <div/>
            <div/>
          </div>
            <li>FINANCIAL MARKET</li>
            <div className={'hover-container hover-6 hide'}>
            <div/>
            <div/>
            <div/>
          </div>
            <li>OTHER</li>
            <div className={'hover-container hover-7 hide'}>
            <div/>
            <div/>
            <div/>
          </div>
        </ul>
      </StyledNavBar>
    </div>
  );
};

export default Navbar;
