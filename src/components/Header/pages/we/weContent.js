
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import { Layout } from 'antd';
import SubNavbar from './subNavbar';

const { Content } = Layout;
 
export default function WeContent(){
    return(
        <Layout style = {subStyle.layout}>
          <SubNavbar/>
          <Layout className='subContent'>
            <Content>
              <Outlet/>
            </Content>
          </Layout>
        </Layout>
    )
}

const subStyle = {
  layout: {
    height: '100vh',
  }
};
