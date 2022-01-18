import { Col, Row, Button, Menu, Dropdown } from 'antd';
import { FooterContents } from './style';
import { Link } from 'react-router-dom';
import CompanyLogo from './logo.svg';
import { FacebookFilled, TwitterSquareFilled, LinkedinFilled, ArrowRightOutlined, DownOutlined } from '@ant-design/icons'

const Footer = () => {
    return (
            <FooterContents>
                <Row 
                className='footer-links'
                gutter = {20}
                >
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
                        <Button type="primary" className='sign-in'>
                            Sign In <ArrowRightOutlined />
                        </Button>


                        <br/><br/>
                        <h4>We're Social</h4>
                        <ul className='social-media'>
                            <li className='media-tag'>
                                <a href = 'https://www.facebook.com/brigosha'>
                                    <FacebookFilled style = {{color: '#3E5C9A'}}/>
                                </a>
                            </li>
                            <li className='media-tag'>
                                <a href = 'https://www.linkedin.com/company/brigosha-technologies-pvt-lmt/about/'>
                                    <LinkedinFilled style = {{color: '#117BB8'}}/>
                                </a>
                            </li>
                            <li className='media-tag'>
                                <a href = 'https://twitter.com/Brigosha'>
                                    <TwitterSquareFilled style = {{color: '#29A9E1'}}/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row className='footer-footer'>
                    <Col span = {3}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                English(US) <DownOutlined />
                            </a>
                        </Dropdown>
                    </Col>
                    <Col span = {3}>
                        Privacy
                    </Col>
                    <Col span = {3}>
                        Terms
                    </Col>
                    <Col span = {3}>
                        Sitemap
                    </Col>
                    <Col span = {12} >
                        <h5 className='footertext'>
                            ISO 9001:2015 Certified Company<br/>
                        Copyright @ Brigosha Technologies. All rights reserved.</h5>
                    </Col>
                </Row>
            </FooterContents>
    )
}

const menu = (
    <Menu>
        <Menu.Item key="0">
            Hindi
        </Menu.Item>
        <Menu.Item key="1">
            Assamese
        </Menu.Item>
        <Menu.Item key="3">
            Kannada   
        </Menu.Item>
    </Menu>
  );

export default Footer;
