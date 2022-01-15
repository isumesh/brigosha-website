
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

const { Content } = Layout;


function App() {
  return (
      <Layout style={Style.layout}>
        <Header />
        <Layout className='content'>
          <Content >
            <Routes>
              <Route exact path = '/we' element = {<WeContent/>}>
                <Route path = 'our-story' element = {<OurStory/>}/>
                <Route path = 'teams' element = {<Teams/>}/>
                <Route path = 'join-us' element = {<Joinus/>}/>
                <Route path = 'contact-us' element = {<ContactUs/>}/>
              </Route>
              <Route path = '/iot' element = {<Iot/>}/>
              <Route path = '/automotive' element = {<Automotive/>}/>
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
  }
};

export default App;
