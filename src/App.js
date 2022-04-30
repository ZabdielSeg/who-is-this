import './App.css';
import { Layout } from 'antd';
import ActorCard from './components/ActorCard';
import DragAndDrop from './components/DragAndDrop';
import { Routes, Route } from 'react-router-dom';
import ActorContextProvider from './context/ActorContext';
const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className='layout'>
        <Content className='content' >
          <ActorContextProvider>
            <Routes>
              <Route path='/' element={<DragAndDrop />} />
              <Route path='/the-celebrity' element={<ActorCard />} />
            </Routes>
          </ActorContextProvider>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
