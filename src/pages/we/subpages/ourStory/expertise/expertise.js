import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Automotive from './automotive.svg'
import Iot from './iot.svg';

function Expertise() {
    return (
        <Container>
            <span className='header'>Our Expertise</span>
            <p className='top'>
                You can expect high quality services 
                from us working with AI and intelligent 
                machines that unlock human potential.
            </p>
            <br/>
            <Card {...Obj1}/><br/>
            <Card {...Obj2}/>
        </Container>
    )
}

const Container = styled.div`
    height: auto;
    background-color: #F7F7F7;
    padding-top: 80px;
    padding-right: 120px;
    padding-left: 120px;
    text-align: center;
    padding-bottom: 30px;

    .header{
        font-size: 40px;
    }

    .top{
        padding-top: 20px;
        font-size: 15px;
        color: #565656;
    }
`

export default Expertise;


const Obj1 = {
    topLine: '',
    btnType: 'primary',
    headline: 'Automotive',
    description: 'The next gen automotive technology is all about autonomous and electric mobility solutions. We are witnessing seamless connectivity, electrification, and additive manufacturing. At Brigosha, we strive hard to stay in sync with these advancements.',
    buttonLabel: 'LEARN MORE',
    img: Automotive,
    alt: 'automotive-image',
    imgStart: ''
}

const Obj2 = {
    topLine: '',
    btnType: 'outline',
    headline: 'IoT',
    description: 'Gone are the days when driverless cars, virtual reality surgery, and evolving intelligent machines were science fiction. Ground-breaking innovations are gaining limelight to better our futures. Brigosha is all about addressing the modern-day challenges with ingenious solutions.',
    buttonLabel: 'LEARN MORE',
    img: Iot,
    alt: 'iot-image',
    imgStart: 'start'
}
