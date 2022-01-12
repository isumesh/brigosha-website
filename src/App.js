import { Layout } from 'antd';
import { Header, Footer } from './components';
const { Content } = Layout;

function App() {
  return (
    <>
    <Layout style={Style.layout}>
      <Header />
      <Layout className='content'>
        <Content >Content</Content>
        <Footer />
      </Layout>
    </Layout>
    </>
  );
}

const Style = {
  layout: {
    height: '100vh',
    backgroundColor: 'red'
  }
};

export default App;
