import React from 'react';
import styled from 'styled-components';
import Card from '../../../../Card';
import CareerImg from './career.svg'

function Career() {
    return (
        <CareerContainer>
            <Card {...Obj3}/>
        </CareerContainer>
    )
}

const CareerContainer = styled.div`
    height: auto;
    background-color: #F7F7F7;
    padding-top: 80px;
    padding-right: 120px;
    padding-left: 120px;
    text-align: center;
    padding-bottom: 100px;
`

const Obj3 = {
    topLine: 'Career',
    btnType: 'primary',
    headline: 'Explore Brigosha Careers',
    description: 'At Brigosha, we believe in creating a working environment that is conducive to enabling innovative working methodologies. So, all you need to do is put your thinking cap on and get going with all your energy. We maintain an excellent aura of workmanship at our workplace that helps you bring out your best self to work. The practice of rewarding excellence and brilliance is of paramount importance to us.',
    buttonLabel: 'LEARN MORE',
    img: CareerImg,
    alt: 'career-image',
    imgStart: 'start'
}

export default Career;
