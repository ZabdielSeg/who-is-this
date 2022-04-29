import { Layout } from 'antd';
import './App.css';
import ActorCard from './components/ActorCard';
import DragAndDrop from './components/DragAndDrop';
import { Routes, Route } from 'react-router-dom';

const { Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout className='layout'>
        <Content className='content' >
          <Routes>
            <Route path='/' element={<DragAndDrop />} />
            <Route path='/:actorName' element={<ActorCard />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
