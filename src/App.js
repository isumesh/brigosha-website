
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import WeContent from './components/Header/pages/we/weContent';
import OurStory from './components/Header/pages/we/subpages/ourStory/ourStory';
import Teams from './components/Header/pages/we/subpages/teams/teams';
import Joinus from './components/Header/pages/we/subpages/joinUs/joinUs';
import ContactUs from './components/Header/pages/we/subpages/contactUs/contactUs';
import Iot from './components/Header/pages/iot/iot';
import Automotive from './components/Header/pages/automotive/automotive';
import PassiveSafety from './components/Header/pages/iot/subpages/passiveSafety/passiveSafety';
import ActiveSafety from './components/Header/pages/iot/subpages/activeSafety/activeSafety';
import TransmissionUnit from './components/Header/pages/iot/subpages/transmissionUnit/transmissionUnit';
import BodyElectronics from './components/Header/pages/iot/subpages/bodyElectronics/bodyElectronics';
import SteeringSolutions from './components/Header/pages/iot/subpages/steeringSolutions/steeringSolutions';
import Infotainment from './components/Header/pages/iot/subpages/infotainment/infotainment';
import Gotel from './components/Header/pages/automotive/subpages/gotel/gotel';
import Dhruba from './components/Header/pages/automotive/subpages/dhruba/dhruba';
import Botg from './components/Header/pages/automotive/subpages/botg/botg';
import Diagnostics from './components/Header/pages/automotive/subpages/diagnostics/diagnostics';



const { Content } = Layout;


function App() {
  return (
      <Layout style={Style.layout}>
        <Header />
        <Layout className='content'>
          <Content >
            <Routes>
              <Route exact path = '/we' element = {<WeContent/>}>
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
      </Layout>
  );
}

const Style = {
  layout: {
    height: '100vh',
    backgroundColor: 'white'
  }
};

export default App;
