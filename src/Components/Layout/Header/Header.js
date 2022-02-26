import React from "react";
import styled from "styled-components";


const StyledHeader = styled.div`

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
  align-items; baseline;

  & .logo{
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center; 
      height: 48px;
      flex:1;

      text-transform: capitalize;
      font-weight: 100;

  }
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
      height: 40px;
      position: absolute;
      border-left: 1px solid black;
      opacity: .3;

  }
  & .burger-container {
      display:flex;
      flex-flow:row wrap;
      align-items: center;
      justify-content: flex-start;
      height:48px;
      flex:1;
  }
  & .burger {
      display:flex;
      flex-flow: column wrap;
      align-content: space-around;
      justify-content: space-around;
      justify-items:flex-end;

      height:30px;
      width:40px;
  }

    & .burger div {
          width: 40%;
          border-top: 2px solid black;
      }
      & .burger div:nth-of-type(2) {
          width: 50%;
      }

      ul {
          display:flex;
          flex-flow: row wrap;
          justify-content:space-around;
          align-items: flex-end;
          height: 48px;
          flex: 3;
          align-content:center;
          text-transform: uppercase;
        
      }
      li{
        position: relative;
        opacity: .5;
        transition: 200ms ease-in;
        cursor: pointer;

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
      li:hover::after {
        position: absolute;
      content:'';
      background:red;
      height:20px;
      width:35px;
      top:0;
      left:20px;
      z-index: -1;
      opacity:.5;
      transform-origin: 34%;
      }

      li:hover {

        opacity:1;
      }
      & .contact-us {
          display:flex;
          flex-flow: row wrap;
          justify-content: flex-end;
          flex:4;
          justify-self: flex-end;
          align-items: center;
          height:48px;
          
      }

      & .contact-us h1 {
          width: 166px;
          box-shadow : 4px 6px 1px 1px black;
          border: 1px solid black;
          font-size: 1.5em;
          text-align: center;
          height:48px;
        font-family: 'sans-serif';
        text-transform: uppercase;
          
      }

`;
const Header = () => {
  return (
    <div>
      <StyledHeader>
        <div className={"logo"}>
          <h1>Lo.news</h1>
        </div>
        <div className={'line'}> <hr/> </div>
        <div className={"burger-container"}>
          <div className={"burger"}>
            <div />
            <div />
            <div />
          </div>
        </div>
        <ul>
            <li>Home</li>
            <li>Reviews</li>
            <li>Daily News</li>
            <li>Features</li>
        </ul>
        <div className={'contact-us'}>
            <h1> contact us </h1>
        </div>
      </StyledHeader>
    </div>
  );
};

export default Header;
