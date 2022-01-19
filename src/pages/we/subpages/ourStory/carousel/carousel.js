import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import Banner from './Banner.svg'

function Carosel() {
    return (
        <CarouselWrapper
        autoplay={true}
        autoplaySpeed={4000}
        pauseOnHover={false}
        >
            <div>
            <h3 style = {Style.contentStyle}>

                <Container/>
            </h3>
            </div>
            <div>
            <h3 style = {Style.contentStyle}>
                <Container/>
            </h3>
            </div>
            <div>
            <h3 style = {Style.contentStyle}>
                <Container/>
            </h3>
            </div>
    </CarouselWrapper>
    )
}

const Style = {
    contentStyle:{
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center',
    }
}

function Container() {
    return(
        <Content>
            <img src = {Banner} alt = 'Banner' className='Banner'/>
            <p className='Banner-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
       </Content>
    )
 }

const Content = styled.div`
    font-size: 28px;
    font-weight: 400;

    .Banner-text{
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        width: 100%;
    }

    .Banner{
        width: 100%;

    }

`


const CarouselWrapper = styled(Carousel)`
    padding-left: 120px;
    padding-right: 120px;
    background-color: #E6F3FF;
    height: 90vh;

    .card{
        color: 'black',
        text-align: 'center',
        justify-content: 'center',
    }

    > .slick-dots li button {
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background: #D0D0D0;
    }

    > .slick-dots li.slick-active button {
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background: #0086FF;
    }

 `;




export default Carosel;



