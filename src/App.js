import { Layout } from 'antd';
import './App.css';
import ActorCard from './components/ActorCard';
import DragAndDrop from './components/DragAndDrop';
const { Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout className='layout'>
        <Content style={{ width: '60%', display: 'flex', margin: 'auto', justifyContent: 'center', alignItems: 'center' }} >
          <div className="site-layout-content">
            {/* <DragAndDrop /> */}
            <ActorCard />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
