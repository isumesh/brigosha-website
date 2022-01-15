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
                  to = {'/automotive/gotel'} 
                  className='tabs'
                  activeClassName='active'
                  >
                     Gotel
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/automotive/dhruba'}  
                  className='tabs'
                  activeClassName = 'active'
                  >
                     Dhruba
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/automotive/botg'}  
                  className='tabs'
                  activeClassName='active'
                  >
                     BOTG
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/automotive/off-highway-power-train-remote-diagnostics'}  
                  className='tabs'
                  activeClassName='active'
                  >
                     Off Highway Power Train Remote Diagnostics
                  </NavLink>
               </li>
            </ul>
         </NavbarContents>
      </AntHeader>
   )
}

export default subNavbar;
