import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Dashboard, Services } from './components/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Services />
    </div>
    
  );
}

export default App;
