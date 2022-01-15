import React from 'react';
import Style, { NavbarContents } from './style';
import { Header as AntHeader } from 'antd/lib/layout/layout';
import { Link } from 'react-router-dom';

function subNavbar() {
   return (
      <AntHeader style = {Style.subheader}>
         <NavbarContents>
            <ul className='subnav-links'>
               <li className = 'tab'>
                  <Link to = {'our-story'} className='tabs'>
                     Our Story
                  </Link>
               </li>
               <li className = 'tab'>
                  <Link to = {'teams'}  className='tabs'>
                     Teams
                  </Link>
               </li>
               <li className = 'tab'>
                  <Link to = {'join-us'}  className='tabs'>
                     Join Us
                  </Link>
               </li>
               <li className = 'tab'>
                  <Link to = {'contact-us'}  className='tabs'>
                     Contact Us
                  </Link>
               </li>
            </ul>
         </NavbarContents>
      </AntHeader>
   )
}

export default subNavbar;
