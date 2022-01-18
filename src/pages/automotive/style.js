import styled from 'styled-components';
import { Header as AntHeader } from 'antd/lib/layout/layout';

export const NavbarContents = styled(AntHeader)`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Roboto:wght@300&display=swap');
   margin: 0;
   padding-left: 120px;
   padding-right: 120px;
   height: 50px;
   background-color: #F7F7F7;
   boxShadow: "0px 0px 5px 3px grey";
   font-family: 'Roboto', sans-serif;

   .subnav-links{
      display: flex;
      justify-content: left;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
      height: 50px;
      color: #B3B3B3;

   }

   .tabs{
      margin-right: 40px;
      height: 50px;
      text-decoration: none;
      color: #B3B3B3;
   }

   .active{
      color: #0086FF;
      font-weight: bolder;
   }
`

