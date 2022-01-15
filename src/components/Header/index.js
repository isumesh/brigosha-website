import React from 'react';
import Style, { NavbarContents } from './style';
import { Header as AntHeader } from 'antd/lib/layout/layout'
import { Link, NavLink } from 'react-router-dom';
import CompanyLogo from './logo.png';


export default function Header(){
    return(
        <AntHeader style = {Style.header}>
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
                    to = '/we/our-story' 
                    className = 'navTabs'
                    activeClassName = 'active'
                    > 
                        We
                    </NavLink>     
                </li>
                <li>
                    <NavLink 
                    to = '/iot' 
                    className='navTabs'
                    activeClassName = 'active'
                    > 
                        IoT
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/automotive' 
                    className='navTabs'
                    activeClassName = 'active'
                    > 
                        Automotive
                    </NavLink> 
                </li>
                </ul>
            </NavbarContents>
        </AntHeader>

    )
}












