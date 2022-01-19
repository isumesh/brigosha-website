import React from 'react';
import { Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';
import styled from 'styled-components';


const Card = ({
  topLine,
  btnType,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart, 
}) => {

  return (
    <CardStyle>
      <Row
        wrap = {true}
        className = 'card'
        align='center'
      >
        <Col 
        flex = '1 1 400px'
        className={imgStart === 'start' ? 'card-text-container left' : 'card-text-container right'}
        order = {imgStart === 'start' ? 2 : 1}
        gutter = {20}
        >

            <div 
            className={topLine === '' ? 'card-top-line none' : 'card-top-line'}
            >
              {topLine}
            </div> <br/>

            <h1 
            className='card-heading' 
            >
              {headline}
            </h1>

            <p 
            className='card-content'
            >
              {description}
            </p>

            <Button type = {btnType} className='card-button'>
              {buttonLabel}
              {btnType === 'primary' ? 
              <ArrowRightOutlined />:
              ' '
              }
            </Button>

             
        </Col>

        <Col 
        flex = '0 1 480px'
        order = {imgStart === 'start' ? 1 : 2}
        className='card-img-container'
        >
          <img src={img} alt={alt} className='card-image' />
        </Col>

      </Row>
    </CardStyle>
  )
};


const CardStyle = styled.div`
  .card {
    color: #000D19;
  }

  .card-text-container{
    height: auto;
    font-size: 15px;
    padding-top: 80px;
    padding-right: 5px;
    padding-left: 5px;
    color: #565656;
    line-height: 30px;

  }

  .card-content{
  background-color:  #F7F7F7;
  }

  .card-img-container{
    width: 50%;
  }

  .card-img-container:hover{
    transform: scale(1.01);
    transition: all 0.3s ease-out;
  }

  .none{
    display: none;
  }

  .left{
    text-align: left;
  }

  .right{
    text-align: right;
  }

  .card-image{
    height: 500px;
    width: 400px; 
  }

  .card-top-line {
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .card-heading {
    margin-bottom: 24px;
    font-size: 30px;
    font-weight: 500;
  }
  
  .card-button{
    margin-top: 20px;
    width: 200px;
    height: 50px;
    font-size: 15px;
    box-shadow: 0 0 3px 2px #dedede;
    border-radius: 4px;
  }

  .card-button:hover{
    transform: scale(1.02);
    transition: all 0.3s ease-out;
  }
`

export default Card;



