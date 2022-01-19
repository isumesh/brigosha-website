import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Timeline from './timeline.svg'

function OurJourney() {
    return (
        <OurJourneyStyle>
            <Row>
                <Col span = {8} className='our-journey-content'>
                    <span className='our-journey-heading'>OUR<br/><br/>JOURNEY</span><br/><br/><br/>
                    <span className='our-journey-text'>
                        Destinations are important but so is the journey 
                        we undertake to reach those dream destinations. 
                        Our journey defines our excitement, dreams, efforts 
                        and aspirations. The fascinating aspect is sometimes 
                        we reach our destination and sometimes we fall short. 
                        The destinations are not under our control but we 
                        always believe in celebrating the journey along with 
                        the pool of wonderful people who are an integral part 
                        of it.
                    </span>
                </Col>
                <Col span = {16} className='timeline-image-container'>
                    <img src={Timeline} alt='timeline' className='timeline-image'/>
                </Col>
            </Row>
        </OurJourneyStyle>
    )
}

export default OurJourney;

const OurJourneyStyle = styled.div`
    background-color: white;
    padding-right: 120px;
    padding-left: 120px;
    padding-top: 130px;
    padding-bottom: 100px;
    height: auto;

    .our-journey-content{
        text-align: center;
        line-height: 30px;
    }

    .our-journey-heading{
        font-size: 40px;
    }

    .our-journey-text{
        line-spacing: 5px;
        color: #565656;
    }

    .timeline-image-container{
        text-align: center;
    }

    .timeline-image{
        transform: scaleX(0.8) scaleY(0.9);
    }
`
