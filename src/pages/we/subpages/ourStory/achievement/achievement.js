import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Techsvg from './Technologies.svg';
import Projectsvg from './Projects.svg';
import Specialistsvg from './Specialist.svg';

function Achievement() {
    return (
        <AchievementWrapper>
            <Row>
                <Col span = {24}>
                    <p className='bold-text'>THE COMPANY AT A GLANCE</p>
                    <p className='heading'>Our Achievements in Numbers </p>
                    <p className='body'>            
                        When it comes to setting benchmarks, 
                        we don’t shy away from challenges. 
                        We believe in taking them up head on. 
                        This practice is deep ingrained within 
                        our ethics. Our numbers complement this 
                        incredible journey to newer horizons.
                    </p> 
                </Col>
            </Row>
            <Row className='image'> 
                <Col 
                span={8} 
                className='project'
                >
                    <img src = {Projectsvg} alt = 'img'/><br/>
                    <p className='count'>700</p>
                    Projects Delivered
                </Col>
                <Col span={8} className='specialist'>
                    <img src = {Specialistsvg} alt = 'img'/><br/>
                    <p className='count'>200</p>
                    Specialist
                </Col>
                <Col span={8} className='technology'>
                    <img src = {Techsvg} alt = 'img'/><br/>
                    <p className='count'>200</p>
                    Technologies Used
                </Col>
            </Row>
        </AchievementWrapper>
    )
}

const AchievementWrapper = styled.div`
    padding-top: 150px;
    height: auto;
    padding-bottom: 150px;
    padding-left: 160px;
    padding-right: 160px;
    background-color: white;

    .bold-text{
        text-align: center;
        color: #565656;
        font-size: 15px;
    }

    .heading{
        font-size: 40px;   
        text-align: center;
    }

    .body{
        color: #565656;
        text-align: center;
    }

    .image{
        padding-top: 50px;
    }

    .project, .specialist, .technology{
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
    }

    .project:hover, .specialist:hover, .technology:hover{
        transform: scale(1.02);
        transition: all 0.3s ease-out;
    }

    img{
        height: 200px;
        width: 200px;
    }

    .count{
        padding-top: 10px;
        font-size: 40px;
        font-weight: 600;
        margin-bottom: -10px;
    }

`

export default Achievement;
