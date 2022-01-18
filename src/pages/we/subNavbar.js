import React from 'react';
import { NavbarContents } from './style';
import { Header as AntHeader } from 'antd/lib/layout/layout';
import { NavLink } from 'react-router-dom';

function subNavbar() {
   return (

      <NavbarContents>
         <ul className='subnav-links'>
            <li className = 'tab'>
               <NavLink 
               to = {'/we/our-story'} 
               className='tabs'
               activeclassname='active'
               >
                  Our Story
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/we/teams'}  
                  className='tabs'
                  activeclassname = 'active'
                  >
                     Teams
                  </NavLink>
               </li>
               <li className = 'tab'>
               <NavLink 
               to = {'/we/join-us'}  
               className='tabs'
               activeclassname = 'active'
               >
                  Join Us
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/we/contact-us'}  
                  className='tabs'
                  activeclassname='active'
                  >
                  Contact Us
               </NavLink>
            </li>
         </ul>
      </NavbarContents>

   )
}

export default subNavbar;
