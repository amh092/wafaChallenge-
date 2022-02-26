import React from 'react'
import pNewsImageOne from './../../Assets/images/AdobeStock_331627357.jpeg'
import author from '../../Assets/images/author.jpg'
import earth from '../../Assets/images/AdobeStock_289079499.jpeg'
import styled from 'styled-components'

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
& header h1 {
    text-transform: uppercase;
}

&  header div {
    display: block;
    height: 0px;
    width: 360px;
    border-top: 1px solid gray;
    opacity: .6;
}

& .p-news-one {
    display:flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-top: 50px;
    height : 200px;
    width : 660px;


}
& .image-container {
    position: relative;
    border: 1px solid black;
    height: 200px;
    width: 350px;
    margin-right: 40px;


}
& .image-container-2{
    position: relative;
    border: 1px solid black;
    height: 200px;
    width: 350px;
    margin-left: 70px;


}
    & .p-news-one .image-section img {
        position: absolute;
        height: 100%;
        width: 100%;
        filter: grayScale();
        top:-5px;
        left:-5px;
    
    }


& .news-1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: column wrap;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap;
    justify-self: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    justify-content: center;
}

}

& .news-1 .news-title h1 {
    font-size: 27px;
    font-weight: normal;
   position: relative;

}
& .news-1 .news-title-2 h1 {
    font-size: 23px;
    font-weight: normal;
   position: relative;

}
& .news-1  .news-title-2 h1::after {
    content: '';
    position: absolute;
    top:0;
    left:-15px;
    background: red;
    opacity: .3;
    height: 28px;
    width: 5px;
    white-space: pre-line;
}
& .news-1  .news-title-2 h1::after {
    content: '';
    position: absolute;
    top:0;
    left:-15px;
    background: red;
    opacity: .3;
    height: 28px;
    width: 5px;
    white-space: pre-line;
}
& .news-1  .news-title h1::after {
    content: '';
    position: absolute;
    top:0;
    left:-15px;
    background: red;
    opacity: .3;
    height: 28px;
    width: 5px;
    white-space: pre-line;
}
& .news-1 .news-title h1 span {
    position: relative;
   
}
& .news-1 .news-title-2 h1 span {
    position: relative;
   
}
& .news-1 .news-title h1 span::before {
    content:'';
    height: 15px;
    width: 160px;
    position: absolute;
    background: gold;
    z-index;-1;
    top:15px;
    left:0;
    opacity: .4
}
& .news-1 .news-title-2 h1 span::before {
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

& .line {
    flex: 1;
    margin-top: 10px;
    opacity: .3;
    border-top: 1px solid black;
}
& .author {
    display:flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin: 10px 0 0 0 ;
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

& .author img {
    height: 50px;
    width:50px;
    margin: 0 15px 0 0 ;
}

& .author h1 {
    font-size: 17px;
   margin: 
}
& .navigation {
    margin: 20px 0 0 0;
    display:flex;
    flex-flow: row wrap;
    width:667px;
}
& .navigation h1 {
  
}
& .navigation .nav-arrows {
  display:flex;
  
}
& .navigation .nav-arrows .h1-container {
   
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
& .navigation .nav-arrows .h1-container  h1  {
   
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
  
}
& .navigation .nav-arrows .h1-container:hover {
   
  
   background: hotpink;
   cursor: pointer;
   opacity: .4;
  
}

& .see-more {
    display:flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    font-size: 10px;
    font-weight: 100;

  }
& .see-more h1:first-of-type {
    margin-right: 20px;

  }




`
const PopularNews = () => {
    return (
        <div>
            <StyledPopularNews>
                <header>
                    <h1>Popular News</h1>
                    <div ></div>
                </header>
                <section className={'p-news-one'}>

                <div className={'image-section'}>
                    <div className={'image-container'}>
                        <img src={pNewsImageOne}/>
                    </div>
                    </div>
                    {/**completed image **/}

                    <div className={'news-1'}>
                        <div className={'news-title'}> 
                            <h1>ESKIMOS BEGAN TO 
                            <span> BUILD HUT  </span> 
                            </h1>
                            <div className={'line'}></div>
                        </div>
                        {/* completed line  */}
                        <div className={'author'}>
                            <img src={author}/>
                            <div className={'author-text'}>
                            <h1>JESIkai LOIJpoutr</h1>
                            <h1> news author</h1>
                            
                            </div>
                        </div>
                    </div>
                  
                </section>
                <section className={'p-news-one'}>

                
                    {/**completed image **/}

                    <div className={'news-1'}>
                        <div className={'news-title-2'}> 
                            <h1>THE <span>OZONE LAYER </span> 
                             WAS REPAIRED
                            
                            </h1>
                            <div className={'line'}></div>
                        </div>
                        {/* completed line  */}
                        <div className={'author'}>
                            <img src={author}/>
                            <div className={'author-text'}>
                            <h1>Edvardo Kiuewc</h1>
                            <h1> news author</h1>
                            
                            </div>
                        </div>
                    </div>
                    <div className={'image-section'}>
                    <div className={'image-container-2'}>
                        <img src={earth}/>
                    </div>
                    </div>
                    </section>
                    <section className={'navigation'}>
                        <div className={'nav-arrows'}>
                            <div className={'h1-container'}>
                                <h1> {'<'} </h1>
                            </div>

                            <div className={'h1-container'}>
                                <h1> {'>'} </h1>
                            </div>
                         
                        </div>
                        <div className={'see-more'}>
                            <h1>...................................................... </h1>
                            <h1>see all</h1>
                        </div>
                    </section>
               
            </StyledPopularNews>
        </div>
    )
}

export default PopularNews
