import React from 'react'
import styled from 'styled-components'
import cheetta from '../../Assets/images/AdobeStock_7727248.jpeg'
import author from '../../Assets/images/author.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import whatsapp from '../../Assets/images/whatsapp-svgrepo-com.svg'
const StyledPopularNews = styled.div`


& h1 {
   margin:0;
   padding:0;
}

header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    width:680px;
}

& .p-news-one {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-between;
}
& .line {
    display: block;
    height: 0px;
    width: 400px;
    border-top: 1px solid black;
    opacity: .6;
}

& .image-container {
    position: relative;
    border: 1px solid black;
    height: 280px;
    width: 470px;
    margin: 30px 0 0 30px;;



}
& .image-container img {
    position: absolute;
        height: 100%;
        width: 100%;
        filter: grayScale();
        top:-5px;
        left:-5px;

}
    & .p-news-one .image-section img {
        position: absolute;
        height: 100%;
        width: 100%;
        filter: grayScale();
        top:-5px;
        left:-5px;
    
    }
    &  .nav-arrows {
        display:flex;
        flex-flow: column wrap;
        align-self: center;
        align-content: space-around;
        
      }
      & .nav-arrows .h1-container {
         
          position: relative;
          display: inline;
          height: 30px;
          width: 30px;
          font-size: 20px;
          border: 1px solid black;
          text-align: center;
          margin: 0 10px 0 0;
          text-weight: 100;
          font-family: 'Courier New', Courier;
          padding: 3px;
        
      }
      & .nav-arrows .h1-container  h1  {
         
          position: absolute;
          display: inline;
          height: 30px;
          width: 30px;
          font-size: 20px;
          text-align: center;
          margin: 0 10px 0 0;
          text-weight: 100;
          font-family: 'Courier New', Courier;
          padding: 3px;
          top:-3px;
          left:-4px;
          z-index: 2;
          transform: rotate(90deg);
         
        
      }
      &  .nav-arrows .h1-container:hover {
         
        
         background: hotpink;
         cursor: pointer;
         opacity: .4;
        
      }
      & .news-1 {
          display:flex;
          flex-flow: row wrap;
          justify-content: center;
          margin: 10px  0 10px 20px;;
      }
  
      & .news-1 .news-title h1 {
          font-size: 27px;
          font-weight: normal;
         position: relative;
         margin: 10px;
      
      }
  
      & .news-1 .news-title h1 span {
          position: relative;
         
      }
      & .news-1 .news-title h1 span::before {
          content:'';
          height: 15px;
          width: 180px;
          position: absolute;
          background: gold;
          z-index;-1;
          top:15px;
          left:0;
          opacity: .4
      }
       
      .news-1 span:not(p){
        opacity: .6;
        text-transform: uppercase;
            }  
     
      
      & .author {
        display:flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        margin: 10px  0 10px 20px;;
    }
    & .author-text {
        display:flex;
        flex-flow: column wrap;
        justify-content: space-around;
        align-items: space-around;
        
        flex: 1;
    }
    & .author-text h1:last-of-type  {
      opacity: .6;
    }
    
    & .author img:first-of-type {
        height: 50px;
        width:50px;
        margin: 0 15px 0 0 ;
    }
    
    & .author h1 {
        font-size: 17px;
    }   
    & .images-2 {
        display:flex;
        flex-flow: row wrap;
        margin-left: 200px;
        align-items: center;
        filter: grayScale();
        width: 80px;
        justify-content: space-around;
    }

    & .images-2 hr {
        display: block;
        height: 20px;
    }
    & .author .images-2 img:nth-of-type(1),
    & .author .images-2 img:nth-of-type(2)
    
     {
            height: 20px;
            width: 20px;
            cursor: pointer;
            margin: 0;
          
    }

`


const HotNews = () => {
    return (
    <div>
        <StyledPopularNews>
          <header>
            <h1>Hot News</h1>
            <div className={'line'}></div>
          </header>

          <section className={'p-news-one'}>
                <div className={'image-section'}>
                    <section className={'image-container'}>
                        <img src={cheetta}/>
                    </section>
                </div>
                <div className={'nav-arrows'}>
                    <div className={'h1-container'}>
                        <h1> {'<'} </h1>
                    </div>
                    <h1> 01</h1>
                    <div className={'h1-container'}>
                        <h1> {'>'} </h1>
                    </div>
                </div>
                <div className={'news-1'}>
                    <div className={'news-title'}> 
                        <h1>AMAZON IN <span> BLACKOUT </span></h1>

                        <p> The Forests Of The Amazon Are Being Destroyed Every <br/>
                        Day And There Is No Support Institution And Many Things <br/>
                        Will Happen Soon....<span> more</span></p>

                       
                    </div>
                    {/* completed line  */}
                </div>
                <div className={'author'}>
                    <img src={author}/>
                    <div className={'author-text'}>
                        <h1>Edvardo Kiuewc</h1>
                        <h1> news author</h1>
                        </div>
                        <div className={'images-2'}>
                        
                        <img src={whatsapp}/>
                        <hr/>
                        <img src={"https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-map-maps-and-locations-those-icons-lineal-color-those-icons-1.png"}/>
                        </div>
                </div>
           </section>
        </StyledPopularNews>
    </div>
    )
}

export default HotNews
