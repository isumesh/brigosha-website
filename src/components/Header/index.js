import React from 'react';
import { NavbarContents } from './style';
import { Link, NavLink } from 'react-router-dom';
import CompanyLogo from './logo.svg';


export default function Header(){
    return(
        <NavbarContents>
            <Link to = '/we/our-story' className='navIcon'>
                <img 
                src = {CompanyLogo} 
                alt = 'Brigosha-Logo'
                className='companyIcon'
                />
            </Link>
            <ul className='navbar-links'>
                <li> 
                    <NavLink 
                    to = '/we' 
                    className = 'navTabs'
                    activeclassname = 'active'
                    > 
                            We
                    </NavLink>     
                </li>
                <li>
                    <NavLink 
                    to = '/iot' 
                    className='navTabs'
                    activeclassname = 'active'
                    > 
                        IoT
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/automotive' 
                    className='navTabs'
                    activeclassname = 'active'
                    > 
                        Automotive
                    </NavLink> 
                </li>
            </ul>
        </NavbarContents>


    )
}












