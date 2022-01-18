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
  imgStart
}) => {

  return (
    <Style>
      <Row
        wrap = {true}
        className = 'card'
        align='center'
      >
        <Col 
        flex = '1 1 400px'
        className={imgStart === 'start' ? 'text-container left' : 'text-container right'}
        order = {imgStart === 'start' ? 2 : 1}
        >

            <div 
            className={topLine === '' ? 'top-line none' : 'top-line'}
            >
              {topLine}
            </div> 

            <h1 
            className='heading' 
            >
              {headline}
            </h1>

            <p 
            className='content'
            >
              {description}
            </p>

            <Button type = {btnType} className='button'>
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
        className='img-container'
        >
          <img src={img} alt={alt} className='image' />
        </Col>

      </Row>
    </Style>
  )
};


const Style = styled.div`
  .card {
    color: #000D19;
  }

  .text-container{
    height: 300px;
    font-size: 15px;
    padding-top: 80px;
    padding-right: 5px;
    padding-left: 5px;
    color: #565656;
  }

  .content{
  background-color:  #F7F7F7;
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

  .image{
    height: 500px;
    width: 450px; 
  }

  .top-line {
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .heading {
    margin-bottom: 24px;
    font-size: 30px;
    font-weight: 500;
  }
  
  .button{
    width: 200px;
    height: 50px;
    font-size: 15px;
  }
`

export default Card;



