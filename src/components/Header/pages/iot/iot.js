
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import SubNavbar from './subNavbar';

const { Content } = Layout;
 
export default function Iot(){
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
    height: 'auto'
  }
};
