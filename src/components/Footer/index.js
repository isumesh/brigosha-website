import { Col, Divider, Row } from 'antd';
import { Footer as AntFooter } from 'antd/lib/layout/layout'
import 'antd/dist/antd.css';
import Style, { FooterContents } from './style';
import { Link } from 'react-router-dom';
import CompanyLogo from './logo.png';

const Footer = () => {
    return (
        <AntFooter style={Style.footer}>
            <FooterContents>
                <Row className='footer-links'>
                    <Col span = {6}  className='company-info'>
                        <Link to = '/we/our-story'>
                            <img 
                            src = {CompanyLogo} 
                            alt = 'Brigosha-Logo'
                            className='company-logo'
                            />
                        </Link>
                        <p className='address'>
                            VCR Cornerstone, #780, 3rd Floor, 19th Main, 560102, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
                        </p>
                    </Col>
                    <Col span = {4} className='weLinks'>
                        <h3>We</h3>
                        <ul className='list'>
                            <li>
                                <Link to = '/we/our-story' className='links'>
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link to = '/we/Teams' className='links'>
                                    Teams
                                </Link>
                            </li>
                            <li>
                                <Link to = '/we/join-us' className='links'>
                                    Join Us
                                </Link>
                            </li>
                            <li>
                                <Link to = '/we/contact-us' className='links'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col span = {4} className='iotLinks'>
                        <h3>IoT</h3>
                        <ul className='list'>
                            <li>
                                <Link to = '/iot/passive-safety' className='links'>
                                    Passive Safety
                                </Link>
                            </li>
                            <li>
                                <Link to = '/iot/active-safety' className='links'>
                                    Active Safety
                                </Link>
                            </li>
                            <li>
                                <Link to = '/iot/transmission-unit' className='links'>
                                    Transmission Unit
                                </Link>
                            </li>
                            <li>
                                <Link to = '/iot/body-electronics' className='links'>
                                    Body Electronics
                                </Link>
                            </li>
                            <li>
                                <Link to = '/iot/steering-solutions' className='links'>
                                    Steering Solutions
                                </Link>
                            </li>
                            <li>
                                <Link to = '/iot/infotainment' className='links'>
                                    Infotainment
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col span = {4} className='automotiveLinks'>
                        <h3>Automotive</h3>
                        <ul className='list '>
                            <li>
                                <Link to = '/automotive/gotel' className='links'>
                                    Gotel
                                </Link>
                            </li>
                            <li>
                                <Link to = '/automotive/dhruba' className='links'>
                                    Dhruba
                                </Link>
                            </li>
                            <li>
                                <Link to = '/automotive/botg' className='links'>
                                    BOTG
                                </Link>
                            </li>
                            <li>
                                <Link 
                                to = '/automotive/off-highway-power-train-remote-diagnostics'
                                className='links'
                                >
                                    Off Highway Power Train Remote Diagnostics
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col span = {6}>
                        Hello
                    </Col>
                </Row>
                <Divider/>
                <Row>
                    <Col span = {3}>
                        Hello
                    </Col>
                    <Col span = {3}>
                        Hello
                    </Col>
                    <Col span = {3}>
                        Hello
                    </Col>
                    <Col span = {3}>
                        Hello
                    </Col>
                    <Col span = {12}>
                        Hello
                    </Col>
                </Row>
            </FooterContents>
        </AntFooter>
    )
}

export default Footer;
