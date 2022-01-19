import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd'
import Image from './teamImagePic.svg';

function TeamImage() {
    return (
        <StyleTeamImage>
           <span className='team-image-topline'>Teams</span><br/><br/>
           <span className='team-image-heading'>An Amicable Workforce</span><br/><br/>
           <img src={Image} alt='team' className='team-image'/><br/><br/>
           <span className='team-image-description'>
                Our values and culture define us as 
                an amicable workforce. We are a workforce 
                that thrive under the umbrella of integrity 
                and belongingness irrespective of diverseness 
                working towards excellence.
            </span><br/><br/><br/>

            <Button className='team-button'>
                MEET THE TEAM
            </Button>
        </StyleTeamImage>
    )
}

const StyleTeamImage = styled.div`
    padding-right: 160px;
    padding-left: 160px;
    padding-top: 130px;
    padding-bottom: 150px;
    width: 100%;
    height: auto;
    text-align: center;
    background-color: white;
    line-height: 30px;

    .team-image-topline{
        font-size: 15px;
    }

    .team-image-heading{
        font-size: 40px;
    }

    .team-image{
        width: 100%;
    }

    .team-button{
        border-color: #0086FF;
        color: #0086FF;
        font-weight: 600;
        font-size: 18px;
        width: 240px;
        height: 50px;
    }

    .team-button:hover{
        transform: scale(1.02);
        transition: all 0.3s ease-out;
    }
`

export default TeamImage;
