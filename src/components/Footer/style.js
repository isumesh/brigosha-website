import styled from 'styled-components';
import { Footer as AntFooter } from 'antd/lib/layout/layout';


export const FooterContents = styled(AntFooter)`
    padding-left: 120px;
    padding-right: 120px;
    padding-top: 80px;

    background-color: #E6E6E6;
    bottom: 0;
    height: 520px;
    
    .company-logo{
        height: 32px;
        width: 120px;
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
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
    }
    
`
