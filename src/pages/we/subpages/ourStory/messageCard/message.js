import React from 'react';
import styled from 'styled-components';
import Img from './ceoImg.svg';

function Message() {
    return (
        <MessageWrapper>
            <span className='message-topline'>
                MESSAGE FROM THE CEO
            </span><br/><br/>
            <span className='message-quote'>
                “Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam elit, 
                sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim.“
            </span><br/><br/>
            <img src={Img} alt='Ceo'/>
        </MessageWrapper>
    )
}

export default Message;

const MessageWrapper = styled.div`
    margin: 50px 120px;
    padding-left: 50px;
    border-left: 5px solid #0086FF;

    .message-topline{
        letter-spacing: 2px;
        font-size: 12px;
    }

    .message-quote{
        font-size: 20px;
    }
`