import React from 'react';
import Style, { NavbarContents } from './style';
import { Header as AntHeader } from 'antd/lib/layout/layout'
import { Link } from 'react-router-dom';


export default function Header(){
    return(
        <AntHeader style = {Style.header}>
            <NavbarContents>
                <Link to = '/' className='navIcon'>
                    company-logo
                    {/* <img src = "Banner.svg" alt = 'company-logo'></img> */}
                </Link>
                <ul className='navbar-links'>
                <li> 
                    <Link to = '/we' className='navTabs'> 
                        We
                    </Link>     
                </li>
                <li>
                    <Link to = '/iot' className='navTabs'> 
                        IoT
                    </Link>
                </li>
                <li>
                    <Link to = '/automotive' className='navTabs'> 
                        Automotive
                    </Link> 
                </li>
                </ul>
            </NavbarContents>
        </AntHeader>

    )
}












