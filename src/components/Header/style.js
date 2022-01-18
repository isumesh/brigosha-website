import styled from 'styled-components';
import { Header as AntHeader } from 'antd/lib/layout/layout';

export const NavbarContents = styled(AntHeader)`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Roboto:wght@300&display=swap');
    margin: 0;
    background-color: #fff;
    padding-left: 120px;
    padding-right: 120px;
    font-family: 'Roboto', sans-serif;
    position: sticky;
    top: 0;
    z-index: 100;


    .navTabs{
        float: right;
        color: #B3B3B3;
        font-size: 1.2rem;
        text-decoration: none;
        text-align: center;
        width: 100px;
        margin-right: 10px;
    }

    .navbar-links{
        display: flex;
        flex-direction: row;
        justify-content: end;
        height: 80px;
        float: right;
        margin: 0;
        width: 60%;
        list-style: none;
    }

    .active{
        color: #0086FF;
        font-weight: bold;
        height: 64px;
        border-bottom: 2px solid blue;
        transform: scale(1.02);
    }

    .navIcon{
        height: 32px;
        width: 123px;
        float: left;
        width: auto;
    }

`