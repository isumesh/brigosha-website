import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import Banner from './Banner.svg'

function OurStory() {
   return (
      <div>
         <Slides/>
      </div>
   )
}

export default OurStory;

function Slides() {
   return(
      <CarouselWrapper autoplay>
         <div>
            <h3 style={contentStyle}>
               <Container/>
            </h3>
         </div>
         <div>
            <h3 style={contentStyle}>2</h3>
         </div>
         <div>
            <h3 style={contentStyle}>3</h3>
         </div>
     </CarouselWrapper>
   )
}

const contentStyle = {
   height: '700px',
   color: '#fff',
   lineHeight: '160px',
   textAlign: 'center',
   justifyContent: 'center',
   background: 'aqua',
 };
 

function Container() {
   return(
      <>
      <img src = {Banner} alt = 'Banner'/>
      </>
   )
}

const CarouselWrapper = styled(Carousel)`

  > .slick-dots li button {
    width: 10px;
    height: 10px;
    border-radius: 100px;
  }
  > .slick-dots li.slick-active button {
    width: 15px;
    height: 15px;
    border-radius: 100px;
    background: white;
  }
`;
