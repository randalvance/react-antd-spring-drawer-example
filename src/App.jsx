import React from 'react';
import { Row } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

import SideBar from './components/SideBar';
import Overview from './components/Overview';
import { FullScreenProvider } from './contexts/FullScreenContext';

function App() {
  return (
    <div className="App">
      <FullScreenProvider>
        <Row type="flex">
          <SideBar />
          <Overview />
        </Row>
      </FullScreenProvider>
    </div>
  );
}

export default App;
