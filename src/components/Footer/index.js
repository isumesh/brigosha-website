import { Col, Divider, Row } from 'antd';
import { FooterContents } from './style';
import { Link } from 'react-router-dom';
import CompanyLogo from './logo.svg';
import { Button } from '../Button/Button';
import { FacebookFilled, TwitterSquareFilled, LinkedinFilled } from '@ant-design/icons'

const Footer = () => {
    return (
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
                            VCR Cornerstone, #780, 3rd Floor, 19th Main, 560102, 
                            1st Sector, HSR Layout, Bengaluru, Karnataka 560102
                        </p>
                    </Col>
                    <Col span = {4} className='weLinks'>
                        <Link to = '/we/our-story'>
                        <h3>We</h3>
                        </Link>
                        <ul className='list'>
                            <li>
                                <Link to = '/we/our-story' className='links' >
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
                        <Link to='/iot/passive-safety'>
                            <h3>IoT</h3>
                        </Link>
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
                        <Link to = 'automotive/gotel'>
                            <h3>Automotive</h3>
                        </Link>
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
                        <h3>For Associates</h3><br/>
                        <Button
                            buttonStyle='btn--primary'
                            buttonColor='blue'
                            buttonSize= 'btn--wide'
                        >
                            Sign In  
                        </Button>
                        <br/><br/>
                        <h4>We're Social</h4>
                        <ul className='social-media'>
                            <li>
                                <a href = 'https://www.facebook.com/brigosha'>
                                    <FacebookFilled />
                                </a>
                            </li>
                            <li>
                                <a href = 'https://www.linkedin.com/company/brigosha-technologies-pvt-lmt/about/'>
                                    <LinkedinFilled style = {{color: '#117BB8'}}/>
                                </a>
                            </li>
                            <li>
                                <a href = 'https://twitter.com/Brigosha'>
                                    <TwitterSquareFilled />
                                </a>
                            </li>
                        </ul>
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
    )
}

export default Footer;
