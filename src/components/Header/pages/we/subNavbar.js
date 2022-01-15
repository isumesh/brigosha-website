import React from 'react';
import Style, { NavbarContents } from './style';
import { Header as AntHeader } from 'antd/lib/layout/layout';
import { Link, NavLink } from 'react-router-dom';

function subNavbar() {
   return (
      <AntHeader style = {Style.subheader}>
         <NavbarContents>
            <ul className='subnav-links'>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/we/our-story'} 
                  className='tabs'
                  activeClassName='active'
                  >
                     Our Story
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/we/teams'}  
                  className='tabs'
                  activeClassName = 'active'
                  >
                     Teams
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/we/join-us'}  
                  className='tabs'
                  activeClassName='active'
                  >
                     Join Us
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/we/contact-us'}  
                  className='tabs'
                  activeClassName='active'
                  >
                     Contact Us
                  </NavLink>
               </li>
            </ul>
         </NavbarContents>
      </AntHeader>
   )
}

export default subNavbar;
