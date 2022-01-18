import React from 'react';
import Style, { NavbarContents } from './style';
import { Header as AntHeader } from 'antd/lib/layout/layout';
import { NavLink } from 'react-router-dom';

function subNavbar() {
   return (

         <NavbarContents>
            <ul className='subnav-links'>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/iot/passive-safety'} 
                  className='tabs'
                  activeClassName='active'
                  >
                     Passive Safety
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/iot/active-safety'}  
                  className='tabs'
                  activeClassName = 'active'
                  >
                     Active Safety
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/iot/transmission-unit'}  
                  className='tabs'
                  activeClassName='active'
                  >
                     Transmission Unit
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/iot/body-electronics'}  
                  className='tabs'
                  activeClassName='active'
                  >
                     Body Electronics
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/iot/steering-solutions'}  
                  className='tabs'
                  activeClassName='active'
                  >
                     Steering Solutions
                  </NavLink>
               </li>
               <li className = 'tab'>
                  <NavLink 
                  to = {'/iot/infotainment'}  
                  className='tabs'
                  activeClassName='active'
                  >
                     Infotainment
                  </NavLink>
               </li>
            </ul>
         </NavbarContents>

   )
}

export default subNavbar;
