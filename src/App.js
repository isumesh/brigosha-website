import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import WeContent from './pages/we/weContent';
import OurStory from './pages/we/subpages/ourStory/ourStory';
import Teams from './pages/we/subpages/teams/teams';
import Joinus from './pages/we/subpages/joinUs/joinUs';
import ContactUs from './pages/we/subpages/contactUs/contactUs';
import Iot from './pages/iot/iot';
import Automotive from './pages/automotive/automotive';
import PassiveSafety from './pages/iot/subpages/passiveSafety/passiveSafety';
import ActiveSafety from './pages/iot/subpages/activeSafety/activeSafety';
import TransmissionUnit from './pages/iot/subpages/transmissionUnit/transmissionUnit';
import BodyElectronics from './pages/iot/subpages/bodyElectronics/bodyElectronics';
import SteeringSolutions from './pages/iot/subpages/steeringSolutions/steeringSolutions';
import Infotainment from './pages/iot/subpages/infotainment/infotainment';
import Gotel from './pages/automotive/subpages/gotel/gotel';
import Dhruba from './pages/automotive/subpages/dhruba/dhruba';
import Botg from './pages/automotive/subpages/botg/botg';
import Diagnostics from './pages/automotive/subpages/diagnostics/diagnostics';
import styled from 'styled-components';



const { Content } = Layout;


function App() {
  return (
      <Page>
        <Header className = 'heading'/>
        <Layout className='content'>
          <Content >
            <Routes>
              <Route path = '/we' element = {<WeContent/>}>
                <Route path = '/we/our-story' element = {<OurStory/>}/>
                <Route path = '/we/teams' element = {<Teams/>}/>
                <Route path = '/we/join-us' element = {<Joinus/>}/>
                <Route path = '/we/contact-us' element = {<ContactUs/>}/>
              </Route>
              <Route path = '/iot' element = {<Iot/>}>
                <Route path = '/iot/passive-safety' element = {<PassiveSafety/>}/>
                <Route path = '/iot/active-safety' element = {<ActiveSafety/>}/>
                <Route path = '/iot/transmission-unit' element = {<TransmissionUnit/>}/>
                <Route path = '/iot/body-electronics' element = {<BodyElectronics/>}/>
                <Route path = '/iot/steering-solutions' element = {<SteeringSolutions/>}/>
                <Route path = '/iot/infotainment' element = {<Infotainment/>}/>
              </Route>
              <Route path = '/automotive' element = {<Automotive/>}>
                <Route path = '/automotive/gotel' element = {<Gotel/>}/>
                <Route path = '/automotive/dhruba' element = {<Dhruba/>}/>
                <Route path = '/automotive/botg' element = {<Botg/>}/>
                <Route path = '/automotive/off-highway-power-train-remote-diagnostics' element = {<Diagnostics/>}/>
              </Route>
            </Routes> 
          </Content>
          <Footer />
        </Layout>
      </Page>
  );
}

const Page = styled(Layout)`
    position: relative;
    height: 100%;
    overflow: auto;
    
`

export default App;
