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
                    <p className='achievement-bold-text'>THE COMPANY AT A GLANCE</p>
                    <p className='achievement-heading'>Our Achievements in Numbers </p>
                    <p className='achievement-body'>            
                        When it comes to setting benchmarks, 
                        we don’t shy away from challenges. 
                        We believe in taking them up head on. 
                        This practice is deep ingrained within 
                        our ethics. Our numbers complement this 
                        incredible journey to newer horizons.
                    </p> 
                </Col>
            </Row>
            <Row className='achievement-image'> 
                <Col span={8} className='achievement-project'>
                    <img src = {Projectsvg} alt = 'img'/><br/>
                    <p className='achievement-count'>700</p>
                    Projects Delivered
                </Col>
                <Col span={8} className='achievement-specialist'>
                    <img src = {Specialistsvg} alt = 'img'/><br/>
                    <p className='achievement-count'>200</p>
                    Specialist
                </Col>
                <Col span={8} className='achievement-technology'>
                    <img src = {Techsvg} alt = 'img'/><br/>
                    <p className='achievement-count'>200</p>
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

    .achievement-bold-text{
        text-align: center;
        color: #565656;
        font-size: 15px;
    }

    .achievement-heading{
        font-size: 40px;   
        text-align: center;
    }

    .achievement-body{
        color: #565656;
        text-align: center;
    }

    .achievement-image{
        padding-top: 50px;
    }

    .achievement-project, .achievement-specialist, .achievement-technology{
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
    }

    .achievement-project:hover, .achievement-specialist:hover, .achievement-technology:hover{
        transform: scale(1.02);
        transition: all 0.3s ease-out;
    }

    img{
        height: 200px;
        width: 200px;
    }

    .achievement-count{
        padding-top: 10px;
        font-size: 40px;
        font-weight: 600;
        margin-bottom: -10px;
    }

`

export default Achievement;
