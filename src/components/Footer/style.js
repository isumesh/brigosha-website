import styled from 'styled-components';
import { Footer as AntFooter } from 'antd/lib/layout/layout';


export const FooterContents = styled(AntFooter)`
    padding-left: 120px;
    padding-right: 120px;
    padding-top: 80px;
    background-color: #E6E6E6;
    bottom: 0;
    height: auto;
    
    .company-logo{
        height: auto;
        width: auto;
    }

    .address{
        color: #565656;
        margin-top: 25px;
        width: 150px;
        height: 95px;
    }

    .links{
        color: #565656;
    }

    li{
        margin-top: 20px;
    }

    li:hover{
        transform: scale(1.02);
    }

    .automotiveLinks{
        width: 200px;
    }

    .list{
        margin-top: 25px;
        list-style: none;
        padding-left: 0;
        height: 150px;
    }
    
    .social-media{
        font-size: 30px;
        margin-top: -10px;
        padding: 0;
        display: flex;
        list-style: none;
    }

    .media-tag{
        margin-right: 10px;
    }

    .sign-in{
        width: 200px;
        height: 50px;
        border-radius: 4px;
        font-size: 20px;
        box-shadow: 0 0 3px 2px #c9c9c9;
    }

    .footer-links{
        height: 350px;
    }

    .footer-footer{
        color: #565656;
        border-top: 1px solid grey;
        padding-top: 15px;
    }

    .ant-dropdown-link{
        color: #565656;
    }

    .footertext{
        text-align: right;
    }
    
`
